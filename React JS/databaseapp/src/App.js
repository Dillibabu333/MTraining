import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ProductForm from "./ProductForm";

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
    </div>
  );
}

export default App;
