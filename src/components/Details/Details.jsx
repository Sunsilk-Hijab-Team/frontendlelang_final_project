import React from 'react';
import Previous from './fi_arrow-left.svg';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Style from './styleDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from './jam_1.png';
import PreviousButton from '../PreviousButton/PreviousButton';

function SellerHome() {
    return (
        <div>
            <Container>
                <PreviousButton />
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h4 className={Style.h4}>Aksesoris</h4>
                        <h1 className={Style.h1}>Jam Tangan Casio</h1>
                        <div className='d-flex flex-row align-items-center'>
                            <h3 className={Style.h3}>Price</h3>
                            <h2 className={Style.h2}>Rp 250.000</h2>
                        </div>
                        <p className={Style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.</p>

                        <Button className={Style.roundedButton}>
                            Saya Tertarik dan Ingin Nego
                        </Button>
                    </Col>

                    <Col>
                        <Carousel className={Style.carousel}>
                            <Carousel.Item className={Style.carousel}>
                                <img
                                    className={Style.carousel}
                                    src={Image}
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="carouselImage d-block w-100"
                                    src={Image}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SellerHome