import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
        <div className='container w-75'>
            {
                haveProduct &&
                <h1 className='text-center'> AvailAble Products {advertiseProducts.length}  </h1>



            }
            <hr className='text-primary fw-bold mb-3' />
            <Container>
                <Row>
                    {
                        advertiseProducts.length ?

                            advertiseProducts.map(p =>

                                <Card className='mx-2 mb-2' key={p._id} style={{ width: '18rem' }}>
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
                                        <Button variant="primary">Book Now</Button>
                                    </Card.Body>
                                </Card>



                            )

                            :

                            <>
                                <h3 className='text-center'> There are no Available Products </h3>
                                <h4 className='text-center'>Waiting for Seller Post</h4>
                                <h5 className='text-center'>Are You Interested to sold Out your Old Phone? Plz <Link className='text-decoration-none' to='register '>Register</Link> as a Seller</h5>
                            </>

                    }
                </Row>
            </Container>

        </div>
    );
};

export default Advetise;