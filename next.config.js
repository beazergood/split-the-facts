const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
  env: {
    MAILCHIMP_AUDIENCE_ID: '534e46c2fa',
    MAILCHIMP_SERVER_PREFIX: 'us6',
    MAILCHIMP_API_KEY: '1a8e4419ab2cde7ef11fbb5f2f550827-us6'
  }
})
