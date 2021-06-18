import * as React from 'react'

const EmailForm: React.FC = () => {
  const registerUser = async (event) => {
    event.preventDefault()

    const res = await fetch('/api/mailchimp', {
      body: JSON.stringify({
        email: event.target.email.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return (
    <form onSubmit={registerUser}>
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="text"
        autoComplete="email"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default EmailForm
