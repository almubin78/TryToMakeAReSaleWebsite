import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import service1 from '../../phoneImg/c1/service1.jpg'
import service2 from '../../phoneImg/c1/service2.jpg'
const Servicing = () => {
    return (
        <Container className='w-100 mx-auto mt-5 mb-3'>
            <Row className=''>
                <h1 className='text-center'>Servicing Warranty</h1>
                <hr className='text-primary fw-bold mb-3'/>
                <Col className='container p-3 mb-5 bg-body rounded'> 
                    <div className=''>
                        <div class="card" style={{ width: '25rem' }}>
                            <img src={service1} class="card-img-top" style={{ height: '18rem', overflow: 'hidden' }} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Get Free Serveices</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='container p-3 mb-5 bg-body rounded'>
                    <div>
                        <div class="card" style={{ width: '25rem' }}>
                            <img src={service2} class="card-img-top img-fluid" style={{height: '18rem', overflow: 'hidden' }} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Get Free Serveices</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='container p-3 mb-5 bg-body rounded'>
                    <div>
                        <div class="card" style={{ width: '25rem' }}>
                            <img src={service2} class="card-img-top" style={{ height: '18rem', overflow: 'hidden' }} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Get Free Serveices</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Servicing;