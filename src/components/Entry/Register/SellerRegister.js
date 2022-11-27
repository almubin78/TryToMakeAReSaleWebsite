import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../firebase/FirebaseAuthProvider';
import useToken from '../../../hooks/useToken';

const SellerRegister = () => {
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
        const { email, password, name, location, phone, role } = data;
        console.log(data);
        userCreate(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('Your Registration is success');
                const userInfo = {
                    displayName: name,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email)
                    })
                    .catch(err => {
                        console.error('err Of updateUser', err);

                    })

            })
            .catch(err => {
                console.error(err.message);
                setRegisterError(err.message)
            });


        const saveUser = (name, email) => {
            const user = { name, email, location, phone, role,verifiedSeller:false }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setRegisterUserEmail(email)
                })
        }

    }
    return (
        <div className='container'>
            <div className='w-75  border border-2 p-5 mt-4 mx-auto'>
                <h2 className='text-center'>SignUp as a Seller/Buyer</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="">
                        <label className="label"> <span className="text-primary">Name</span></label> <br />
                        <input type="text" {...register("name", {
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
                    <div className="">
                        <label className="label"> <span className="text-primary">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Please Provide your location. It will be used when You Try To purchase/Sell a product"
                        })} className="form-control" />
                        {errors.location && <p className='text-danger'>{errors.location.message}</p>}
                    </div>
                    <div className="">
                        <label className="label"> <span className="text-primary">Phone</span></label>
                        <input type="text" {...register("phone", {
                            required: "Please Provide your Phone Number. It will be used when You Try To purchase /Sell a product"
                        })} className="form-control" />
                        {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
                    </div>
                    
                    <div>
                    <label className="label"> <span className="text-primary">Register As </span><span className='text-danger font-bold'>(select )</span></label>
                        <select {...register("role", { required: true })} className="form-select ">
                            <option value="buyer">buyer</option>
                            <option value="seller">seller</option>
                        </select>
                    </div>
                    <button className='btn btn-primary mt-1' type='submit'>Register</button>
                    {registerError && <p className='text-danger'>{registerError}</p>}

                    <p className='text-center'>Already Account?<Link to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SellerRegister;