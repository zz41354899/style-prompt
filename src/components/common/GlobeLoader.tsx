"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface GlobeLoaderProps {
    size?: number;
    className?: string;
    text?: string;
}

export function GlobeLoader({ size = 120, className = "", text }: GlobeLoaderProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: size * 2,
            height: size * 2,
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
                phi += 0.02; // Faster rotation for loading effect
            },
        });

        return () => {
            globe.destroy();
        };
    }, [size]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`relative flex flex-col items-center justify-center gap-4 ${className}`}
        >
            {/* Pulsing glow ring */}
            <div className="relative">
                <div
                    className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse"
                    style={{ width: size + 40, height: size + 40, left: -20, top: -20 }}
                />
                <div
                    className="absolute rounded-full border border-purple-500/30 animate-ping"
                    style={{
                        width: size + 20,
                        height: size + 20,
                        left: -10,
                        top: -10,
                        animationDuration: '2s'
                    }}
                />
                <canvas
                    ref={canvasRef}
                    style={{
                        width: size,
                        height: size,
                        aspectRatio: 1,
                    }}
                    className="relative z-10"
                />
            </div>

            {/* Loading text */}
            {text && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 text-sm font-medium"
                >
                    {text}
                </motion.p>
            )}
        </motion.div>
    );
}
