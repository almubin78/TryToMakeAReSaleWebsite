import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { context } from '../../../firebase/FirebaseAuthProvider';
// import useToken from '../../../hooks/useToken';

const SellerRegister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const  {userCreate}  = useContext(context);

    // const [registerError, setRegisterError] = useState('')
    // const [registerUserEmail, setRegisterUserEmail] = useState('');
    // const [issueToken] = useToken(registerUserEmail);


    const handleSignUp = data => {
        console.log(data);
        userCreate(data.semail)

    }
    return (
        <div className='container'>
            <div className='w-100 border border-2 p-4 mt-4'>
                <h2 className='text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="">
                        <label className="label"> <span className="text-primary">Name</span></label> <br />
                        <input defaultValue='Marks' type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="form-control" />
                        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                    </div>
                    <div className="">
                        <label className="label"> <span className="text-primary">Email</span></label>
                        <input defaultValue='almubin78@gmail.com' type="email" {...register("semail", {
                            required: "Email is Required"
                        })} className="form-control" />
                        {errors.semail && <p className='text-danger'>{errors.semail.message}</p>}
                    </div>
                    <div className="">
                        <label className="label"> <span className="text-primary">Password</span></label>
                        <input defaultValue='almubin78@gmail.com' type="password" {...register("spassword", {
                            required: "Password is Required"
                        })} className="form-control" />
                        {errors.spassword && <p className='text-danger'>{errors.spassword.message}</p>}
                    </div>
                    {/* <div className="">
                        <label className="label"> <span className="text-primary">Image</span></label>
                        <input defaultValue='' type="file" {...register("sImage", {
                            required: "Image is Required"
                        })} className="form-control" />
                        {errors.sImage && <p className='text-danger'>{errors.sImage.message}</p>}
                    </div> */}
                    <button className='btn btn-primary mt-1' type='submit'>Register</button>
                    <p className='text-center'>Already Account?<Link to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SellerRegister;