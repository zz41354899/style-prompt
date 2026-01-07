'use client';

import { MainLayout } from '@/components/MainLayout';

export default function MainGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // AuthProvider 已在根 layout.tsx 中提供
  return <MainLayout>{children}</MainLayout>;
}
