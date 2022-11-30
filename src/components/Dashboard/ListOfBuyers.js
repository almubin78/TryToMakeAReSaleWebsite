import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ListOfBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://assigment-12-server-almubin78.vercel.app/buyer');
            const data = await res.json();
            console.log('ListOfBuyers.js ### queryFn ## data:::::::::', data);
            return data
        }
    })
    const handleDeleteUser = id => {
        console.log(id);
        fetch(`https://assigment-12-server-almubin78.vercel.app/deleteSeller/${id}`, {
            method: 'delete',
            headers: {
                authorization: `bearer ${localStorage.getItem('myToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(' seller verified successful.');
                refetch();
            })
    }
    return (
        <div>
            <h1>Here are all Buyer List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((sel, i) =>
                            <tr key={sel._id}>
                                <th scope="row">{i + 1}</th>
                                <td className=''>{sel.name}
                                </td>
                                <td>{sel.location}</td>
                                <td>{sel.phone}</td>
                                <td>{sel.email}</td>
                                <th>
                                    {sel?.role !== 'admin' && <button className='btn btn-info' onClick={() => handleDeleteUser(sel._id)}>Delete</button>}

                                </th>

                            </tr>
                        )
                    }

                </tbody>
            </table>


        </div>
    );

};

export default ListOfBuyers;