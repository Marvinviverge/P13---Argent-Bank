import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '@/Components/Header/Header.js';
import Footer from '@/Components/Footer/Footer.js';

import './Layout.css'

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;