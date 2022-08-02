/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WEATHER_APP_ID: process.env.WEATHER_APP_ID
  }
};

module.exports = nextConfig;
