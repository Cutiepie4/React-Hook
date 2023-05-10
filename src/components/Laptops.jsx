import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchLaptops, deleteLaptops, searchLaptops } from '../redux/laptopSlice';

function Laptops(props) {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { isLoading, listLaptops } = useSelector(state => state.laptopReducer);

    const [filteredListLaptops, setFilteredListLaptops] = useState([]);

    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        dispatch(fetchLaptops());
    }, [])

    useEffect(() => {
        setFilteredListLaptops(listLaptops.filter((item) => {
            return item.name.toLowerCase().includes(keyword.toLowerCase()) || item.brand.toLowerCase().includes(keyword.toLowerCase());
        }))
    }, [keyword, listLaptops])

    return (
        <div className="container">
            <h1>Laptop</h1>
            <div>
                <div>
                    <button className="btn btn-primary" onClick={() => { navigate('/laptops/0', { state: { laptop: {} } }) }}>Add New Laptop</button>
                </div>
                <div><input placeholder='Search by name or brand...' type="text" onChange={(event) => setKeyword(event.target.value)} value={keyword} /></div>
                {/* <div><button className="btn btn-success" onClick={() => { dispatch(fetchLaptops()) }}>Refresh</button></div> */}
                <div><button className='btn btn-success' onClick={() => { dispatch(searchLaptops(keyword)) }}>Search</button></div>
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
                    {!isLoading ? filteredListLaptops.map((item, index) => (
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
                                <button className="btn btn-danger" onClick={() => { dispatch(deleteLaptops(item.id)) }}>Delete</button>
                            </td>
                        </tr>
                    )) : <tr key="0"><td><h3>Loading...</h3></td></tr>}
                </tbody>
            </table>
        </div>
    )
};

export default Laptops;