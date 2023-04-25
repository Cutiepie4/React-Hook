import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutApi } from '../redux/laptopSlice';

function Logout(props) {

    const dispatch = useDispatch();

    return (
        <div className='form-control container'>
            <div><h2>Are you want to log out ?</h2></div>
            <div><button className='btn btn-primary' onClick={() => { dispatch(logoutApi()) }}>Logout</button></div>
        </div>
    );
}

export default Logout;