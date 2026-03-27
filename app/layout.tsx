import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/components/providers/I18nProvider';
import { QueryProvider } from '@/components/providers/QueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://styleprompt.zeabur.app/'),
  title: {
    default: 'StylePrompts - AI 視覺風格提示詞資源庫',
    template: '%s | StylePrompts',
  },
  description: '您的 AI 視覺風格資源庫。30 種精選風格，一鍵複製高品質提示詞，加速您的 UI 開發流程。支援 ChatGPT、Claude、Cursor 等主流 AI 工具。',
  keywords: [
    'AI',
    'UI 設計',
    '提示詞',
    'Prompt',
    'ChatGPT',
    'Claude',
    'Cursor',
    '視覺風格',
    'Landing Page',
    'SaaS',
    '設計系統',
    'Web 開發',
  ],
  authors: [{ name: 'StylePrompts Team' }],
  creator: 'StylePrompts',
  publisher: 'StylePrompts',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'StylePrompts',
    title: 'StylePrompts - AI 視覺風格提示詞資源庫',
    description: '30 種精選視覺風格，一鍵複製高品質提示詞，加速您的 UI 開發流程。',
    locale: 'zh_TW',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StylePrompts - AI 視覺風格提示詞資源庫',
    description: '30 種精選視覺風格，一鍵複製高品質提示詞，加速您的 UI 開發流程。',
    creator: '@styleprompts',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://styleprompt.zeabur.app/',
    languages: {
      'zh-TW': 'https://styleprompt.zeabur.app/',
      'en': 'https://styleprompt.zeabur.app/',
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#030303" />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
