import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link navbar-nav" to="/home">Home </NavLink>
                        <NavLink className="nav-link navbar-nav" to="/laptops">Laptops </NavLink>
                        <NavLink className="nav-link navbar-nav" to="/login">Login</NavLink>
                        <NavLink className="nav-link navbar-nav" to="/logout">Logout</NavLink>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Nav;