import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './User.css'
import { accountService } from '@/_Services/accountService';
import Bank from '@/Components/Bank/Bank';
import { loginSelector } from '../SignIn/loginSelector';

const User = ({ datasBank }) => {

    return (
        <div>
            <main className="main bg-dark">
                <h2 className="sr-only">Accounts</h2>
                {
                    datasBank.map((item, index) => (
                        <Bank
                            key={'bank' + index}
                            title={item.title}
                            amount={item.amount}
                            description={item.description}
                        />
                    ))
                }
            </main>
        </div>
    );
};

export default User;