import React from "react";
import design from "./Prod.module.css"

const Prod = ({ img,name,desc,price,striked_price,discount }) => {
  return (
    <div id={design.product}>
      <div id={design.box}>
        <img  className={design.image} src={img} alt="product logo" />
        <h3 className={design.name}>{name}</h3>
        <h3 className={design.desc}>{desc}</h3>
        <h3 className={design.price}>{price}</h3>
        <span className={design.striked_price}>{striked_price}</span>  
        <span className={design.discount}>{discount}</span>
        <button className={design.pbtn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Prod;
