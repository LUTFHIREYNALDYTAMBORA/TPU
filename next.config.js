/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  loader: 'file-loader',
  reactStrictMode: true,
  test: /\.(mp4)$/,
};

module.exports = nextConfig;

const withVideos = require('next-videos');
module.exports = withVideos();
