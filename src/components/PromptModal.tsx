'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Terminal, Sparkles, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { styles } from '../data/styles';
import { assemblePrompt } from '@/lib/promptEngine';

interface PromptModalProps {
  styleId: string;
  isOpen: boolean;
  onClose: () => void;
  tier?: 'free' | 'pro';  // 新增 tier 參數
}

export const PromptModal: React.FC<PromptModalProps> = ({ styleId, isOpen, onClose, tier = 'free' }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [isCopying, setIsCopying] = useState(false);

  const currentStyle = styles.find(s => s.id === styleId);

  useEffect(() => {
    if (!isOpen || !currentStyle) return;

    const generatePrompt = async () => {
      try {
        // Pro 模式：先呼叫後端驗證
        if (tier === 'pro') {
          const response = await fetch('/api/promo-guard', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ styleId: currentStyle.id, tier: 'pro' }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.warn('[PromptModal] Pro access denied:', errorData);
            // 降級到 Free 版
            const prompt = assemblePrompt({
              styleId: currentStyle.id,
              industryId: 'SaaS',
              useId: 'FullLandingPage',
              tier: 'free',  // 降級
            });
            setPromptText(prompt);
            return;
          }
        }

        // 驗證通過，生成提示詞
        const prompt = assemblePrompt({
          styleId: currentStyle.id,
          industryId: 'SaaS',
          useId: 'FullLandingPage',
          tier: tier,
        });
        setPromptText(prompt);

      } catch (err) {
        console.error('Failed to generate prompt', err);
        setPromptText(t('promptModal.generateFailed') || 'Failed to generate prompt');
      }
    };

    generatePrompt();
  }, [isOpen, currentStyle, tier, t]);

  const handleCopy = async () => {
    try {
      setIsCopying(true);

      // Write immediately to prevent "Document is not focused" error (browser security)
      await navigator.clipboard.writeText(promptText);

      // Simulate processing/copying delay for UX
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsCopying(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      setIsCopying(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!currentStyle) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative bg-[#0c0c0c] border border-white/10 rounded-xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden font-mono ring-1 ring-white/5"
          >
            {/* Header - Mac Terminal Style */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#1a1a1a]">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                </div>

                <div className="flex items-center gap-2 text-xs text-white/40 select-none min-w-0">
                  <Terminal className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="hidden md:inline">prompt_generator.exe</span>
                  <span className="hidden md:inline text-white/20">/</span>
                  <span className="text-white/60 font-medium truncate">{currentStyle.name}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 min-h-0 relative group flex flex-col bg-black">
              <div className="flex-1 flex flex-col min-h-0">
                {/* Prompt Text Area */}
                <div
                  className="flex-1 overflow-y-scroll p-4 md:p-6 bg-black [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40 [&::-webkit-scrollbar-thumb]:rounded-none"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}
                >
                  <div className="text-xs text-white/30 mb-4 select-none border-b border-white/10 pb-4">
                    <div className="flex justify-between">
                      <span>// Mode: {currentStyle.name}</span>
                      <span>// Status: Ready</span>
                    </div>
                    <div>// Target: SaaS Full Landing Page</div>
                    <div>// Output: Markdown</div>
                  </div>
                  <pre className="text-sm font-mono text-[#d4d4d4] whitespace-pre-wrap break-words leading-relaxed pb-8 pr-2">
                    <span className="text-green-500/50 select-none mr-2">{'>'}</span>
                    {promptText}
                    <span className="inline-block w-2 h-4 bg-green-500/50 animate-pulse ml-1 align-middle" />
                  </pre>
                </div>

                {/* Floating Copy Button (Desktop) */}
                <div className="absolute top-6 right-6 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={handleCopy}
                    disabled={isCopying}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 text-white rounded transition-all shadow-lg"
                  >
                    {isCopying ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : copied ? (
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span className="text-xs font-medium font-mono">
                      {isCopying ? 'Copying...' : copied ? t('promptModal.copied') : t('promptModal.copy')}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-white/10 bg-[#0c0c0c] z-10">
              <button
                onClick={handleCopy}
                disabled={isCopying}
                className={`
                  w-full flex items-center justify-center gap-2 py-3 rounded font-bold font-mono text-sm transition-all duration-200
                  ${copied
                    ? 'bg-green-900/30 text-green-400 border border-green-500/30'
                    : 'bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
                  }
                `}
              >
                {isCopying ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{t('promptModal.copying') || 'Processing...'}</span>
                  </>
                ) : copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{t('promptModal.promptCopied')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{t('promptModal.copyPrompt')}</span>
                  </>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-white/20 font-mono">
                <span>ready to execute</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
