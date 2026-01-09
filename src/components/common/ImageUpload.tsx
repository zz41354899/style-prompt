'use client';

import React, { useState, useRef } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { uploadImage, deleteImage } from '@/lib/storageService';
import Image from 'next/image';

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    bucket?: string;
    folder?: string;
    maxWidth?: number;
    quality?: number;
}

/**
 * 使用 createImageBitmap 優化的圖片壓縮（更快、不阻塞主線程）
 */
const compressImage = async (file: File, maxWidth: number, quality: number): Promise<File> => {
    // 使用 createImageBitmap 直接從 Blob 創建，比 img.onload 更快
    const bitmap = await createImageBitmap(file);
    
    let { width, height } = bitmap;
    
    // 計算新尺寸
    if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
    }

    // 嘗試使用 OffscreenCanvas（如果支援）
    let canvas: HTMLCanvasElement | OffscreenCanvas;
    let ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null;
    
    if (typeof OffscreenCanvas !== 'undefined') {
        canvas = new OffscreenCanvas(width, height);
        ctx = canvas.getContext('2d');
    } else {
        canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
    }

    if (!ctx) {
        bitmap.close();
        throw new Error('Canvas context 不可用');
    }

    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close(); // 釋放資源

    // 獲取 Blob
    let blob: Blob;
    if (canvas instanceof OffscreenCanvas) {
        blob = await canvas.convertToBlob({ type: 'image/jpeg', quality });
    } else {
        blob = await new Promise<Blob>((resolve, reject) => {
            canvas.toBlob(
                (b) => b ? resolve(b) : reject(new Error('壓縮失敗')),
                'image/jpeg',
                quality
            );
        });
    }

    return new File([blob], file.name.replace(/\.[^.]+$/, '.jpg'), {
        type: 'image/jpeg',
        lastModified: Date.now(),
    });
};

export default function ImageUpload({ 
    value, 
    onChange, 
    bucket = 'notifications',
    folder = 'images',
    maxWidth = 1200,
    quality = 0.8
}: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // 驗證檔案類型
        if (!file.type.startsWith('image/')) {
            setError('請選擇圖片檔案');
            return;
        }

        // 驗證檔案大小 (最大 10MB 原始檔案)
        if (file.size > 10 * 1024 * 1024) {
            setError('圖片大小不能超過 10MB');
            return;
        }

        setIsUploading(true);
        setError(null);
        setProgress('壓縮中...');

        try {
            // 壓縮圖片
            console.log('開始壓縮圖片...', file.name, `${(file.size / 1024).toFixed(1)}KB`);
            const compressedFile = await compressImage(file, maxWidth, quality);
            const originalSize = (file.size / 1024).toFixed(1);
            const compressedSize = (compressedFile.size / 1024).toFixed(1);
            console.log(`圖片壓縮完成: ${originalSize}KB → ${compressedSize}KB`);

            setProgress('上傳中...');
            console.log('開始上傳到 Supabase Storage...');

            const { url, error: uploadError } = await uploadImage(compressedFile, bucket, folder);

            if (uploadError) {
                console.error('上傳錯誤:', uploadError);
                setError(uploadError.message);
                return;
            }

            if (url) {
                console.log('上傳成功:', url);
                onChange(url);
            }
        } catch (err) {
            console.error('上傳異常:', err);
            setError(err instanceof Error ? err.message : '上傳失敗');
        } finally {
            setIsUploading(false);
            setProgress('');
        }
    };

    const handleRemove = async () => {
        // 如果是 Supabase Storage 的圖片,同時刪除
        if (value && value.includes('supabase')) {
            await deleteImage(value, bucket);
        }
        onChange('');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    return (
        <div className="space-y-2">
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="image-upload"
            />

            {value ? (
                <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/20">
                    <Image
                        src={value}
                        alt="上傳的圖片"
                        width={800}
                        height={400}
                        className="w-full h-48 object-cover"
                        unoptimized
                    />
                    <button
                        type="button"
                        onClick={handleRemove}
                        className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 rounded-lg transition-colors"
                    >
                        <X className="w-4 h-4 text-white" />
                    </button>
                </div>
            ) : (
                <label
                    htmlFor="image-upload"
                    className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-purple-500/50 hover:bg-white/5 transition-colors ${
                        isUploading ? 'pointer-events-none opacity-50' : ''
                    }`}
                >
                    {isUploading ? (
                        <div className="flex items-center gap-2 text-white/50">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span className="text-sm">{progress || '處理中...'}</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-2 text-white/40">
                            <Upload className="w-8 h-8" />
                            <span className="text-sm">點擊上傳圖片</span>
                            <span className="text-xs">支援 JPG、PNG、GIF (自動壓縮)</span>
                        </div>
                    )}
                </label>
            )}

            {error && (
                <p className="text-red-400 text-xs">{error}</p>
            )}

            {/* 也可以輸入 URL */}
            <div className="flex items-center gap-2 text-xs text-white/30">
                <div className="flex-1 h-px bg-white/10" />
                <span>或輸入圖片 URL</span>
                <div className="flex-1 h-px bg-white/10" />
            </div>
            <input
                type="url"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 text-sm"
            />
        </div>
    );
}
