/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        pathname: '/**', // Optional: restrict to a specific path
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**', // Optional: restrict to a specific path
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '/**', // Optional: restrict to a specific path
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '/**', // Optional: restrict to a specific path
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

export default nextConfig;
