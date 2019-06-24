import React, { useState, useEffect } from 'react'
import api from '../../api'

export default function Secret() {
  const [state, setState] = useState({ secret: null, message: null })

  useEffect(() => {
    console.log('Boom!')
    api
      .getSecret()
      .then(data => setState({ secret: data.secret }))
      .catch(err => setState({ message: err.toString() }))
  }, [])
  return (
    <div className="Secret">
      <h2>Secret</h2>

      <div className="result">{state.secret}</div>

      {state.message && <div className="info info-danger">{state.message}</div>}
    </div>
  )
}
