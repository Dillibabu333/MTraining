import React from 'react'
import Navbar from './Navbar'

const Cart = () => {
  const style={
    color:"lightblack",
    textAlign:"center",
    padding:"3%",
  }
  return (
    <div>
              <Navbar/>
      <h1 style={style}>Your Cart is Empty

</h1>
    </div>
  )
}

export default Cart