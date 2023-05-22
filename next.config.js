/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'es',
    localeDetection: false,
    locales: ['es', 'en']
  },
  images: {remotePatterns: [
    {
      hostname: '**',
      protocol: 'https'
    }
  ]},
  publicRuntimeConfig: {
    CLIENTE_SECRET: process.env.CLIENTE_SECRET,
    CLIENT_ID: process.env.CLIENT_ID,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  },
  reactStrictMode: false
};

module.exports = nextConfig;
