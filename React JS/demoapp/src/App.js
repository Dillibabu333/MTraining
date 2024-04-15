import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Nav from './Components/Nav';

function App() {
  return (
  <div>
   {/* <Navbar/>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router> */}

   <Nav/>
   
  </div>
   
  );
}

export default App;
