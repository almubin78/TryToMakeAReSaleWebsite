import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import { Context } from '../../firebase/FirebaseAuthProvider';
const ButtonPhone = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { user } = useContext(Context);
    const { displayName } = user;
    console.log(displayName);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://assigment-12-server.vercel.app/category/ButtonPhone')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);
    const handleCreatePost = data => {
        console.log(data);
    }
    return (
        <div>
            <h3>Welcome to our Antique Phone Collection: {products.length}</h3>
            <Container>
                <Row>
                    {
                        products.map(product =>
                            <Col key={product._id}>
                                {/* ItemName, img, OriginalPrice, SellPrice, phoneUsedTime, timeOfPost, conditionType, category, description, purchesYear,sellerName */}
                                <div className="card p-5">
                                    <img style={{ width: '18 rem', height: '18rem' }} src={product.img} className="card-img-top" alt="Pic Not get" />
                                    <div className="card-body">
                                        <p className="card-title"><span className='fw-bold text-primary'>Name: </span> {product.ItemName}</p>
                                        <p className="card-title"><span className='fw-bold text-primary'>Buy Price: </span>{product.OriginalPrice} taka</p>
                                        <p className="card-title"><span className='fw-bold text-primary'> Offer Price:</span> {product.SellPrice} taka</p>
                                        <p className="card-title"><span className='fw-bold text-primary'>Product Condition:</span> {product.conditionType}</p>
                                        <p className="card-title"><span className='fw-bold text-primary'>Used Time: </span>{product.phoneUsedTime}</p>
                                        <p className="card-title"><span className='fw-bold text-primary'>Seller Name:</span> {product.sellerName}</p>
                                        <p className="card-title"><span className='fw-bold text-primary'>Product Condition:</span> {product.conditionType}</p>
                                        <p className="card-text"><span className='fw-bold text-primary'>Description:</span> {product.description}</p>
                                        <button onClick={handleShow} className="btn btn-primary">Book Now</button>
                                    </div>
                                </div>
                            </Col>
                        )
                    }
                </Row>
                
            </Container>
            
        </div>
    );
};

export default ButtonPhone;