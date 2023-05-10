import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Laptops from './Laptops';
import Laptop from './Laptop';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />} >
        <Route path='home' element={<Home />} />
        <Route path='laptops' element={<Laptops />} />
        <Route path='laptops/:id' element={<Laptop />} />
      </Route>
    </Routes>
  );
}

export default App;
