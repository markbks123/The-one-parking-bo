/** @type {import('next').NextConfig} */
import nextRuntimeDotenv from "next-runtime-dotenv";

const withConfig = nextRuntimeDotenv({
  public: [
    "NEXT_PUBLIC_API_BASE_URL", // Client-side environment variables
   "NEXT_PUBLIC_AUTH_TOKEN_STORAGE_KEY"
  ],
});

const nextConfig = withConfig({
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-omit",
  ],
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds
  },
  output: "standalone",
});

export default nextConfig;
