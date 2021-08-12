const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
  reactStrictMode: true,
  env: {
    MAILCHIMP_API_KEY: '8687287d81abf806bf0c702e94bfca31-us6', // STF
    MAILCHIMP_AUDIENCE_ID: '04a8b4dbd2', // STF
    MAILCHIMP_SERVER_PREFIX: 'us6',
    NEXT_PUBLIC_HYVOR_WEBSITE_ID: process.env.NEXT_PUBLIC_HYVOR_WEBSITE_ID
  }
})
const withImages = require('next-images')
module.exports = withImages({
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: 'default',
    domains: ['res.cloudinary.com']
  }
})
