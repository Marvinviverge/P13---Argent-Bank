import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.css'
import Logo from '@/Assets/img/argentBankLogo.png';

const Header = () => {
    return (
        <header className="main-nav">
            <NavLink to="/home" className="main-nav-logo">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <nav>
                <NavLink to="/signin" className="main-nav-item">
                    <i className="fa fa-user-circle" />
                    Sign In
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;