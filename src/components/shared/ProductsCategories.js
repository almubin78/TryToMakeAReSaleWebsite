import React from 'react';
import old from '../../phoneImg/c1/1.jpg'
import smart from '../../phoneImg/c1/smart.webp'
import button from '../../phoneImg/c1/button.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const ProductsCategories = () => {
    const navigate = useNavigate()
    const phoneCategories = [
        { id: 1, name: "Old Phone", img: old,category:'OldPhone' },
        { id: 2, name: "Smart Phone", img: smart,category:'SmartPhone' },
        { id: 3, name: "Button Phone", img: button,category:'ButtonPhone' },

    ]
    const handleCategory = () => {
        navigate('/category')
    }
    return (
        <div className='w-75 mx-auto mb-5'>
            <h1>Please Select A Category From below</h1>
            <div>
                <Container>
                    <Row>
                        {
                            phoneCategories.map(sp =>
                                <Col key={sp.id}>
                                    <div className="card mt-3"
                                        style={{ width: '18rem', height: '20rem' }}>
                                        <img
                                            style={{ width: '18rem', height: '20rem', overflow: 'hidden' }}
                                            src={sp.img}
                                            className="card-img-top img-fluid"
                                            alt="..." />
                                        <div className="card-body">
                                            <h2 className="card-title">{sp.name}</h2>
                                        </div>

                                        <div class="d-grid gap-2">
                                            <button onClick={handleCategory} class="btn btn-primary" type="button">View All</button>
                                        </div>
                                    </div>
                                </Col>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ProductsCategories;