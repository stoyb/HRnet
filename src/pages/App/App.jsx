import React from 'react'
import Anchor from '../../components/Anchor/Anchor'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'

const App = () => {
  return (
    <>
      <Header>
        <Title text="HRnet"/>
        <Anchor link="employee-list" text="View Current Employees"/>
        <h2>Create Employee</h2>
      </Header>
    </>
    
  )
}

export default App