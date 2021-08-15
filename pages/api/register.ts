const mailchimp = require('@mailchimp/mailchimp_marketing')
const axios = require('axios')

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX
})

async function run() {
  const response = await mailchimp.ping.get()
  console.log(response)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { email } = req.body
  console.log('sending subscribe to MailChimp message: ', email)
  if (!email || !email.length) {
    return res.status(400).json({
      error: 'Forgot to add your email?'
    })
  }

  try {
    const { url, data, headers } = getRequestParams(email)

    const response = await axios.post(url, data, { headers })

    console.log('response from Mailchimp: ', response.data)
    // success
    return res
      .status(201)
      .json({ error: null, response: { status: response.data.status } })
  } catch (err) {
    if (err.data) {
      console.error(err.data)
    }
    return res.status(400).json({
      error: err
    })
  }
}

function getRequestParams(email) {
  // get env variables
  const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY
  const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID

  // get the mailchimp datacenter
  // mailchimp API keys example: c0e214879c8542a54e716f38edf1635d-us2
  // we need the us2 part
  const DATACENTER = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY.split('-')[1]

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  // you can add additional parameters here.
  // see full list of available parameters at:
  // https://mailchimp.com/developer/reference/lists/list-members/
  const data = {
    email_address: email,
    status: 'subscribed'
  }

  // API key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`
  }

  return {
    url,
    data,
    headers
  }
}
