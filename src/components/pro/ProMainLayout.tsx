'use client';

import React from 'react';
import { ProLayoutProvider } from './ProLayoutContext';
import { ProHeader } from './ProHeader';
import { ProDesktopSidebar } from './ProDesktopSidebar';
import { ProMobileSidebar } from './ProMobileSidebar';
import { ProMobileBottomNav } from './ProMobileBottomNav';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

// Re-export for convenience
export { useProLayoutContext, type DeviceMode, type ProLayoutContextType } from './ProLayoutContext';

// 內部佈局元件
const ProLayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="h-screen bg-[#020202] flex flex-col relative overflow-hidden">
            {/* Global Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px]" />
            </div>

            {/* Header */}
            <div className="relative z-20">
                <ProHeader />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden pb-16 lg:pb-0 relative z-10">
                {/* Left Sidebar - Desktop */}
                <ProDesktopSidebar />

                {/* Mobile Sidebar */}
                <ProMobileSidebar />

                {/* Page Content */}
                {children}
            </div>

            {/* Mobile Bottom Navigation Bar */}
            <ProMobileBottomNav />

            {/* Language Switcher */}
            <LanguageSwitcher />
        </div>
    );
};

// 主要匯出元件
export const ProMainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ProLayoutProvider>
            <ProLayoutContent>{children}</ProLayoutContent>
        </ProLayoutProvider>
    );
};
