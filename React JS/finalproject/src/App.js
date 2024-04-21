import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import ClothProductDetails from './Components/ClothProductDetails';
import ACcessoriesProductDetails from "./Components/AccessoriesProductDetails";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>    <Route path='home' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path="/clothProduct/:productId" element={<ClothProductDetails/>}/>
      <Route path="/accessoriesProduct/:productId" element={<ACcessoriesProductDetails/>}/>
</Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
