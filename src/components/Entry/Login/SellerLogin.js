import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../../firebase/FirebaseAuthProvider';
import useToken from '../../../hooks/useToken';

const SellerLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { logIn, googleLogin } = useContext(Context);
    const [loginError, setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [issueToken] = useToken(loginUserEmail);
    const [availableUser, setAvailableUser] = useState(true)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (issueToken) {
        navigate(from, { replace: true });
    }
    const handleLogIn = data => {
        const { email, password } = data;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                console.log('user.displayName', user.displayName);
                setLoginUserEmail(user.email);
                setAvailableUser(email)
                navigate('/')
            })
            .catch(err => {
                setLoginError(err.message)
            })
    }
    return (
        <div className='container'>
            <div className='w-100 border border-2 p-4 mt-4'>
                <h2 className='text-center'>SignIn as a Seller</h2>
                <form onSubmit={handleSubmit(handleLogIn)}>

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

export default SellerLogin;