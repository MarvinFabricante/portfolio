import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Disable Next.js dev indicator emblem at the bottom left */
  devIndicators: false,

  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
