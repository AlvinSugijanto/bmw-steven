import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    minimumCacheTTL: 0, // Disable cache untuk development
  },
};

export default nextConfig;
