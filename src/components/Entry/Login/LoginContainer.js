import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Context } from '../../../firebase/FirebaseAuthProvider';
import useToken from '../../../hooks/useToken';
import useDynamicTitle from '../../shared/useDynamicTitle';

const LoginContainer = () => {
    const {logIn,googleLogin}=useContext(Context);
    useDynamicTitle('Login');
    const [loginError,setLoginError,loading] = useState('')
    const [loginUserEmail,setLoginUserEmail]= useState('')
    const [issueToken] = useToken(loginUserEmail)
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = data =>{
        const {email} = data;
        setLoginUserEmail(email)
        logIn(data.email,data.password)
        .then(res=>{
            const user = res.user;
            console.log(user);
        })
        .catch(err=>{
            setLoginError(err.message)
        })
    }
    return (

       
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