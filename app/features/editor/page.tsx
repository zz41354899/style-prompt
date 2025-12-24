'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { Layout, Palette, Code, MousePointer2 } from 'lucide-react';
import Link from 'next/link';

export default function EditorPage() {
    const { t } = useTranslation();

    return (
        <SubPageLayout
            title={t('pages.editor.title')}
            subtitle={t('pages.editor.subtitle')}
        >
            <div className="relative aspect-video w-full bg-white/5 rounded-3xl border border-white/10 mb-16 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center group-hover:scale-110 transition-transform">
                        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl shadow-purple-600/50">
                            <Layout className="w-10 h-10 text-white" />
                        </div>
                        <span className="text-xs uppercase font-black tracking-widest text-white/40">Visual Interface Preview</span>
                    </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <Link href="/S01" className="px-6 py-2 bg-white text-black text-xs font-black rounded-full hover:bg-slate-200 transition-all flex items-center gap-2">
                        <MousePointer2 className="w-3 h-3" /> {t('pages.editor.launch')}
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="space-y-4">
                    <Palette className="w-6 h-6 text-purple-500" />
                    <h4 className="font-bold">{t('pages.editor.styles')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.editor.stylesDesc')}</p>
                </div>
                <div className="space-y-4">
                    <Code className="w-6 h-6 text-purple-500" />
                    <h4 className="font-bold">{t('pages.editor.blocks')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.editor.blocksDesc')}</p>
                </div>
                <div className="space-y-4">
                    <Layout className="w-6 h-6 text-purple-500" />
                    <h4 className="font-bold">{t('pages.editor.preview')}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{t('pages.editor.previewDesc')}</p>
                </div>
            </div>

            <div className="p-8 rounded-3xl bg-purple-600/5 border border-purple-500/20 text-center">
                <h3 className="text-xl font-bold mb-4">{t('pages.editor.cta')}</h3>
                <Link href="/S01" className="inline-block px-12 py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-500 transition-all shadow-xl shadow-purple-600/20">
                    {t('pages.editor.launch')}
                </Link>
            </div>
        </SubPageLayout>
    );
}
