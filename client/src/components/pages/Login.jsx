import React, { useState } from 'react'
import api from '../../api'
import { useForm } from '../../hooks'

export default function Login(props) {
  const { handleChange, handleSubmit, values } = useForm(() => {
    api
      .login(values.username, values.password)
      .then(result => {
        console.log('SUCCESS!')
        props.history.push('/') // Redirect to the home page
      })
      .catch(err => setMessage(err.toString()))
  })

  const [message, setMessage] = useState(null)

  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        Username:{' '}
        <input
          type="text"
          value={values.username || ''}
          name="username"
          onChange={handleChange}
        />{' '}
        <br />
        Password:{' '}
        <input
          type="password"
          value={values.password || ''}
          name="password"
          onChange={handleChange}
        />{' '}
        <br />
        <button>Login</button>
      </form>
      {message && <div className="info info-danger">{message}</div>}
    </div>
  )
}
