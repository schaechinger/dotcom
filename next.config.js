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
  // skipTrailingSlashRedirect: true,
  output: 'standalone',
};

module.exports = nextConfig;
