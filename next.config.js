const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = withNextIntl({
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

  redirects() {
    return [
      {
        source: '/datenschutz',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/impressum',
        destination: '/imprint',
        permanent: true,
      },
      {
        source: '/lebenslauf',
        destination: '/resume',
        permanent: true,
      },
      {
        source: '/projekte',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/ueber-mich',
        destination: '/about',
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
