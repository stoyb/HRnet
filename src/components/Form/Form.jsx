import React from 'react'
import { department } from '../../data/selectData'
import Field from '../Field/Field'
import Select from 'react-select'
import Fieldset from '../Fieldset/Fieldset'
import DataPicker from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
    <>
        <form>
            <Field label="First Name">
                <input type="text"/>
            </Field>
            <Field label="Last Name">
                <input type="text"/>
            </Field>
            <Field label="Date of birth">
                <DataPicker selected={startDate} onChange={(date) => setStartDate(date)}/>
            </Field>
            <Field label="Start Date">
                <DataPicker selected={startDate} onChange={(date) => setStartDate(date)}/>
            </Field>
            <Fieldset/>
            <Field label="Department">
                <Select options={department}/>
            </Field>
        </form>
    </>
  )
}

export default Form