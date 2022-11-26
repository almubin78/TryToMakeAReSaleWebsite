import React from 'react';
import old from '../../phoneImg/c1/1.jpg'
import smart from '../../phoneImg/c1/smart.webp'
import button from '../../phoneImg/c1/button.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ProductsCategories = () => {
    const phoneCatagorys = [
        {name:"Old Phone",img:old},
        {name:"Smart Phone",img:smart},
        {name:"Button Phone",img:button},

    ]
    return (
        <div className='w-75 mx-auto mb-5'>
            <h1>Please Select A Category From below</h1>
            <div>
                <Container>
                    <Row>
                        {
                            phoneCatagorys.map(sp=>
                            <Col>
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
                                <Button variant="primary"><Link to='/category' className='text-white'>View All</Link></Button>
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