'use client';

import React from 'react';
import {
  LayoutProvider,
  useLayoutContext,
  Header,
  DesktopSidebar,
  MobileSidebar,
  MobileBottomNav,
} from './layout';
import { LanguageSwitcher } from './LanguageSwitcher';

// Re-export for backward compatibility
export { useLayoutContext } from './layout';
export type { DeviceMode, PreviewTier, LayoutContextType } from './layout';

// 內部佈局元件
const LayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-[#0a0a0a] flex flex-col pt-6">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden pb-16 lg:pb-0">
        {/* Left Sidebar - Desktop */}
        <DesktopSidebar />

        {/* Mobile Sidebar */}
        <MobileSidebar />

        {/* Page Content */}
        {children}
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav />

      {/* Language Switcher */}
      <LanguageSwitcher />
    </div>
  );
};

// 主要匯出元件
export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutProvider>
      <LayoutContent>{children}</LayoutContent>
    </LayoutProvider>
  );
};
