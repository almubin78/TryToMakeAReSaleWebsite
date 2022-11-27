import React from 'react';
import { useForm } from 'react-hook-form';
const Posts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleCreatePost = data => {
        const { ItemName, img, OriginalPrice, SellPrice, phoneUsedTime, timeOfPost, conditionType, Category, description, purchesYear } = data;
        console.log(data);
    }
    return (
        <div className='container'>
            <div className='w-75  border border-2 p-5 mt-4 mx-auto'>
                <h2 className='text-center'>SignUp as a Seller/Buyer</h2>
                <form onSubmit={handleSubmit(handleCreatePost)}>
                    <div className="">
                        <label className="label"> <span className="text-primary">Item Name</span></label> <br />
                        <input type="text" {...register("ItemName", {
                            required: "Entire Your Phones Model"
                        })} className="form-control" />
                        {errors.ItemName && <p className='text-danger'>{errors.ItemName.message}</p>}
                    </div>
                    <div>
                        <label className="label"> <span className="text-primary">Category </span><span className='text-warning font-bold'>(Select Carefully! after checking Your Post , It might be deleted if Not match with your post data )</span></label>
                        <select {...register("Category", { required: true })} className="form-select ">
                            <option value="oldPhone">Old Phone</option>
                            <option value="smartPhone">Smart Phone</option>
                            <option value="buttonPhone">Button Phone</option>
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
                    <div className="">
                        <label className="label"> <span className="text-primary">Image</span></label>
                        <input type="file" {...register("img", {
                            required: "Email is Required"
                        })} className="form-control" />
                        {errors.img && <p className='text-danger'>{errors.img.message}</p>}
                    </div>
                    <div className='d-flex mt-2'>
                        <div className="">
                            <label className="label"> <span className="text-primary">OriginalPrice: </span></label>
                            <input type="text" {...register("OriginalPrice", {
                                required: "Original Price is Required"
                            })} className="form-control w-50" />
                            {errors.OriginalPrice && <p className='text-danger'>{errors.OriginalPrice.message}</p>}
                        </div>
                        <div className="">
                            <label className="label"> <span className="text-primary">Sell Price: </span></label>
                            <input type="text" {...register("SellPrice", {
                                required: "Entire Sell Price"
                            })} className="form-control " />
                            {errors.SellPrice && <p className='text-danger'>{errors.SellPrice.message}</p>}
                        </div>

                    </div>
                    <div className="">
                        <label className="label"> <span className="text-primary">Used Time</span></label>
                        <input type="text" {...register("phoneUsedTime", {
                            required: "How month or year you have used the phone?"
                        })} className="form-control" />
                        {errors.phoneUsedTime && <p className='text-danger'>{errors.phoneUsedTime.message}</p>}
                    </div>
                    {/* description, purchesYear */}
                    <div className=''>
                        <label className="label"> <span className="text-primary">Parches of Year </span><span className='text-warning font-bold'>(2020 to present)</span></label>
                        <select {...register("Category", { required: true })} className="form-select">
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                    <div className=''>
                        <label className="label"> <span className="text-primary">location </span></label>
                        <select {...register("location", { required: true })} className="form-select">
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Bogura">Bogura</option>
                            <option value="Comilla">Comilla</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Rajshahi">Rajshahi</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="label"> <span className="text-primary">Short Description</span></label>
                        <input type="text" {...register("description", {
                            required: "Enter a short description about your phone"
                        })} className="form-control" />
                        {errors.description && <p className='text-danger'>{errors.description.message}</p>}
                    </div>
                    
                    <div className="">
                        <label className="label"> <span className="text-primary">Contact Number</span></label>
                        <input type="text" {...register("phone", {
                            required: "Please Provide your Phone Number. It will be used when You Try To purchase /Sell a product"
                        })} className="form-control" />
                        {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
                    </div>


                    <button className='btn btn-primary mt-1' type='submit'>Create Post</button>
                    {/* {registerError && <p className='text-danger'>{registerError}</p>} */}

                </form>
            </div>
        </div>
    );

};

export default Posts;