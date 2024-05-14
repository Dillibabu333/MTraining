
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css'; 
const ProductList = () => {
  // State to hold the list of products and loading status
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Show loading message while fetching data
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Show error message if data couldn't be fetched
  if (products.length === 0) {
    return <div className="error">Oops! Unable to fetch products.</div>;
  }


  return (
    <div className="product-list">
      <h2 className='product-heading'>Product List</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <img
              src={`http://localhost:5000/uploads/${product.productImage}`}
              alt={product.productName} 
              className="product-image"
            />
            <p className="product-sp">SP: ₹{product.sp}</p>&nbsp;&nbsp;&nbsp;
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 
