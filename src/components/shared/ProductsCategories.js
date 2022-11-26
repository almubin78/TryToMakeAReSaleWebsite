import React from 'react';
import old from '../../phoneImg/c1/1.jpg'
import smart from '../../phoneImg/c1/smart.webp'
import button from '../../phoneImg/c1/button.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap';
const ProductsCategories = () => {
    const phoneCatagorys = [
        {name:"Old Phone",img:old},
        {name:"Smart Phone",img:smart},
        {name:"Button Phone",img:button},

    ]
    return (
        <div>
            <h1>Please Select A Category From below</h1>
            <div>
                <Container>
                    <Row>
                        {
                            phoneCatagorys.map(sp=>
                            <Col>
                               <div class="card"
                                style={{ width: '18rem', height: '20rem' }}>
                                <img
                                    style={{ width: '18rem', height: '20rem', overflow: 'hidden' }}
                                    src={sp.img}
                                    class="card-img-top img-fluid"
                                    alt="..." />
                                <div class="card-body">
                                    <h2 class="card-title">{sp.name}</h2>
                                </div>
                                <Button variant="primary">View All</Button>
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