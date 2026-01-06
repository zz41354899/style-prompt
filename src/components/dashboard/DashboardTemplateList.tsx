'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Rocket, Utensils, Briefcase, GraduationCap, Heart, Lock, Download, ExternalLink } from 'lucide-react';
import { usePurchase } from '@/hooks/usePurchase';

const templates = [
    {
        icon: ShoppingBag,
        name: '電商平台',
        description: '線上商店、品牌電商',
        color: 'from-orange-500 to-amber-500',
        downloadUrl: '#'
    },
    {
        icon: Rocket,
        name: 'SaaS 軟體',
        description: 'B2B 軟體、雲端服務',
        color: 'from-blue-500 to-cyan-500',
        downloadUrl: '#'
    },
    {
        icon: Utensils,
        name: '餐飲美食',
        description: '餐廳、咖啡廳、外送服務',
        color: 'from-red-500 to-orange-500',
        downloadUrl: '#'
    },
    {
        icon: Briefcase,
        name: '企業形象',
        description: '公司官網、品牌網站',
        color: 'from-slate-500 to-zinc-500',
        downloadUrl: '#'
    },
    {
        icon: GraduationCap,
        name: '教育培訓',
        description: '線上課程、教育機構',
        color: 'from-purple-500 to-violet-500',
        downloadUrl: '#'
    },
    {
        icon: Heart,
        name: '健康醫療',
        description: '診所、健康服務、健身',
        color: 'from-green-500 to-emerald-500',
        downloadUrl: '#'
    }
];

export const DashboardTemplateList: React.FC = () => {
    const { hasPro } = usePurchase();

    return (
        <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Pro 專屬模版資源</h2>
                    <p className="text-white/50">包含 6 款產業 Landing Page 模版原始碼</p>
                </div>
                {!hasPro && (
                    <div className="px-3 py-1 bg-white/10 text-white/50 text-xs rounded-full flex items-center gap-1.5">
                        <Lock className="w-3 h-3" />
                        升級 Pro 解鎖下載
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template, i) => (
                    <motion.div
                        key={template.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`group relative p-1 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 ${!hasPro ? 'opacity-60 grayscale-[0.5]' : 'hover:from-white/10 hover:to-white/5'}`}
                    >
                        <div className="h-full p-6 bg-[#080808] rounded-[22px] relative overflow-hidden flex flex-col">
                            {/* Blur Background */}
                            <div className={`absolute top-0 right-0 p-24 bg-gradient-to-br ${template.color} opacity-[0.05] blur-3xl rounded-full translate-x-12 -translate-y-12`} />

                            <div className="relative flex-1">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${template.color} bg-opacity-10 ring-1 ring-white/10`}>
                                        <template.icon className="w-6 h-6 text-white" />
                                    </div>
                                    {hasPro ? (
                                        <div className="p-2 rounded-full bg-white/5 text-white/40 group-hover:bg-green-500/20 group-hover:text-green-400 transition-colors">
                                            <Download className="w-4 h-4" />
                                        </div>
                                    ) : (
                                        <div className="p-2 rounded-full bg-white/5 text-white/40">
                                            <Lock className="w-4 h-4" />
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2">
                                    {template.name}
                                </h3>
                                <p className="text-sm text-white/40 leading-relaxed mb-6">
                                    {template.description}
                                </p>
                            </div>

                            <a
                                href={hasPro ? template.downloadUrl : '#'}
                                target={hasPro ? '_blank' : undefined}
                                rel={hasPro ? 'noopener noreferrer' : undefined}
                                className={`
                                    flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all
                                    ${hasPro
                                        ? 'bg-white text-black hover:bg-gray-100'
                                        : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5'
                                    }
                                `}
                                onClick={(e) => !hasPro && e.preventDefault()}
                            >
                                {hasPro ? (
                                    <>
                                        下載原始碼
                                        <ExternalLink className="w-4 h-4" />
                                    </>
                                ) : (
                                    <>
                                        <Lock className="w-4 h-4" />
                                        升級後解鎖
                                    </>
                                )}
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
