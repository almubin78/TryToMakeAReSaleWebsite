import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
const MyProducts = () => {
    
    const { data: posts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('https://assigment-12-server-almubin78.vercel.app/posts');
            const data = await res.json();
            return data
        }
    })
   
    const handleDeletePosts = id => {
        fetch(`https://assigment-12-server-almubin78.vercel.app/posts/${id}`, {
            method: 'DELETE', 
            headers: {
                
                authorization: `bearer ${localStorage.getItem('myToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            console.log(data);
            toast.success('Your Product deleted')
        })

    }
    const handleSentToPost = id => {
        console.log(id);
    }
    return (
        <div>
            <h3 className='text-center'>My Posts</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Condition Type</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post, i) =>
                            <tr key={post._id}>
                                <th scope="row">{i + 1}</th>

                                <td>{post.ItemName}</td>
                                <td>{post.category}</td>
                                <td>{post.conditionType}</td>
                                <th><button className='btn btn-info' onClick={() => handleSentToPost(post._id)}>Available</button></th>
                                <th>
                                    <button className='btn btn-info' onClick={() => handleDeletePosts(post._id)}>Delete</button>

                                </th>

                            </tr>
                        )
                    }

                </tbody>
            </table>


        </div>
    );
};


export default MyProducts;