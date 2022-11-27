import React, { useEffect, useState } from 'react';

const ListOfSeller = () => {
    const [sellers, setSellers] = useState([]);
    const [verified,setVerified] = useState(true);
    //ekhane fetch er bodole useQuery use korte hobe refetch() er jonno
    useEffect(() => {
        fetch('http://localhost:5000/sellers')
            .then(res => res.json())
            .then(data => {
                setSellers(data);
            })
    }, []);

    const handleVerifySeller = id => {
        console.log(id);
        setVerified(false)
    }
    return (
        <div>
            {/* <h1>Name: {name}</h1>
            <h1>Name: {name}</h1>
            <h1>Name: {name}</h1> */}


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((sel, i) =>
                            <tr key={sel._id}>
                                <th scope="row">{i + 1}</th>
                                <td>{sel.name}</td>
                                <td>{sel.location}</td>
                                <td>{sel.phone}</td>
                                {verified ?
                                    <th>
                                        {sel?.role !== 'admin' && <button className='btn btn-warning' onClick={() => handleVerifySeller(sel._id)}>verify seller</button>}

                                    </th>:
                                    <p>Verified</p>}
                            </tr>
                        )
                    }

                </tbody>
            </table>


        </div>
    );
};

export default ListOfSeller;