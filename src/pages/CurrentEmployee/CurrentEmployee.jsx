import React from 'react'
import Anchor from '../../components/Anchor/Anchor'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import styles from './CurrentEmployee.module.css'

const CurrentEmployee = () => {
  return (
    <>
      <Header>
        <Title text="Current Employees" className={styles.title} />
      </Header>
      <Anchor link="/" text="Home"/>
    </>
  )
}

export default CurrentEmployee