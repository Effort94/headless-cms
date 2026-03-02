import type { NextConfig } from "next";

const nextConfig: { reactStrictMode: boolean; env: { NEXT_PUBLIC_API_URL: string } } = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_API_URL: "https://dygenex.ddev.site"
    }
};

export default nextConfig;