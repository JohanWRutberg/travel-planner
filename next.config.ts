import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // valfritt men bra att specificera
        hostname: "fdpvmxwlyd.ufs.sh",
        pathname: "/**", // tillåter alla paths
      },
    ],
  },
};

export default nextConfig;
