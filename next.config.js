/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.schaechinger.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    API_BASE_URL: 'http://localhost:4000',
  },
  output: 'standalone',
};

module.exports = nextConfig;
