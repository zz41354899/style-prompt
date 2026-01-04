import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 啟用 Turbopack (可選)
  // turbopack: {},
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
