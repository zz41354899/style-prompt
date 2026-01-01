'use client';

import { MainLayout } from '@/components/MainLayout';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { LoginGate } from '@/components/common';

export default function MainGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <LoginGate backLink="/" variant="free">
        <MainLayout>{children}</MainLayout>
      </LoginGate>
    </AuthProvider>
  );
}
