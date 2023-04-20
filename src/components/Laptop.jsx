import axios from 'axios';
import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'

function Laptop(props) {

    const { state } = useLocation();

    const [laptop, setLaptop] = useState(state.laptop);

    const { id } = useParams();

    const navigate = useNavigate();

    const updateLaptop = () => {
        axios.put(`http://localhost:8080/laptops/${id}`, laptop);
        navigate('/laptops');
    }

    const addLaptop = () => {
        axios.post(`http://localhost:8080/laptops/${id}`, laptop)
        navigate('/laptops');
    }

    return (
        <div className="container">
            <h1>Laptop Detail</h1>
            <div className="col-lg-6">
                <form className="form-control" onSubmit={id === 0 ? addLaptop : updateLaptop} >
                    <label className="form-label" >Name</label>
                    <input className="form-control" type="text" value={laptop.name} onChange={(event) => setLaptop({ ...laptop, name: event.target.value })} />
                    <br /> <label className="form-label" >Price</label>
                    <input className="form-control" type="number" value={laptop.price} onChange={(event) => setLaptop({ ...laptop, price: event.target.value })} />
                    <br /> <label className="form-label">Brand</label>
                    <input className="form-control" type="text" value={laptop.brand} onChange={(event) => setLaptop({ ...laptop, brand: event.target.value })} />
                    <br /> <label className="form-label" >Sold</label>
                    <input type="checkbox" checked={laptop.sold} onChange={(event) => setLaptop({ ...laptop, sold: event.target.checked })} />
                    <br />
                    <label className="form-label">Date</label>
                    <input type="date" value={laptop.date} onChange={(event) => setLaptop({ ...laptop, date: event.target.value })} />
                    <br />
                    <button className="btn btn-success" type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}

export default Laptop;