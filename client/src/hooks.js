import { useState } from 'react'

/* 

// ----- Custom Hook useForm -----

// You can use this custom Hook in a component

// To initialize, you have to write the following
const initialValues = { carrot: "orange"  }
const { formValues, getInputProps, handleChange } = useForm(initialValues)

// - formValues: an object with all the values of a from
// - getInputProps: a function to get the props of an input
// - handleChange: the handler function for forms (optional most of the time)
// - initialValue: the initial for formValues

// Then to insert a <input>, <textarea> or <select>, it's really easy!
<input type="text" {...getInputProps('carrot')} />
<select {...getInputProps('lang')}>
  <option value="fr">French</option>
  <option value="en">English</option>
</select>

// Then you can access the values typed very easily:
formValues.carrot
formValues.lang

// You can see an example in: client/src/components/pages/Login.jsx

*/
export function useForm(initialValues = {}) {
  const [formValues, setFormValues] = useState(initialValues)

  function handleChange(event) {
    let value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    setFormValues({
      ...formValues,
      [event.target.name]: value,
    })
  }

  function getInputProps(fieldName) {
    return {
      name: fieldName,
      value: formValues[fieldName] || '',
      checked: formValues[fieldName] || false,
      onChange: handleChange,
    }
  }

  return {
    formValues,
    getInputProps,
    handleChange,
  }
}
