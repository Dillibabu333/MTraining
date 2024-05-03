import { useParams } from "react-router-dom";
import contents from "./Clothing_data.json";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ClothProductDetails.css";
// import placeholderImage from "./download (1).jpeg"

const ClothProductDetail = ({handleAddProduct}) => {
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
    <div id="clothProductDetails">
      <Navbar />
      <div className="clothProduct">
        <div className="clothProductLeft">
          <img
            src={errorImage ? "placeholderImage" : product.image}
            alt="product-img"
            className="productImage"
            onError={handleErrorImage}
          ></img>
        </div>
        <div className="clothProductRight">
          <h1>{product.name}</h1>
          <h4>{product.brand}</h4>
          <div>
            <h3>Rs {product.price}</h3>
            <h3>Description</h3>
            <p>{product.desc}</p>
          </div>
          <div>
            <button onClick={() => handleAddProduct(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClothProductDetail;
