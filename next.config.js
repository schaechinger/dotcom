const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

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
  skipTrailingSlashRedirect: false,
  output: 'standalone',
};

module.exports = withNextIntl(nextConfig);