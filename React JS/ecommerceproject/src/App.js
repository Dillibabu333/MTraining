import {Routes , Route} from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Cart from './Components/Cart';
import User from './Components/User';
import Login from './Components/Login';
import Prod from './Components/Prod';
import PageNotFound from './Components/PageNotFound';
import Register from './Components/Register';

function App() {
  return (
    <div>

      <Routes>
        
        
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/Prod' element={<Prod/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/user' element={<User/>} />
        <Route path='*' element={<PageNotFound/>} />



      </Routes>
    </div>
  );
}

export default App;