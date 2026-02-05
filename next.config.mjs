import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.PAGES_BASE_PATH !== undefined;

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,
  ...(isProd &&
    isGitHubPages && {
      basePath: process.env.PAGES_BASE_PATH,
      assetPrefix: process.env.PAGES_BASE_PATH,
    }),
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
