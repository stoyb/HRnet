import React from 'react'
import { unitedStates } from '../../data/selectData'
import Field from '../Field/Field'
import Select from 'react-select'

const Fieldset = () => {
   
    return (
    <>
    <fieldset>
        <legend>Address</legend>
        <Field label="Street">
            <input type="text"/>
        </Field>
        <Field label="City">
            <input type="text"/>
        </Field>
        <Field label="State">
            <Select options={unitedStates}/>
        </Field>
        <Field label="Zip Code">
            <input type="number"/>
        </Field>
    </fieldset>
    </>
  )
}

export default Fieldset