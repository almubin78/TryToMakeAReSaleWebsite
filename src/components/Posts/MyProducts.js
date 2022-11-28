import React, { useEffect, useState } from 'react';

const MyProducts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data)
            })
    }, [])
    const handleDeletePosts = id => {
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
                        <th scope="col">Location</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post, i) =>
                            <tr key={post._id}>
                                <th scope="row">{i + 1}</th>

                                <td>{post.location}</td>
                                <td>{post.phone}</td>
                                <td>{post.email}</td>
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