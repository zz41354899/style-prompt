import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    fallbackColor?: string;
    className?: string;
}

/**
 * SafeImage 組件 - 帶有錯誤處理的圖片組件
 * 當圖片載入失敗時，顯示 fallbackColor 作為背景
 */
export const SafeImage: React.FC<SafeImageProps> = ({
    src,
    alt,
    fallbackColor = '#E5E7EB',
    className = '',
    ...props
}) => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleError = () => {
        setHasError(true);
        setIsLoading(false);
    };

    const handleLoad = () => {
        setIsLoading(false);
    };

    if (hasError) {
        return (
            <div
                className={className}
                style={{
                    backgroundColor: fallbackColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                aria-label={alt}
            >
                <span className="text-white/50 text-xs">Image unavailable</span>
            </div>
        );
    }

    return (
        <>
            {isLoading && (
                <div
                    className={className}
                    style={{
                        backgroundColor: fallbackColor,
                        position: 'absolute',
                        inset: 0,
                    }}
                />
            )}
            <img
                src={src}
                alt={alt}
                className={className}
                onError={handleError}
                onLoad={handleLoad}
                {...props}
            />
        </>
    );
};

export default SafeImage;
