import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const ListOfSeller = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            // console.log(data);
            return data
        }
    })

    const handleVerifySeller = id => {
        console.log('handleVerifySeller id', id);
        fetch(`http://localhost:5000/allUsers/verified/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('myToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(' seller verified successful.');
                    refetch();
                }
            })
    }
    const handleDeleteUser = id => {
        console.log(id);
        fetch(`http://localhost:5000/deleteSeller/${id}`, {
            method: 'delete',
            headers: {
                authorization: `bearer ${localStorage.getItem('myToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('### ListOfSeller.js #handleDeleteUser f.t.t(data)', data);
                toast.success(`You Have deleted ${data.name} successfully` );
                refetch();
            })
    }
    return (
        <div>
            <h1>Here are all seller List</h1>
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
                        users.map((sel, i) =>
                            <tr key={sel._id}>
                                <th scope="row">{i + 1}</th>
                                <td className='position-relative'>{sel.name}{sel.verifiedSeller === true &&
                                    <>
                                        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </>
                                }
                                </td>
                                <td>{sel.location}</td>
                                <td>{sel.phone}</td>
                                <td>{sel.email}</td>
                                <th>
                                    {
                                        sel.verifiedSeller === true ?
                                            <p>verifyed</p>

                                            :
                                            <>
                                                {sel?.role !== 'admin' && <button className='btn btn-info' onClick={() => handleVerifySeller(sel._id)}>verify seller</button>}
                                            </>
                                    }

                                </th>
                                <th>
                                    <button className='btn btn-danger' onClick={() => handleDeleteUser(sel._id)}>Delete Seller</button>
                                </th>
                            </tr>
                        )
                    }

                </tbody>
            </table>


        </div>
    );
};

export default ListOfSeller;