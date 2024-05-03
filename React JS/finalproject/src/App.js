import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Register from "./Components/Register";
import ClothProductDetails from "./Components/ClothProductDetails";
import ACcessoriesProductDetails from "./Components/AccessoriesProductDetails";
import Cart from "./Components/Cart";
import productItems from "./Components/Clothing_data.json";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (contents) => {
    console.log(contents.id)
    console.log(contents);
    const productExist = cartItems.find((items) => items.id === contents.id);
    console.log(productExist);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === contents.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
      console.log(cartItems)
      console.log("if");
    } else {
      setCartItems([...cartItems, {...contents, quantity: 1 } ]);
      console.log(cartItems)
      console.log("else");
    }
    alert("Item added to cart successfully")
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/clothProduct/:productId"
            element={
              <ClothProductDetails
                productItems={productItems}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route
            path="/accessoriesProduct/:productId"
            element={<ACcessoriesProductDetails />}
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
