import React from 'react'
import styles from './Field.module.css'

const Field = ({label, children}) => {
  return (
    <>
        <div className={styles.field}>
            <label>{label}</label>
            {children}
        </div>
    </>
  )
}

export default Field