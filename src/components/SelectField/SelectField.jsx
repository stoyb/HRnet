import React from 'react'
import styles from './SelectField.module.css'
import Select from 'react-select'

const SelectField = ({label, options}) => {
  return (
    <>
        <div className={styles.field}>
            <label>{label}</label>
            <Select options={options}/>
        </div>
    </>
  )
}

export default SelectField