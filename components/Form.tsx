import * as React from 'react'
import fetch from 'isomorphic-unfetch'

export const EmailForm: React.FC = () => {
  const registerUser = async (event) => {
    event.preventDefault()

    const res = await fetch('/api/register', {
      body: JSON.stringify({
        email: event.target.email.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    // console.log('result for subscribe to mailchimp', result) // TODO notify user of result
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="email"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
