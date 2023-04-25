import Home from './Home';
import Laptop from './Laptop';
import Laptops from './Laptops';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Nav from './Nav';
import Logout from './Logout';

function Main(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Nav />} >
                    <Route index path='home' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='logout' element={<Logout />} />
                    <Route path='laptops' element={<Laptops />} />
                    <Route path='laptops/:id' element={<Laptop />} />
                </Route>
            </Routes>
        </div>
    );
}

export default Main;