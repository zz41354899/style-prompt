'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, ShoppingBag, Rocket, Utensils, Briefcase, GraduationCap, Heart } from 'lucide-react';

const templates = [
    {
        icon: ShoppingBag,
        name: '電商平台',
        description: '線上商店、品牌電商',
        color: 'from-orange-500 to-amber-500'
    },
    {
        icon: Rocket,
        name: 'SaaS 軟體',
        description: 'B2B 軟體、雲端服務',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: Utensils,
        name: '餐飲美食',
        description: '餐廳、咖啡廳、外送服務',
        color: 'from-red-500 to-orange-500'
    },
    {
        icon: Briefcase,
        name: '企業形象',
        description: '公司官網、品牌網站',
        color: 'from-slate-500 to-zinc-500'
    },
    {
        icon: GraduationCap,
        name: '教育培訓',
        description: '線上課程、教育機構',
        color: 'from-purple-500 to-violet-500'
    },
    {
        icon: Heart,
        name: '健康醫療',
        description: '診所、健康服務、健身',
        color: 'from-green-500 to-emerald-500'
    }
];

export const ProTemplateShowcase: React.FC = () => {
    return (
        <section className="py-32 bg-[#020202] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px]" />
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                        <LayoutTemplate className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-purple-300">產業 Template</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        6 種產業 Landing Page
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        專為不同產業設計的 Landing Page 模板，快速打造專業的產品頁面
                    </p>
                </motion.div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {templates.map((template, i) => (
                        <motion.div
                            key={template.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300"
                        >
                            <div className="h-full p-6 bg-[#080808] rounded-[22px] border-t border-white/5 relative overflow-hidden">
                                <div className={`absolute top-0 right-0 p-32 bg-gradient-to-br ${template.color} opacity-[0.03] blur-3xl rounded-full translate-x-12 -translate-y-12 group-hover:opacity-[0.08] transition-opacity duration-500`} />

                                <div className="relative flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${template.color} bg-opacity-10 ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300`}>
                                            <template.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                                        {template.name}
                                    </h3>
                                    <p className="text-sm text-white/40 leading-relaxed mb-4 flex-1">
                                        {template.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs font-medium text-white/30 group-hover:text-white/60 transition-colors pt-4 border-t border-white/5">
                                        <LayoutTemplate className="w-3.5 h-3.5" />
                                        <span>包含在 Pro 方案</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Included Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-white/30 text-sm mt-8"
                >
                    ✨ 以上 Template 全部包含在 Pro 方案內
                </motion.p>
            </div>
        </section>
    );
};
