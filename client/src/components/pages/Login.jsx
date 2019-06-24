import React, { useEffect, useState } from 'react'
import api from '../../api'

export default function Login(props) {
  const [state, setState] = useState({
    username: '',
    password: '',
    message: null,
  })

  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()
    api
      .login(state.username, state.password)
      .then(result => {
        console.log('SUCCESS!')
        props.history.push('/') // Redirect to the home page
      })
      .catch(err => setState({ message: err.toString() }))
  }

  return (
    <div className="Login">
      <h2>Login</h2>
      <form>
        Username:{' '}
        <input
          type="text"
          value={state.username}
          name="username"
          onChange={handleInputChange}
        />{' '}
        <br />
        Password:{' '}
        <input
          type="password"
          value={state.password}
          name="password"
          onChange={handleInputChange}
        />{' '}
        <br />
        <button onClick={e => handleClick(e)}>Login</button>
      </form>
      {state.message && <div className="info info-danger">{state.message}</div>}
    </div>
  )
}
