/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rogue-studio.transforms.svdcdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
