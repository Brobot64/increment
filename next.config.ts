import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Target SVG files
      use: [
        {
          loader: "@svgr/webpack", // Use SVGR loader
          options: {
            icon: true, // Optional: Optimize SVG for icons
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
