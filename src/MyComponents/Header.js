import React from 'react';
import {NavLink} from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Form-Validation</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2">
                                    <NavLink exact className="nav-link" aria-current="page" to="/">SignUp</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink exact className="nav-link" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink exact className="nav-link" to="/info">Info</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
