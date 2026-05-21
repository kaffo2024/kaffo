/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // hostnames: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.progym-shebin.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
    ],
  },
};

export default nextConfig;
