import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 核心優化設定
  reactStrictMode: true,
  poweredByHeader: false, // 隱藏 X-Powered-By 標頭 (安全性 + 小幅節省頻寬)
  compress: true, // 啟用 Gzip 壓縮

  // 開發環境日誌優化
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // 編譯器優化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },


  // 圖片優化 (如果有的話)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/pro/admin',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
