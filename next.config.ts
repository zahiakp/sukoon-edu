import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for module compatibility
  experimental: {
    esmExternals: true, // Enable support for ES modules
  },
  
  async redirects() {
    return [
      {
        source: '/admissions/:path*',
        destination: 'https://admission.mysukoon.in/register',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

