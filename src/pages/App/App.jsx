import React from 'react'
import Anchor from '../../components/Anchor/Anchor'
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Title from '../../components/Title/Title'
import { useSelector } from 'react-redux'

const App = () => {
    const state = useSelector(state => state.employee)
    console.log(state);
  return (
    <>
      <Header>
        <Title text="HRnet"/>
        <Anchor link="employee-list" text="View Current Employees"/>
        <h2>Create Employee</h2>
      </Header>
      <Main>
        <Form/>
      </Main>
    </>
    
  )
}

export default App