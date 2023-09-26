import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { datasBank } from '@/Assets/data/datasBank';
import { loginSelector } from '@/_Features/Selectors/loginSelector';
import { userSelector } from '@/_Features/Selectors/userSelector';
import Bank from '@/Components/Bank/Bank';
import { accountService } from '@/_Services/accountService';
import './User.css'


const User = () => {

    const { token } = useSelector(loginSelector);
    const { firstName, lastName } = useSelector(userSelector);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const setinfos = async () => {
        const decodedToken = await accountService.getProfile(token);
        dispatch({ type: "User/setUserProfile", payload: { firstName: decodedToken.firstName, lastName: decodedToken.lastName } });
    }


    const update = async (newFirstName, newLastName) => {
        await accountService.updateProfile({ firstName: newFirstName, lastName: newLastName, token: token })
        dispatch({ type: "User/setUserProfile", payload: { firstName: newFirstName, lastName: newLastName } })
    }

    const [edit, setEdit] = useState(false)
    const [newFirstName, setNewFirstName] = useState(firstName)
    const [newLastName, setNewLastName] = useState(lastName)

    useEffect(() => {
        if (accountService.isLogged()) {
            setinfos()
            setNewFirstName(firstName)
            setNewLastName(lastName)
        } else {
            navigate('/home')
        }
        // eslint-disable-next-line
    }, [firstName, lastName])

    let reset = () => {
        setEdit(false)
        setNewFirstName(firstName)
        setNewLastName(lastName)
    }

    let handleUpdate = () => {
        update(newFirstName, newLastName)
        setEdit(false)
    }

    return (
        <div className="main bg-dark">
            <div className="header">
                {
                    !edit &&
                    <div className='padding'>
                        <h1>Welcome back<br />{firstName} {lastName}!</h1>
                        <button className="edit-button" onClick={() => setEdit(true)}>Edit Name</button>
                    </div>
                }
                {
                    edit &&
                    <div className='padding'>
                        <h1>Welcome back</h1>
                        <section className='update'>
                            <div className='input-update'>
                                <input type='text' value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} />
                                <input type='text' value={newLastName} onChange={(e) => setNewLastName(e.target.value)} />
                            </div>
                            <div className='button-update'>
                                <button className="edit-button" onClick={handleUpdate}>Save</button>
                                <button className="edit-button" onClick={reset}>Cancel</button>
                            </div>
                        </section>
                    </div>
                }

            </div>
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

        </div>

    );
};

export default User;