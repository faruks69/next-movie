/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TMDB_API_KEY: process.env.79c66d373fd1a36801c5746233e609c9,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;
