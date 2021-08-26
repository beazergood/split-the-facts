const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
  reactStrictMode: true
})
const withImages = require('next-images')
module.exports = withImages({
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: 'default',
    domains: ['res.cloudinary.com', 'www.paypal.com']
  }
})
