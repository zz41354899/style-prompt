'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, ChevronRight, Languages, LogOut, Loader2, type LucideIcon } from 'lucide-react';

// ============================================
// Types
// ============================================
export interface NavItem {
    href: string;
    label: string;
    icon: LucideIcon;
}

export interface GlassSidebarProps {
    /** 導航項目列表 */
    navItems: NavItem[];
    /** 區塊標題 */
    sectionTitle?: string;
    /** 返回連結 */
    backLink?: {
        href: string;
        text: string;
    };
    /** Logo 區塊（可選） */
    logo?: React.ReactNode;
    /** 使用者資訊（可選） */
    userInfo?: {
        avatarLetter: string;
        displayName: string;
        email?: string;
        memberType?: string;
        memberTypeClass?: string;
    };
    /** 語言切換（可選） */
    languageToggle?: {
        currentLang: string;
        onToggle: () => void;
    };
    /** 登出按鈕（可選） */
    onSignOut?: () => void | Promise<void>;
    /** 是否顯示登出確認 */
    showSignOutConfirm?: boolean;
    /** 額外的底部內容 */
    footerContent?: React.ReactNode;
    /** 背景漸層顏色位置 (預設左上) */
    gradientPosition?: 'top-left' | 'bottom-right';
}

// ============================================
// GlassSidebar Component
// ============================================
export const GlassSidebar: React.FC<GlassSidebarProps> = ({
    navItems,
    sectionTitle = 'Navigation',
    backLink,
    logo,
    userInfo,
    languageToggle,
    onSignOut,
    showSignOutConfirm = true,
    footerContent,
    gradientPosition = 'top-left'
}) => {
    const pathname = usePathname();
    const [isSigningOut, setIsSigningOut] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSignOut = async () => {
        if (!onSignOut) return;
        setIsSigningOut(true);
        try {
            await onSignOut();
        } finally {
            setIsSigningOut(false);
            setShowConfirm(false);
        }
    };

    const handleSignOutClick = () => {
        if (showSignOutConfirm) {
            setShowConfirm(true);
        } else {
            handleSignOut();
        }
    };

    return (
        <aside className="w-64 relative z-20 flex flex-col my-8 ml-8">
            <div className="h-full rounded-3xl bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/5 flex flex-col overflow-hidden relative shadow-2xl shadow-black/50">
                {/* Inner Glow */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                {/* Logo Area (optional) */}
                {logo && (
                    <div className="p-6 pb-2">
                        {logo}
                    </div>
                )}

                <div className="p-6">
                    {/* Back Link */}
                    {backLink && (
                        <Link 
                            href={backLink.href} 
                            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group mb-8"
                        >
                            <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-medium tracking-wide">{backLink.text}</span>
                        </Link>
                    )}

                    {/* Nav Items */}
                    <div className="space-y-1">
                        <h2 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 pl-3">
                            {sectionTitle}
                        </h2>
                        {navItems.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href !== navItems[0]?.href && pathname.startsWith(item.href));

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`group relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 ${
                                        isActive
                                            ? 'text-white'
                                            : 'text-white/50 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-white/10 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]" />
                                    )}
                                    <div className={`relative p-2 rounded-lg transition-all duration-300 ${
                                        isActive 
                                            ? 'bg-gradient-to-br from-purple-500 to-blue-600 text-white shadow-lg' 
                                            : 'bg-white/5 group-hover:bg-white/10'
                                    }`}>
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <span className="relative font-medium text-sm tracking-wide">{item.label}</span>
                                    {isActive && (
                                        <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,1)]" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Language Toggle */}
                {languageToggle && (
                    <div className="px-6 py-4 border-t border-white/5">
                        <button
                            onClick={languageToggle.onToggle}
                            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-all"
                        >
                            <div className="p-2 rounded-lg bg-white/5">
                                <Languages className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium">
                                {languageToggle.currentLang === 'zh-TW' ? 'English' : '繁體中文'}
                            </span>
                        </button>
                    </div>
                )}

                {/* User Info */}
                {userInfo && (
                    <div className="mt-auto p-4">
                        <div className="relative p-4 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px]">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">{userInfo.avatarLetter}</span>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    {userInfo.memberType && (
                                        <div className={`text-[10px] font-bold tracking-wider uppercase mb-0.5 ${userInfo.memberTypeClass || 'text-purple-400'}`}>
                                            {userInfo.memberType}
                                        </div>
                                    )}
                                    <div className="text-xs text-white/80 truncate font-medium">
                                        {userInfo.email || userInfo.displayName}
                                    </div>
                                </div>
                            </div>

                            {/* Sign Out Button */}
                            {onSignOut && (
                                <button
                                    onClick={handleSignOutClick}
                                    disabled={isSigningOut}
                                    className="w-full mt-3 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold hover:bg-red-500/20 transition-all uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSigningOut ? (
                                        <Loader2 className="w-3 h-3 animate-spin" />
                                    ) : (
                                        <LogOut className="w-3 h-3" />
                                    )}
                                    {isSigningOut ? '登出中...' : '登出'}
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Footer Content */}
                {footerContent}
            </div>

            {/* Sign Out Confirm Dialog - 使用 Portal 渲染到 body */}
            {mounted && showConfirm && createPortal(
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80">
                    <div className="w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-6 text-center">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-500/20 flex items-center justify-center">
                                <LogOut className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">確認登出</h3>
                            <p className="text-white/60 text-sm">您確定要登出帳號嗎？</p>
                        </div>
                        <div className="flex border-t border-white/10">
                            <button
                                onClick={() => setShowConfirm(false)}
                                disabled={isSigningOut}
                                className="flex-1 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium disabled:opacity-50"
                            >
                                取消
                            </button>
                            <button
                                onClick={handleSignOut}
                                disabled={isSigningOut}
                                className="flex-1 px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors text-sm font-bold border-l border-white/10 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isSigningOut && <Loader2 className="w-4 h-4 animate-spin" />}
                                {isSigningOut ? '登出中...' : '確認登出'}
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </aside>
    );
};
