'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Crown, Zap } from 'lucide-react';

export const ProHeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[#020202]">
                {/* Gradient Orbs */}
                {/* Gradient Orbs - Enhanced */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[100px]" />

                {/* Futuristic Grid */}
                <div
                    className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] hover:bg-white/10 transition-colors cursor-default"
                >
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full">
                        <Sparkles className="w-3 h-3 text-white" />
                        <span className="text-[10px] font-black tracking-wider text-white uppercase">PRO</span>
                    </div>
                    <span className="text-sm font-medium text-white/80">解鎖進階設計系統</span>
                </motion.div>

                {/* Title Main */}
                <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-white drop-shadow-2xl">打造驚艷的</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="relative"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-purple-400 to-indigo-500 relative z-10">
                            AI 設計風格
                        </span>
                        <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-purple-400 to-indigo-500 blur-2xl opacity-50 -z-10" aria-hidden="true">
                            AI 設計風格
                        </span>
                    </motion.div>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                >
                    專業級設計系統指示詞，讓 AI 生成的介面從普通變非凡。
                    <br className="hidden md:block" />
                    <span className="text-white/80 font-medium">一次購買，終身使用。</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
                >
                    <Link
                        href="/pro/S01"
                        className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)]"
                    >
                        <div className="absolute inset-0 rounded-full bg-white blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                        <Play className="w-5 h-5 relative z-10 fill-current" />
                        <span className="relative z-10">瀏覽風格資源庫</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="#pricing"
                        className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] transition-all backdrop-blur-md"
                    >
                        <Crown className="w-5 h-5 text-yellow-400" />
                        查看方案
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
                >
                    {[
                        { value: '10+', label: 'Pro 風格', icon: Sparkles },
                        { value: '完整', label: '設計系統', icon: Zap },
                        { value: '終身', label: '免費更新', icon: Crown },
                    ].map((stat) => (
                        <div key={stat.label} className="flex items-center gap-3">
                            <div className="p-2 bg-purple-500/10 rounded-lg">
                                <stat.icon className="w-5 h-5 text-purple-400" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-black text-white">{stat.value}</div>
                                <div className="text-xs text-white/40">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#020202] to-transparent z-20" />
        </section>
    );
};
