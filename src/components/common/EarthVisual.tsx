'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const EarthVisual = () => {
    // Generate random stars for the background
    const stars = useMemo(() => {
        return Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="relative w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center">
            {/* Background Grid/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_100%)] opacity-50" />

            {/* Stars */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white/20"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Earth Container */}
            <div className="relative w-[600px] h-[600px] flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />

                {/* Rotating Globe Wireframe (Simulated with circles) */}
                <motion.div
                    className="relative w-[400px] h-[400px]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                    {/* Longitude Lines */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={`long-${i}`}
                            className="absolute inset-0 border border-blue-500/20 rounded-full"
                            style={{
                                transform: `rotate(${i * 30}deg) scaleX(${0.4 + (i % 3) * 0.1})`
                            }}
                        />
                    ))}

                    {/* Latitude Lines */}
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={`lat-${i}`}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-blue-500/20 rounded-full"
                            style={{
                                width: `${100 - i * 15}%`,
                                height: `${100 - i * 15}%`
                            }}
                        />
                    ))}

                    {/* Dynamic Dots on Surface (Abstract Continents) */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    >
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={`dot-${i}`}
                                className="absolute w-2 h-2 bg-blue-400/60 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                style={{
                                    top: `${20 + Math.random() * 60}%`,
                                    left: `${20 + Math.random() * 60}%`,
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Inner Connecting Lines (Network effect) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <circle cx="50%" cy="50%" r="200" stroke="url(#lineGradient)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Overlay Gradient for seamless blending if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
    );
};
