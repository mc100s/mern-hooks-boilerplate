import { useState } from 'react'

export function useForm(callback) {
  const [values, setValues] = useState({})

  const handleSubmit = event => {
    if (event) event.preventDefault()
    callback()
  }

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  return {
    handleChange,
    handleSubmit,
    values,
  }
}
