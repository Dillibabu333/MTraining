import React from 'react'
import design from './Nav.css'

const Nav = () => {

     const style={
        backgroundColor:"red",
        textAlign:"center",

     }
  return (
    <div>
        <ul style={style}>
            <li style={{color:"white", fontSize:"39px"}}>home</li>
            <li className='contact'>contact</li>
            <li id='about'>about</li>
            <li>careers</li>
        </ul>
    </div>
  )
}

export default Nav