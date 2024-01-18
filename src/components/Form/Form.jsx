import React from 'react'
import Field from '../Field/Field'
import Fieldset from '../Fieldset/Fieldset'
import SelectField from '../SelectField/SelectField'

const Form = () => {
    const options = [
        { value: 'sales', label: 'Sales' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'engineering', label: 'Engineering' },
        { value: 'human resources', label: 'Human Resources' },
        { value: 'legal', label: 'Legal' }
    ]
    return (
    <>
        <form>
            <Field label="First Name"/>
            <Field label="Last Name"/>
            <Field label="Date of birth"/>
            <Field label="Start Date"/>
            <Fieldset/>
            <SelectField label="Department" options={options}/>
        </form>
    </>
  )
}

export default Form