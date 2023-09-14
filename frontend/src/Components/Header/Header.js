import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { accountService } from "@/_Services/accountService";

import './Header.css'
import Logo from '@/Assets/img/argentBankLogo.png';

const Header = () => {
    const navigate = useNavigate();

    const Logout = () => {
        accountService.logout();
        navigate("/home", { replace: true })
    }
    // condition d'affichage si l'user est loggé
    if (accountService.isLogged()) {
        return (
            <header className="main-nav">
                <NavLink to="/home" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <nav>
                    <NavLink to="/user" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </NavLink>
                    <NavLink to="/home" onClick={Logout} className="main-nav-item">
                        <i className="fa fa-sign-out" />
                        Sign Out
                    </NavLink>
                </nav>
            </header>
        )

    } else {
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
    }
};

export default Header;