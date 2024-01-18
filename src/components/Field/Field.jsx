import React from 'react'
import styles from './Field.module.css'

const Field = ({label}) => {
  return (
    <>
        <div className={styles.field}>
            <label>{label}</label>
            <input/>
        </div>
    </>
  )
}

export default Field