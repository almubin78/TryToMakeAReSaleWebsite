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
                    style={{height:'600px'}}
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-75 mx-auto"
                    style={{height:'600px'}}
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-75 mx-auto"
                    style={{height:'600px'}}
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;