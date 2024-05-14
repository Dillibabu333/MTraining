import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/ProductList";

function App() {
  

  return (
    <div>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
   </BrowserRouter>   */}
   <ProductForm/>
   <ProductList/>
    </div>
  );
}

export default App;
