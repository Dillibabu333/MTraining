import React from 'react'
import style from "./Cart.module.css"

const Cart = (prop) => {
  return (
    <div>
        
        <div className={style.parent}>
           <label htmlFor="">Name :</label> <span>{prop.name}</span>
           <br /><br />
           <label htmlFor="">Age :</label> <span>{prop.age}</span>
           <br /><br />
            <label htmlFor="">Discription : </label><span>{prop.discription}</span>
        </div>
    </div>
  )
}

export default Cart