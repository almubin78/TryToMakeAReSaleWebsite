import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../firebase/FirebaseAuthProvider';
import useToken from '../../../hooks/useToken';

const UserRegister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userCreate, updateUser } = useContext(Context);

    const [registerError, setRegisterError] = useState('')
    const [registerUserEmail, setRegisterUserEmail] = useState('');
    const [issueToken] = useToken(registerUserEmail);
    const goToPage = useNavigate();
    if (issueToken) {
        goToPage('/')
    }
    const handleSignUp = data => {
        const { email, password,name } = data;
    }
    return (
        <div className='container'>
            <div className='w-100 border border-2 p-4 mt-4'>
                <h2 className='text-center'>SignUp as a Buyer</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="">
                        <label className="label"> <span className="text-primary">Name</span></label> <br />
                        <input  type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="form-control" />
                        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                    </div>
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

                    <button className='btn btn-primary mt-1' type='submit'>Register</button>
                    {registerError && <p className='text-danger'>{registerError}</p>}

                    <p className='text-center'>Already Account?<Link to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default UserRegister;