import React, { useState } from "react";
import Prod from "./Prod";
import style from "./Products.module.css"
import Navbar from "./Navbar";
import data from './Data.json'


const Products = () => {

  const [searchTerm,setSearchTerm]=useState("");

  return (
    <div id={style.mainproducts}>
      <Navbar/>
      <div className={style.searchInput_Container}>
          <input id={style.searchInput} type="text" placeholder="Search here..." value={searchTerm} onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
          <i class="fa-solid fa-magnifying-glass fa-lg"></i>
        </div>
      <div className={style.products}>
        {
           data.filter(items=>items.name.toLowerCase().includes(searchTerm.toLowerCase())).map((items, index) => (
          <Prod
            key={index}
            img={items.img}
            name={items.name}
            desc={items.desc}
            price={items.price}
            striked_price={items.striked_price}
            discount={items.discount}
          />
        ))}
      </div>
     
    </div>
  );
};

export default Products;
