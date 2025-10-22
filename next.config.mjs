/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove console logs in production (optional)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
};

export default nextConfig;
