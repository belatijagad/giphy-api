/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['https://giphy.com', 'media0.giphy.com', 'media1.giphy.com',
      'media2.giphy.com', 'media3.giphy.com', 'media4.giphy.com'],
  },
}
