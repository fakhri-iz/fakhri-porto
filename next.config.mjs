/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/fakhri-porto",
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
