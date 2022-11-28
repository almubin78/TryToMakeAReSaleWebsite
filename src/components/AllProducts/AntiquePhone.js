import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

const AntiquePhone = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category/AntiquePhone')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AntiquePhone;