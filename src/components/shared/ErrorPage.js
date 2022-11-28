import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Context } from '../../firebase/FirebaseAuthProvider';

const ErrorPage = () => {
    const {logOut} = useContext(Context);
    const getError = useRouteError();
    const goTo = useNavigate()
    const handleSignOut = ()=>[
        logOut().then(()=>{goTo('/login')}).catch(err=>console.error(err))

    ]
    return (
        <div>
            <p className='text-warning'>There are Something wrong!! Please Sign Out and Login back</p>
            <p className='text-warning'>{getError.statusText} ||{getError.message}</p>
            <button className='btn btn-warning' onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default ErrorPage;