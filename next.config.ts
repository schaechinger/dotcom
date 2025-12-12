import createNextIntlPlugin from 'next-intl/plugin';

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

  turbopack: {
    root: __dirname,
  },

  // cacheComponents: true,

  async redirects() {
    return [
      // pages
      {
        source: '/kontakt',
        destination: '/contact',
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
      // projects
      {
        source: '/transportkit',
        destination: '/projects/transportkit',
        permanent: true,
      },
      // legal
      {
        source: '/datenschutz',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/impressum',
        destination: '/imprint',
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
