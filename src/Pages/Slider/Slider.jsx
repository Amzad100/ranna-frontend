import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Slider = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        style={{ height: '700px' }}
                        className="d-block w-100"
                        src="https://i.ibb.co/LtP73sN/flatlay-iron-skillet-with-meat-and-other-food.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '700px' }}
                        className="d-block w-100"
                        src="https://i.ibb.co/pLbMMpH/images.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '700px' }}
                        className="d-block w-100"
                        src="https://i.ibb.co/cNtZz66/istockphoto-1316145932-170667a.jpg"
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
        </>
    );
};

export default Slider;