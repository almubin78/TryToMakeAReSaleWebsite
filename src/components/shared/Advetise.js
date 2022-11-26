import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Advetise = () => {
    const [advertiseProducts, setAdvertiseProducts] = useState([]);
    const haveProduct = true;
    useEffect(() => {
        //এটি ছাড়া শুধু ফেচ করলেও ঠিক রেজাল্ট আসে। 
        fetch('http://localhost:5000/tempCollection')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAdvertiseProducts(data)
            })
    }, [])

    return (
        <div>
            {
                haveProduct ?
                    <h1> Here are {advertiseProducts.length} AvailAble Products For you </h1> : <h1> There are no Available Products</h1>
            }
            {
                advertiseProducts.length ?

                    advertiseProducts.map(p =>
                        
                        <Card className='grid grid-cols-2' key={p._id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" alt='Pic Not Available' />
                            <Card.Body>
                                <Card.Title>{p.productName}</Card.Title>
                                <Card.Title>
                                    Bought Price: {p.BuyPrice}
                                </Card.Title>
                                <Card.Text>
                                    Sell Price: {p.SellPrice}
                                </Card.Text>
                                <Card.Text>
                                    Location: {p.Address}
                                </Card.Text>
                                <Card.Text>
                                    Contact: {p.Phone}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>



                    )

                    :
                    <p>There Are Nothing To show Now </p>

            }

        </div>
    );
};

export default Advetise;