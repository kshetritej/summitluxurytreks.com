import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    if (process.env.NODE_ENV === "production") {
      return [
        {
          source: "/api/:path*",
          destination: "https://api.summitluxurytreks.com/api/:path*",
        },
      ];
    }

    return [];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "api.summitluxurytreks.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
