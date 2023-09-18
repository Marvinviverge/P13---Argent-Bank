import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accountService } from '@/_Services/accountService';
import { loginSelector } from '../SignIn/loginSelector';
import User from './User';

export const UserStore = () => {
    const [infos, setInfos] = useState({})
    const { token } = useSelector(loginSelector);
    const dispatch = useDispatch()

    useEffect(() => {
        getinfos()
    }, [])

    const getinfos = async () => {
        const decodedToken = await accountService.getProfile(token);
        setInfos(decodedToken);
        dispatch({ type: "User/setUserProfile", payload: { firstName: decodedToken.firstName, lastName: decodedToken.lastName } });
    }

    const datasBank = [
        {
            title: 'Argent Bank Checking (x8349)',
            amount: '$2,082.79',
            description: 'Available Balance',
        },
        {
            title: 'Argent Bank Savings (x6712)',
            amount: '$10,928.42',
            description: 'Available Balance',
        },
        {
            title: 'Argent Bank Credit Card (x8349)',
            amount: '$184.30',
            description: 'Current Balance',
        },
    ]

    return <>
        <User datasBank={datasBank} />
    </>
}