import React, { useState } from 'react';
import useDynamicTitle from '../../shared/useDynamicTitle';
import SellerRegister from './SellerRegister';

const RegisterContainer = () => {
    useDynamicTitle('Register');
    const [registerUser, setRegisterUser] = useState(true)
    return (
        <div className='container w-100 align-middle'>
            <h1 className='text-center'>Register Now</h1>
            
            <SellerRegister></SellerRegister>
        </div>
    );
};

export default RegisterContainer;