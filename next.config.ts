import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for module compatibility
  experimental: {
    esmExternals: true, // Enable support for ES modules
  },
  // Additional options can be added here if needed
};

export default nextConfig;

