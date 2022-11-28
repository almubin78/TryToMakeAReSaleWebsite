import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ListOfBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyer');
            const data = await res.json();
            console.log(data);
            return data
        }
    })
    const handleDeleteBuyer = id =>{

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
                                {sel?.role !== 'admin' && <button className='btn btn-info' onClick={() => handleDeleteBuyer(sel._id)}>Delete</button>}

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