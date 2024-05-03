import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Cart = ({cartItems, handleAddProduct}) => {
  return (
    <div>
        <Navbar/>
        {cartItems[0]}
        <div>
            <h2>Cart Items</h2>
            {cartItems.length===0 && (<h3>No items added .</h3>)}

            <div>
                {cartItems.map(items=>(
                    <div key={items.id}>{items.brand}
                        <img src={items.image} alt="" />
                        <h2>{items.name}</h2>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart