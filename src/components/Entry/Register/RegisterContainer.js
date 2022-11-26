import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDynamicTitle from '../../shared/useDynamicTitle';
import SellerRegister from './SellerRegister';
import UserRegister from './UserRegister';

const RegisterContainer = () => {
    useDynamicTitle('Register');
    const [registerUser, setRegisterUser] = useState(true)
    return (
        <div className='container w-50 align-middle'>
            <h1 className='text-center'>Register Now</h1>
            <div className='text-center'>
                <button className='btn btn-danger mx-1' onClick={() => setRegisterUser(true)}>As User Register</button>
                <button className='btn btn-danger mx-1' onClick={() => setRegisterUser(false)}>As Seller Register</button>

            </div>
            <div>
                {
                    registerUser ? <UserRegister></UserRegister> : <SellerRegister></SellerRegister>
                }
                
            </div>
        </div>
    );
};

export default RegisterContainer;