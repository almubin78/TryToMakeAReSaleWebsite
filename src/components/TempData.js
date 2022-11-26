import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const TempData = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostKey = process.env.REACT_APP_img_key;
    // console.log('imgHostKey', imgHostKey);

    const handleAddedData = data => {
        const { productName, boughtPrice, resalePrice, location, contactNumber, postTime, image } = data;

        const Image = data.image[0];
        const formData = new FormData();
        formData.append('Image', Image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                // if (imgData) {

                //     console.log('imgData', imgData.success.lastModifiedDate);

                // }

            })
            .catch(err => console.error(err.message))

        const newPost = {
            productName: productName,
            BuyPrice: `${boughtPrice}`,
            SellPrice: resalePrice,
            Address: location,
            Phone: contactNumber,
            // PostTime:Image[0].lastModifiedDate,
            PostTime: postTime,
            // image:imgData.data.url
        }
        fetch('http://localhost:5000/tempCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${productName} is added successfully`);
                // navigate('/dashboard/managedoctors')
            })
    }
    return (
        <div className='container'>
            <div className='w-100 border border-2 p-4 mt-4'>
                <h2 className='text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleAddedData)}>
                    <div className="">
                            <label className="label"> <span className="text-primary">Product Name</span></label> <br />
                            <input type="text" {...register("productName", {
                                required: "You Have to entire Product Name"
                            })} className="form-control" />
                            {errors.productName && <p className='text-danger'>{errors.productName.message}</p>}
                        </div>
                        <div className="">
                            <label className="label"> <span className="text-primary">Bought Price</span></label>
                            <input type="number" {...register("boughtPrice", {
                                required: "Your Bought Price is Required"
                            })} className="form-control" />
                            {errors.boughtPrice && <p className='text-danger'>{errors.boughtPrice.message}</p>}
                        </div>
                        <div className="">
                            <label className="label"> <span className="text-primary">Resale Price</span></label>
                            <input type="number" {...register("resalePrice", {
                                required: "Password is Required"
                            })} className="form-control" />
                            {errors.resalePrice && <p className='text-danger'>{errors.resalePrice.message}</p>}
                        </div>
                        <div className="">
                            <label className="label"> <span className="text-primary">Location</span></label>
                            <input type="text" {...register("location", {
                                required: "Your Location is Required"
                            })} className="form-control" />
                            {errors.location && <p className='text-danger'>{errors.location.message}</p>}
                        </div>
                        <div className="">
                            <label className="label"> <span className="text-primary">Phone Number</span></label>
                            <input type="text" {...register("contactNumber", {
                                required: "Password is Required"
                            })} className="form-control" />
                            {errors.contactNumber && <p className='text-danger'>{errors.contactNumber.message}</p>}
                        </div>
                        <div className="">
                            <label className="label"> <span className="text-primary">Time Of Post</span></label>
                            <input type="text" {...register("postTime", {
                                // required: "Password is Required"
                            })} className="form-control" />
                            {errors.postTime && <p className='text-danger'>{errors.postTime.message}</p>}
                        </div>
                    <div className="">
                        <label className="label"> <span className="text-primary">Image</span></label>
                        <input type="file" {...register("image", {
                            required: "Image is Required"
                        })} className="form-control" />
                        {errors.image && <p className='text-danger'>{errors.image.message}</p>}
                    </div>
                    <button className='btn btn-primary mt-1' type='submit'>Add Product</button>

                </form>
            </div>
        </div>
    );
};

export default TempData;