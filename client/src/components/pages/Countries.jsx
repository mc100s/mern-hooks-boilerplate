import React, { useEffect, useState } from 'react'
import api from '../../api'

export default function Countries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    api
      .getCountries()
      .then(countries => {
        setCountries(countries)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="Countries">
      <h2>List of countries</h2>
      {countries.map(c => (
        <li key={c._id}>{c.name}</li>
      ))}
    </div>
  )
}
