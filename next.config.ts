import type { NextConfig } from "next";

// Configure Next.js for static export compatible with GitHub Pages
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Generate a fully static site in the `out` directory
  output: "export",

  // Ensure routes map to `index.html` files on GitHub Pages
  trailingSlash: true,

  // Disable image optimization for static export
  images: { unoptimized: true },

  // Prefix routes and assets when deploying to a project page like /<repo>
  basePath: isProd && basePath ? basePath : undefined,
  assetPrefix: isProd && basePath ? basePath : undefined,
};

export default nextConfig;
