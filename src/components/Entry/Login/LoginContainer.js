import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useDynamicTitle from '../../shared/useDynamicTitle';
import SellerLogin from './SellerLogin';
import UserLogin from './UserLogin';

const LoginContainer = () => {
    const [userLogin, setUserLogin] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    useDynamicTitle('Login');

    const [loginError,setLoginError] = useState('')
    const handleLogin = data =>{

    }
    return (

        /* 
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
        */
        <div className='container'>
            <div className='w-100 border border-2 p-4 mt-4'>
                <h2 className='text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} className='w-50 mx-auto'>
                    
                    <div className="">
                        <label className="label"> <span className="text-primary">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "Email is Required"
                        })} className="form-control" />
                        {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                    </div>
                    <div className="">
                        <label className="label"> <span className="text-primary">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is Required"
                        })} className="form-control" />
                        {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                    </div>
                    
                    <button className='btn btn-primary mt-1' type='submit'>Login</button>
                    {loginError && <p className='text-danger'>{loginError}</p>}

                    <p className='text-center'>Already Account? <Link to='/register'>Register</Link></p>
                </form>
            </div>
        </div>

    );
};

export default LoginContainer;