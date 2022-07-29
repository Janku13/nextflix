/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://unsplash.com/', 'images.unsplash.com', 'i.ytimg.com'],
  },
};

module.exports = nextConfig;
