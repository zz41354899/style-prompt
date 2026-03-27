'use client';

import { motion } from 'framer-motion';
import { use } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { styles } from '@/data/styles';
import { styleComponents } from '@/components/styles';

export default function FullStylePage({
    params,
}: {
    params: Promise<{ styleId: string }>;
}) {
    const { styleId } = use(params);
    const { t } = useTranslation();
    const SelectedComponent = styleComponents[styleId];
    const currentStyle = styles.find(s => s.id === styleId);

    if (!SelectedComponent || !currentStyle) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <div className="text-white/40">{t('preview.styleNotFound')}</div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#030303] relative"
        >
            <SelectedComponent />

            {/* Floating Right Dock */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
                <div className="flex flex-col gap-2 p-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                    <Link
                        href={`/${styleId}`}
                        className="flex items-center justify-center w-12 h-12 rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
                        title={t('pages.backToHome') || '返回上一頁'}
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
