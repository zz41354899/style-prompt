'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  LayoutProvider,
  useLayoutContext,
  Header,
  DesktopSidebar,
  MobileSidebar,
  MobileBottomNav,
} from './layout';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useAuth } from './providers/AuthProvider';

// Re-export for backward compatibility
export { useLayoutContext } from './layout';
export type { DeviceMode, PreviewTier, LayoutContextType } from './layout';

// 帳戶狀態檢查 wrapper
const AccountStatusGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, accountStatus, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      // 根據帳戶狀態重導向到對應頁面
      if (accountStatus === 'suspended') {
        router.replace('/auth/suspended');
      } else if (accountStatus === 'pending_deletion' || accountStatus === 'deleted') {
        router.replace('/auth/deleted');
      }
    }
  }, [user, accountStatus, loading, router]);

  // 如果帳戶狀態異常，不渲染內容（等待重導向）
  if (user && accountStatus !== 'active') {
    return null;
  }

  return <>{children}</>;
};

// 內部佈局元件
const LayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AccountStatusGuard>
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
    </AccountStatusGuard>
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
