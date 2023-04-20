import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Laptops(props) {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [listLaptops, setListLaptops] = useState([]);

    const [filteredListLaptops, setFilteredListLaptops] = useState([]);

    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        setLoading(true);
        axios.get('http://localhost:8080/laptops')
            .then(res => {
                setListLaptops(res && res.data ? res.data : []);
                setFilteredListLaptops(res && res.data ? res.data : []);
            })
            .then(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        setFilteredListLaptops(listLaptops.filter((item) => {
            return item.name.toLowerCase().includes(keyword.toLowerCase());
        }))
    }, [keyword, listLaptops])

    const deleteLaptop = (id) => {
        axios.delete(`http://localhost:8080/laptops/${id}`)
            .then(() => { fetchData() });
    }

    return (
        <div className="container">
            <div>
                <h1>Laptop</h1>
                <div>
                    <button className="btn btn-primary" onClick={() => { navigate('/laptops/0', { state: { laptop: {} } }) }}>Add New Laptop</button>
                </div>
                <div><input type="text" onChange={(event) => setKeyword(event.target.value)} value={keyword} /></div>
            </div>

            <br />
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Index</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Sold</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {!loading ? filteredListLaptops.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.brand}</td>
                            <td><input type="checkbox" checked={item.sold} readOnly /></td>
                            <td>{item.date}</td>
                            <td>
                                <button style={{ 'marginRight': '8px' }} className="btn btn-success" onClick={() => { navigate(`/laptops/${item.id}`, { state: { laptop: item } }) }}>Edit</button>
                                <button className="btn btn-danger" onClick={() => { deleteLaptop(item.id) }}>Delete</button>
                            </td>
                        </tr>
                    )) : <tr key="">Loading...</tr>}
                </tbody>
            </table>
        </div>
    );
}

export default Laptops;