import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, SignIn, User, Error } from '@/Pages/Public/index.js'

import Layout from '@/Layout/Layout.js';
import { UserStore } from './User/userStore';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route path="" element={<Navigate to="/home" />} />

                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/user" element={<UserStore />} />

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>

    );
};

export default PublicRouter;