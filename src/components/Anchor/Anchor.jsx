import React from 'react'
import { Link } from 'react-router-dom'


const Anchor = ({link, text}) => {
  return (
    <>
        <Link to={link}>{text}</Link>
    </>
  )
}

export default Anchor