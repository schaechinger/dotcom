import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
    name: 'Manuel Schächinger',
    short_name: 'Manuel Schächinger',
    description: 'Senior Fullstack JavaScript Engineer und Berater für komplexe und skalierbare Softwaresysteme in München.',
    start_url: '/',
    display: 'standalone',
    icons: [
        {
            src: '/favicon.ico',
            sizes: '48x48',
            type: 'image/x-icon',
        },
    ],
});

export default manifest;
