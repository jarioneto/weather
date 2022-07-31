/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withSvgr = require('next-svgr');

const nextConfig = withPlugins([withSvgr, withImages], {
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig
