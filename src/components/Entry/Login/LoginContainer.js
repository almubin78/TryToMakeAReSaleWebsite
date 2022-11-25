import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDynamicTitle from '../../shared/useDynamicTitle';
import SellerLogin from './SellerLogin';
import UserLogin from './UserLogin';

const LoginContainer = () => {
    const [userLogin, setUserLogin] = useState(true);
    useDynamicTitle('Login')
    return (
        <div className='container w-75 mx-auto'>
            <h1>Login Now</h1>
            <div>
                <button onClick={() => setUserLogin(true)}>As User Login</button>
                <button onClick={() => setUserLogin(false)}>As Seller Login</button>
                {
                    userLogin ? <UserLogin></UserLogin> : <SellerLogin></SellerLogin>
                }
                <p>New to Our Site?<Link to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginContainer;