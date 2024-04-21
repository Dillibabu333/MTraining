import { useParams } from "react-router-dom";
import contents from "./Accessories_data.json";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./AccessoriesProductDetails.css"


const AccessoriesProductDetails = () => {
  const [errorImage, setErrorImage] = useState(false);

  const { productId } = useParams(); // Get the productId from URL params

  // console.log(productId)

  const product = contents.find(
    (content) => content.id === parseInt(productId)
  ); // Find the product by id

  const handleErrorImage = () => {
    setErrorImage(true);
  };

  // console.log(product)

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div id="accessoriesProduct">
    <Navbar/>
    <div className="accessProduct">
       <div className="accessPrductLeft">
      <img
        src={errorImage ? "placeholderImage" : product.image}
        alt="product-img"
        className="productImage"
        onError={handleErrorImage}
      ></img>
      </div>
      <div className="accessProductRight">
        <h1>{product.name}
        </h1>
        <h4>{product.brand}</h4>
        <div><h3>Rs {product.price}</h3>
        <h3>Description</h3>
        <p>{product.desc}</p></div>
        <div><button>Add to Cart</button></div>
      </div>
    
</div>
<Footer/>
    </div>
  );
};

export default AccessoriesProductDetails;
