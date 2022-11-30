import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../phoneImg/c1/1.jpg';
import img2 from '../../phoneImg/c1/2.jpg';
import img3 from '../../phoneImg/c1/3.webp';
import img4 from '../../phoneImg/c1/4.jpg';
const Banner = () => {
    return (
        <Carousel className='container my-5 d-none d-md-block '>
            <Carousel.Item>
                <img
                    className="d-block w-75 mx-auto"
                    style={{ height: '600px' }}
                    src={img4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-primary fs-1 fw-bold'>Oldest Phone Collection</h3>
                    <p className='text-success fs-2 fw-bold'>decided to keep old cell phone models that he came across in his line of work and start his own collection.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-75 mx-auto"
                    style={{ height: '600px' }}
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-primary fs-1 fw-bold'>Oldest Phone Collection</h3>
                    <p className='text-success fs-2 fw-bold'>decided to keep old cell phone models that he came across in his line of work and start his own collection.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-75 mx-auto"
                    style={{ height: '600px' }}
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-primary fs-1 fw-bold'>Oldest Phone Collection</h3>
                    <p className='text-success fs-2 fw-bold'>decided to keep old cell phone models that he came across in his line of work and start his own collection.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
};

export default Banner;