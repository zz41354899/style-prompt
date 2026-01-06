"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AppLoaderProps {
    children?: React.ReactNode;
    /** 最小載入時間（毫秒） */
    minLoadTime?: number;
    /** 載入完成時的回調 */
    onComplete?: () => void;
}

/**
 * 全螢幕地球載入動畫
 * 可用於網頁初始載入或登入後過渡，帶有 0-100% 進度條效果
 */
export function AppLoader({ children, minLoadTime = 1500, onComplete }: AppLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // 模擬載入進度
    useEffect(() => {
        const startTime = Date.now();
        const targetProgress = 100;
        const duration = minLoadTime;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * targetProgress, targetProgress);
            setProgress(Math.round(newProgress));

            if (newProgress < targetProgress) {
                requestAnimationFrame(animate);
            } else {
                // 完成後等待一小段時間再隱藏
                setTimeout(() => {
                    setIsLoading(false);
                    onComplete?.();
                }, 300);
            }
        };

        requestAnimationFrame(animate);
    }, [minLoadTime, onComplete]);

    // 初始化地球
    useEffect(() => {
        let phi = 0;
        if (!canvasRef.current || !isLoading) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 400,
            height: 400,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 1.5,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.2, 0.2, 0.3],
            markerColor: [0.7, 0.4, 1],
            glowColor: [0.5, 0.3, 0.8],
            markers: [],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.015;
            },
        });

        return () => globe.destroy();
    }, [isLoading]);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center"
                    >
                        {/* 背景光暈 */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full" />
                        </div>

                        {/* 地球動畫 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            {/* 脈衝光環 */}
                            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse"
                                style={{ width: 240, height: 240, left: -20, top: -20 }} />

                            <canvas
                                ref={canvasRef}
                                style={{ width: 200, height: 200 }}
                                className="relative z-10"
                            />
                        </motion.div>

                        {/* 進度條區域 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="relative z-10 mt-8 flex flex-col items-center gap-3"
                        >
                            {/* 百分比文字 */}
                            <div className="text-4xl font-bold text-white tracking-wide">
                                {progress}%
                            </div>

                            {/* 進度條 */}
                            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>

                            {/* 載入文字 */}
                            <p className="text-gray-400 text-sm mt-2">
                                Loading StylePrompts...
                            </p>
                        </motion.div>

                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-8 flex items-center gap-2"
                        >
                            <div className="w-8 h-8 rounded-lg bg-black border border-white/20 flex items-center justify-center text-white font-bold text-sm">
                                SP
                            </div>
                            <span className="font-bold text-lg text-white/60">
                                StylePrompts
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 主內容 - 載入完成後顯示 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>
        </>
    );
}
