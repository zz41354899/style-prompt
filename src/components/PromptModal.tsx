'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { X, Copy, Check, Coffee } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { styles } from '../data/styles';

export const PromptModal: React.FC = () => {
  const { styleId: styleIdParam } = useParams<{ styleId?: string | string[] }>();
  const router = useRouter();
  const styleId = Array.isArray(styleIdParam) ? styleIdParam[0] : styleIdParam;
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentStyle = styles.find(s => s.id === styleId);

  useEffect(() => {
    const generatePrompt = async () => {
      if (!currentStyle) return;
      
      setLoading(true);
      setError(null);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const prompt = `Design a ${currentStyle.name.toLowerCase()} website with the following characteristics:

Style: ${currentStyle.name} (${currentStyle.id})
${currentStyle.description}

Key Design Elements:
- Architecture: Modern, clean structure with balanced proportions
- DNA: ${currentStyle.name} aesthetic with ${currentStyle.id.toLowerCase()} color palette
- Visual Language: ${currentStyle.name === 'Tech Minimal' ? 'Clean lines, subtle gradients, ample white space' : 
                  currentStyle.name === 'Brutalist' ? 'Bold typography, stark contrasts, raw materials' :
                  currentStyle.name === 'Cyberpunk' ? 'Neon glows, dark themes, futuristic elements' :
                  'Consistent with ' + currentStyle.name.toLowerCase() + ' principles'}

Implementation Guidelines:
- Use semantic HTML5 elements
- Implement responsive grid system
- Apply consistent spacing and typography
- Ensure cross-browser compatibility
- Optimize for performance and SEO
- Follow accessibility best practices

Color Palette:
- Primary: Based on ${currentStyle.id} theme
- Secondary: Complementary colors that enhance readability
- Background: Clean, professional backdrop that highlights content

Typography:
- Headings: Bold, distinctive font family
- Body: Clean, readable sans-serif
- Maintain proper hierarchy and contrast

Layout Considerations:
- Mobile-first responsive design
- Intuitive navigation patterns
- Clear call-to-action buttons
- Optimized loading performance

This design should embody the essence of ${currentStyle.name} while ensuring excellent user experience and modern web standards.`;

        setPromptText(prompt);
      } catch (err) {
        setError(t('promptModal.generateFailed'));
      } finally {
        setLoading(false);
      }
    };

    generatePrompt();
  }, [currentStyle]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleClose = () => {
    router.push(styleId ? `/${styleId}` : '/');
  };

  if (!currentStyle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={handleClose}
      />
      <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t('promptModal.designPrompt')}</h2>
            <p className="text-gray-400">
              {currentStyle.name} — {currentStyle.description}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden p-6">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center gap-3 text-gray-400">
                <Coffee className="w-6 h-6 animate-pulse" />
                <span>{t('promptModal.generatingPrompt')}</span>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-red-400 mb-4">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
                >
                  {t('promptModal.tryAgain')}
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              {/* Actions */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Link
                    href={`/builder/${styleId}`}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  >
                    {t('promptModal.customizeInBuilder')}
                  </Link>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-black rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{t('promptModal.copied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{t('promptModal.copyPrompt')}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Prompt Content */}
              <div className="flex-1 overflow-y-auto bg-[#0a0a0a] rounded-lg p-6">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                  {promptText}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0a0a0a]/50">
          <p className="text-xs text-gray-500 text-center">
            {t('promptModal.promptUsageHint', { styleName: currentStyle.name })}
          </p>
        </div>
      </div>
    </div>
  );
};
