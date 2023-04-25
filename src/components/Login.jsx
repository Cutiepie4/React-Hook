import React from 'react';
import { useState } from 'react';
import { loginApi } from '../redux/laptopSlice';
import { useDispatch, useSelector } from 'react-redux';
function Login(props) {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const { error, msg } = useSelector(state => state.laptopReducer);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(loginApi({ username, password }));
    }

    return (
        <form className="container form-control" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Username:</label>
                <input id='username' name='username' type="text" className="form-control" placeholder="Username..." onChange={(e) => setUsername(e.target.value)} value={username} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input id='password' name='password' type="password" className="form-control" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" >Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    );
}

export default Login;