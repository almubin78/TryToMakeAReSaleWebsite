import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDynamicTitle from '../../shared/useDynamicTitle';
import SellerRegister from './SellerRegister';
import UserRegister from './UserRegister';

const RegisterContainer = () => {
    useDynamicTitle('Register');
    const [registerUser,setRegisterUser] = useState(true)
    return (
        <div className='container w-75'>
            <h1>Register Now</h1>
            <div>
                <button onClick={() => setRegisterUser(true)}>As User Register</button>
                <button onClick={() => setRegisterUser(false)}>As Seller Register</button>
                {
                    registerUser ? <UserRegister></UserRegister> : <SellerRegister></SellerRegister>
                }
                <p>Already Account?<Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterContainer;