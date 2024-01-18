import React from 'react'
import Anchor from '../../components/Anchor/Anchor'
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Title from '../../components/Title/Title'

const App = () => {
  return (
    <>
      <Header>
        <Title text="HRnet"/>
        <Anchor link="employee-list" text="View Current Employees"/>
        <h2>Create Employee</h2>
      </Header>
      <Main>
        <Form/>
        <button>Save</button>
      </Main>
    </>
    
  )
}

export default App