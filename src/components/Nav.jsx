import React from 'react';
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <label className="navbar-brand">Laptop</label>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link navbar-nav" to="/home">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link navbar-nav" to="/laptops">Laptops</NavLink>
                    </li>
                    {/* <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown4
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" href="#">Action</NavLink>
                                <NavLink className="dropdown-item" href="#">Another action</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" href="#">Something else here</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled" href="#">Disabled</NavLink>
                        </li> */}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Nav;