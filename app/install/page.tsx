'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '@/components/SubPageLayout';
import { Terminal, Copy, Check, Zap, Cpu, Layers, Github, ExternalLink, Package } from 'lucide-react';

export default function InstallPage() {
    const { t } = useTranslation();
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    const CodeBlock = ({ code, id }: { code: string; id: string }) => (
        <div className="relative group mt-4">
            <div className="absolute inset-0 bg-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white/[0.03] border border-white/10 rounded-xl p-4 font-mono text-sm overflow-x-auto flex items-center justify-between group">
                <code className="text-purple-300">$ {code}</code>
                <button
                    onClick={() => handleCopy(code, id)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/40 hover:text-white"
                >
                    {copied === id ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );

    return (
        <SubPageLayout
            title={t('pages.install.title')}
            subtitle={t('pages.install.subtitle')}
        >
            <div className="space-y-16">
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors">
                        <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                        <h3 className="text-lg font-bold mb-2">{t('pages.install.features.item1')}</h3>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors">
                        <Cpu className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-lg font-bold mb-2">{t('pages.install.features.item2')}</h3>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors">
                        <Layers className="w-8 h-8 text-purple-400 mb-4" />
                        <h3 className="text-lg font-bold mb-2">{t('pages.install.features.item3')}</h3>
                    </div>
                </div>

                {/* Quick Start */}
                <section>
                    <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
                        <Terminal className="w-8 h-8 text-purple-500" />
                        {t('pages.install.quickStart.title')}
                    </h2>

                    <div className="space-y-10">
                        <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                            <h3 className="text-xl font-bold mb-2">{t('pages.install.quickStart.npx.title')}</h3>
                            <p className="text-white/40 mb-6">{t('pages.install.quickStart.npx.desc')}</p>
                            <CodeBlock code="npx style-prompt-skill init" id="npx" />
                        </div>

                        <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                            <h3 className="text-xl font-bold mb-2">{t('pages.install.quickStart.manual.title')}</h3>
                            <p className="text-white/40 mb-4">{t('pages.install.quickStart.manual.desc')}</p>
                            <CodeBlock code="npm install -D style-prompt-skill" id="npm1" />
                            <CodeBlock code="npx style-prompt init" id="npm2" />
                        </div>
                    </div>
                </section>

                {/* How it Works */}
                <section className="p-10 rounded-[2.5rem] bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-white/10">
                    <h2 className="text-2xl font-bold mb-6">{t('pages.install.howItWorks.title')}</h2>
                    <p className="text-white/60 mb-8 leading-relaxed">{t('pages.install.howItWorks.desc')}</p>
                    <ul className="space-y-4">
                        <li className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">1</div>
                            <p className="text-white/50">{t('pages.install.howItWorks.step1')}</p>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">2</div>
                            <p className="text-white/50">{t('pages.install.howItWorks.step2')}</p>
                        </li>
                    </ul>
                </section>

                {/* Supported Tools */}
                <section>
                    <h2 className="text-2xl font-bold mb-8">{t('pages.install.supportedTools.title')}</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { name: 'Cursor AI', descHtml: t('pages.install.supportedTools.cursor') },
                            { name: 'Windsurf IDE', descHtml: t('pages.install.supportedTools.windsurf') },
                            { name: 'Claude Code', descHtml: t('pages.install.supportedTools.claude') }
                        ].map((tool) => (
                            <div key={tool.name} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.04] transition-colors">
                                <div>
                                    <h4 className="font-bold text-purple-400 mb-1">{tool.name}</h4>
                                    <p className="text-sm text-white/40">{tool.descHtml}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Structure */}
                <section className="pb-12">
                    <h2 className="text-2xl font-bold mb-8">{t('pages.install.structure.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                            <code className="text-purple-400 text-sm block mb-2 font-mono">SKILL.md</code>
                            <p className="text-sm text-white/40">{t('pages.install.structure.item1')}</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                            <code className="text-purple-400 text-sm block mb-2 font-mono">references/</code>
                            <p className="text-sm text-white/40">{t('pages.install.structure.item2')}</p>
                        </div>
                    </div>
                </section>

                {/* Source Links */}
                <section>
                    <h2 className="text-2xl font-bold mb-8">{t('pages.install.links.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href="https://github.com/zz41354899/style-prompt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.04] hover:border-purple-500/30 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                    <Github className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-0.5">{t('pages.install.links.github')}</h4>
                                    <p className="text-xs text-white/30 font-mono">github.com/zz41354899/style-prompt</p>
                                </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="https://www.npmjs.com/package/style-prompt-skill"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.04] hover:border-purple-500/30 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                                    <Package className="w-5 h-5 text-white group-hover:text-red-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-0.5">{t('pages.install.links.npm')}</h4>
                                    <p className="text-xs text-white/30 font-mono">npmjs.com/package/style-prompt-skill</p>
                                </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </section>

                {/* Footer Message */}
                <div className="text-center pt-8 border-t border-white/5">
                    <p className="text-white/20 text-sm uppercase tracking-widest font-bold">
                        {t('pages.install.supportedTools.footer')}
                    </p>
                </div>
            </div>
        </SubPageLayout>
    );
}
