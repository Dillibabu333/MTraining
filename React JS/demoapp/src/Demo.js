import React from 'react'
import "./Demo.css"
import { Link } from 'react-router-dom'


const Demo = () => {
  return (
    <div>
        <h1>Welcome to Matrical</h1>
        <input className="i1" type='text' placeholder='Enter Text'></input>
        
        <button className='b1'>Submit</button>
        <Link to="about">clik me</Link>
    </div>
  )
}

export default Demo