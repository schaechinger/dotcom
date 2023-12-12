import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
    name: 'Manuel Schächinger',
    short_name: 'Manuel Schächinger',
    description: 'Senior Fullstack JavaScript Engineer und Berater für komplexe und skalierbare Softwaresysteme in München.',
    start_url: '/',
    display: 'standalone',
    theme_color: '#00a5db',
    background_color: '#ffffff',
    icons: [
        {
            src: '/favicon.ico',
            sizes: 'any',
            type: 'image/x-icon',
        },
    ],
});

export default manifest;
