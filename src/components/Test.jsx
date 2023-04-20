import Home from './Home';
import Laptop from './Laptop';
import Laptops from './Laptops';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';

function Test(props) {
    return (
        <div>
            <Nav />
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/laptops' element={<Laptops />} />
                <Route path='/laptops/:id' element={<Laptop />} />
            </Routes>
        </div>
    );
}

export default Test;