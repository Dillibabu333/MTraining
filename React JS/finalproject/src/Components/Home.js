import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import clothing_data from "./Clothing_data.json"
import accessories_data from "./Accessories_data.json"
import "./Home.css"
import { Link } from "react-router-dom";
 

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="sliding_container">
        <div></div>
      </div>
      <div id="cloth_for_men_women">
        <h1>Clothing For Men And Women</h1>
        <div className="clothing_box">
        
          {clothing_data
           /* .filter(
              (items) =>
                items.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                items.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                items.price.toString().includes(searchTerm) ||
                items.striked_price.toString().includes(searchTerm) ||
                items.discount.toString().includes(searchTerm)
            ) */
            .map((items) => (
              <div className="cloth_item"><Link className="link" key={items.id} to={`/clothProduct/${items.id}`}>

              <div className="cloth"><img src={items.image} alt="" />
              <h3>{items.name}</h3>
              <h4>{items.brand}</h4>
              <h2>Rs {items.price}</h2>
              </div>
             
              </Link></div>
            ))}
        </div>
      </div>
      <div id="accessories_for_men_women">
      <h1>Accessories For Men And Women
</h1>

     <div className="accessories_box">
     {accessories_data
           /* .filter(
              (items) =>
                items.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                items.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                items.price.toString().includes(searchTerm) ||
                items.striked_price.toString().includes(searchTerm) ||
                items.discount.toString().includes(searchTerm)
            ) */
            .map((items) => (
              <div className="access_item"><Link className="link" key={items.id} to={`/accessoriesProduct/${items.id}`}>

              <div className="access"><img src={items.image} alt="" />
              <h3>{items.name}</h3>
              <h4>{items.brand}</h4>
              <h2>Rs {items.price}</h2>
              </div>
             
              </Link></div>
            ))}
     </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
