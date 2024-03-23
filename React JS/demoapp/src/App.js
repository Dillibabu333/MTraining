import Demo from './Demo';
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom';
import About from './About';

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<Demo/>} />
        <Route path='about' element={<About/>} />
      </Routes>
    </Router>
  </div>
   
  );
}

export default App;
