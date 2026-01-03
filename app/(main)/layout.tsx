'use client';

import { MainLayout } from '@/components/MainLayout';
import { AuthProvider } from '@/components/providers/AuthProvider';

export default function MainGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <MainLayout>{children}</MainLayout>
    </AuthProvider>
  );
}
