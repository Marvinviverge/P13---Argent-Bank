import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { accountService } from "@/_Services/accountService";
import { useDispatch, useSelector } from 'react-redux';

import './Header.css'
import Logo from '@/Assets/img/argentBankLogo.png';
import { userSelector } from '@/Pages/Public/User/userSelector.js';

const Header = () => {

    const { firstName } = useSelector(userSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let logout = () => {
        dispatch({ type: "Auth/logout", payload: navigate('/home') })
        dispatch({ type: "User/setUserProfile", payload: { firstName: '', lastName: '' } })
    }

    return (
        <header className="main-nav">
            <NavLink to="/home" className="main-nav-logo">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {
                accountService.isLogged() &&
                <nav>
                    <NavLink to="/user" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {firstName}
                    </NavLink>
                    <NavLink to="/home" onClick={logout} className="main-nav-item">
                        <i className="fa fa-sign-out" />
                        Sign Out
                    </NavLink>
                </nav>
            }
            {
                !accountService.isLogged() &&
                <nav>
                    <NavLink to="/signin" className="main-nav-item">
                        <i className="fa fa-user-circle" />
                        Sign In
                    </NavLink>
                </nav>
            }

        </header >
    );

};

export default Header;