// import { useContext } from 'react';

import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../firebase/FirebaseAuthProvider';
// import { Context } from '../../firebase/FirebaseAuthProvider';
import useDynamicTitle from '../shared/useDynamicTitle';
// import { useQuery } from '@tanstack/react-query';

const Posts = () => {

    const goTo = useNavigate();
    const { loading, user } = useContext(Context)
    useDynamicTitle('Create Post')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_img_key;

    const handleCreatePost = data => {
        const { ItemName, img, OriginalPrice, SellPrice, phoneUsedTime, timeOfPost, conditionType, category, description, purchesYear,phone,location } = data;
        const image = img[0]
        const formData = new FormData();
        formData.append('image', image)
        //'image' লিখিনি বলে ইরোর দিত
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch((url), {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(idata => {
                console.log('image Data', idata);
                if (idata.success) {
                    const newPost = { ItemName, img: idata.data.url, OriginalPrice, SellPrice, phoneUsedTime, timeOfPost, conditionType, category, description, purchesYear, sellerName: user.displayName,phone,location };
                    fetch('http://localhost:5000/posts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('myToken')}`
                        },
                        body: JSON.stringify(newPost)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log('#Post.js ##',data)
                            if (data.acknowledged) {
                                toast.success('Congratulations!!! Your Post has been created successfully');
                                goTo('/dashboard/sellerDashBoard')
                            };

                        })
                }

            })

        if (loading) {
            return <h1>Loading....</h1>
        }
    }

    return (
        <div className='container'>
            <div className='w-75  border border-2 p-5 mt-4 mx-auto'>
                <h2 className='text-center'>Create Post About Your Product</h2>
                <form onSubmit={handleSubmit(handleCreatePost)}>

                    <div>
                        <label className="label"><span className="text-primary">Company Name</span></label>
                        <select {...register("ItemName", { required: true })} className="form-select ">
                            <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Oppo">Oppo</option>
                            <option value="Nokia">Nokia</option>
                            <option value="Trimline Telephone">Trimline Telephone</option>
                            <option value="The Bakelite Phone">The Bakelite Phone</option>
                            <option value="Desk Top Cradle Telephone">Desk Top Cradle Telephone</option>
                            <option value="Sagem">Sagem</option>
                            <option value="OnePlus">OnePlus</option>
                            <option value="RealMe">RealMe</option>
                        </select>
                    </div>
                    <div>
                        <label className="label"> <span className="text-primary">Category </span><span className='text-warning font-bold'>(Select Carefully! after checking Your Post , It might be deleted if Not match with your post data )</span></label>
                        <select {...register("category", { required: true })} className="form-select ">
                            <option value="AntiquePhone">Antique Phone</option>
                            <option value="SmartPhone">Smart Phone</option>
                            <option value="ButtonPhone">Button Phone</option>
                        </select>
                    </div>
                    <div>
                        <label className="label"> <span className="text-primary">Condition Type </span><span className='text-warning font-bold'>(Select Carefully! after checking Your Post , It might be deleted if Not match with your post data )</span></label>
                        <select {...register("conditionType", { required: true })} className="form-select ">
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label"> <span className="text-primary">Image</span></label>
                        <input type="file" {...register("img", {
                            required: "Photo is Required"
                        })} className="form-control" />
                        {errors.img && <p className='text-danger'>{errors.img.message}</p>}
                    </div>

                    <div className='d-flex mt-2'>
                        <div className="">
                            <label className="label"> <span className="text-primary">OriginalPrice: </span></label>
                            <input defaultValue={45000} type="text" {...register("OriginalPrice", {
                                required: "Original Price is Required"
                            })} className="form-control w-50" />
                            {errors.OriginalPrice && <p className='text-danger'>{errors.OriginalPrice.message}</p>}
                        </div>
                        <div className="">
                            <label className="label"> <span className="text-primary">Sell Price: </span></label>
                            <input defaultValue={15000} type="text" {...register("SellPrice", {
                                required: "Entire Sell Price"
                            })} className="form-control " />
                            {errors.SellPrice && <p className='text-danger'>{errors.SellPrice.message}</p>}
                        </div>

                    </div>

                    <div className=''>
                        <label className="label"> <span className="text-primary">Parches of Year </span><span className='text-warning font-bold'>(2020 to present)</span></label>
                        <select {...register("purchesYear", { required: true })} className="form-select">
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2">2022</option>

                        </select>
                    </div>
                    <div className=''>
                        <label className="label"> <span className="text-primary">location </span></label>
                        <select {...register("location", { required: true })} className="form-select">
                            <option value="Dhaka">Dhaka</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="RajShahi">RajShahi</option>
                            <option value="Commilla">Commilla</option>
                            <option value="Sylet">Sylet</option>
                            <option value="Jassor">Jassor</option>


                        </select>
                    </div>
                    <div className=''>
                        <label className="label"> <span className="text-primary">Used Time </span></label>
                        <select {...register("phoneUsedTime", { required: true })} className="form-select">
                            <option value="less than 6 month">less than 6 month</option>
                            <option value="More Than 6 month to 1 year">More Than 6 month to 1 year</option>
                            <option value="More Than 1 Year to 2 Year ">More Than 1 Year to 2 Year </option>
                            <option value="More Than 2 Year ">More Than 2 Year </option>

                        </select>
                    </div>
                    <div className="">
                        <label className="label"> <span className="text-primary">Short Description</span></label>
                        <input defaultValue={`This Phone is very unique, You also understand after used.`} type="text" {...register("description", {
                            required: "Enter a short description about your phone"
                        })} className="form-control" />
                        {errors.description && <p className='text-danger'>{errors.description.message}</p>}
                    </div>

                    <div className="">
                        <label className="label"> <span className="text-primary">Contact Number</span></label>
                        <input defaultValue={+880170100222255} type="number" {...register("phone", {
                            required: "Please Provide your Phone Number. It will be used when You Try To purchase /Sell a product"
                        })} className="form-control" />
                        {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
                    </div>


                    <button className='btn btn-primary mt-1' type='submit'>Create Post</button>

                </form>
            </div>

        </div>
    );

};

export default Posts;