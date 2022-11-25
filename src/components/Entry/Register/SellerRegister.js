import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../firebase/FirebaseAuthProvider';
import useToken from '../../../hooks/useToken';

const SellerRegister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userCreate, updateUser } = useContext(Context);

    const [registerError, setRegisterError] = useState('')
    const [registerUserEmail, setRegisterUserEmail] = useState('');
    const [issueToken] = useToken(registerUserEmail);
    const navigate = useNavigate();


    const handleSignUp = data => {
        console.log(data);
    }
    return (
        <div className='container'>
            <div className='w-75'>
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="">
                        <label className="label"> <span className="text-primary">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                    </div>
                    <div className="">
                        <label className="label"> <span className="text-primary">Name</span></label>
                        <input type="email" {...register("email", {
                            required: "Email is Required"
                        })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                    </div>
                    <div className="">
                        <label className="label"> <span className="text-primary">Name</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is Required"
                        })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                    </div>
                    <div className="">
                        <label className="label"> <span className="text-primary">Name</span></label>
                        <input type="file" {...register("Image", {
                            required: "Image is Required"
                        })} className="input input-bordered w-full" />
                        {errors.Image && <p className='text-danger'>{errors.Image.message}</p>}
                    </div>
                    <button className='btn btn-primary' type='submit'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default SellerRegister;