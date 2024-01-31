import React from 'react'
import { unitedStates } from '../../data/selectData'
import Field from '../Field/Field'
import Select from 'react-select'

const Fieldset = ({street, city, state, setFormData, zipCode, setformDataStreet, setformDataCity, setformDataZipCode}) => {
   
    return (
    <>
    <fieldset>
        <legend>Address</legend>
        <Field label="Street">
            <input type="text" value={street} onChange={setformDataStreet}/>
        </Field>
        <Field label="City">
            <input type="text" value={city} onChange={setformDataCity}/>
        </Field>
        <Field label="State">
            <Select options={unitedStates}  value={state}
            onChange={setFormData} />
        </Field>
        <Field label="Zip Code">
            <input type="number" value={zipCode} onChange={setformDataZipCode}/>
        </Field>
    </fieldset>
    </>
  )
}

export default Fieldset