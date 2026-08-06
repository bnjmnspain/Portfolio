/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Portfolio",
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
    ],
    unoptimized: true,
  },
};
export default nextConfig;
