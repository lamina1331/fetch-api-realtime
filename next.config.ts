import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
