import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import service1 from '../../phoneImg/c1/service1.jpg'
import service2 from '../../phoneImg/c1/service2.jpg'
import service3 from '../../phoneImg/c1/service3.jpeg'
const Servicing = () => {
    const servicings = [
        { id: 1, name: 'GSM Services', details: 'Data services or Bearer Services are used through a GSM phone. to receive and send data is the essential building block leading to widespread mobile Internet access and mobile data transfer Internet access and mobile data transfer', img: service1 },
        { id: 2, name: 'Hardware failure', details: 'Your phone gets faulty or temporarily damaged when used for the long term. These probably result from a hardware failure, screen damage, or when submerged with water. There are several benefits of mobile phone', img: service2 },
        { id: 2, name: 'Android screen', details: 'Such services can range anywhere from $70 to $300 or more, but will typically not void your warranty or will provide insurance or warranties of their own.How much does it cost to fix an unresponsive Android screen Costs.', img: service3 },
    ]
    return (
        <Container className='w-100 mx-auto mt-5 mb-3'>
            <Row className=''>
                <h1 className='text-center'>Servicing Warranty</h1>
                <hr className='text-primary fw-bold mb-3' />
                <h4>If Your Phone get crash withing 3 Month . You can services Your Phone Out of Coast</h4>
                {
                    servicings.map(s =>
                        <Col className='container p-3 mb-5 bg-body rounded'>
                            <div className=''>
                                <div class="card" style={{ width: '25rem' }}>
                                    <img src={s.img} class="card-img-top" style={{ height: '18rem', overflow: 'hidden' }} alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{s.name}</h5>
                                        <p class="card-text">{s.details}</p>
                                        <a href="#" class="btn btn-primary">Get Free Serveices</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Servicing;