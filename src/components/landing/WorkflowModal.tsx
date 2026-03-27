'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Monitor, Layers, Zap, Database } from 'lucide-react';

interface WorkflowModalProps {
    isOpen: boolean;
    onClose: () => void;
    workflowId: number | null;
}

export const WorkflowModal: React.FC<WorkflowModalProps> = ({ isOpen, onClose, workflowId }) => {
    const { t } = useTranslation();

    if (!workflowId) return null;

    const getIcon = () => {
        switch (workflowId) {
            case 1: return <Monitor className="w-6 h-6 text-purple-400" />;
            case 2: return <Layers className="w-6 h-6 text-purple-400" />;
            case 3: return <Zap className="w-6 h-6 text-purple-400" />;
            case 4: return <Database className="w-6 h-6 text-purple-400" />;
            default: return null;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Icon */}
                            <div className="mb-6 flex items-center gap-3">
                                <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                                    {getIcon()}
                                </div>
                                <h2 className="text-3xl font-bold text-white">
                                    {t(`landing.workflow.b${workflowId}.title`)}
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-white/60 text-lg mb-6 leading-relaxed">
                                {t(`landing.workflow.b${workflowId}.desc`)}
                            </p>

                            {/* Detailed Content */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {t(`landing.workflowDetails.step${workflowId}.title`)}
                                </h3>
                                <p className="text-white/50 leading-relaxed">
                                    {t(`landing.workflowDetails.step${workflowId}.content`)}
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <button
                                    onClick={onClose}
                                    className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors"
                                >
                                    {t('common.close') || '關閉'}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
