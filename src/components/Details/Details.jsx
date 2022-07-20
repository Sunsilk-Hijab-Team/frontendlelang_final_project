import React from 'react';
import Previous from './fi_arrow-left.svg';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Style from './styleDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from './jam_1.png';
import PreviousButton from '../PreviousButton/PreviousButton';
import './styleDetails.module.css';
import BidModal from '../BidModal/BidModal';
import PopUp from './popup/PopUp';

function SellerHome() {
    return (
        <div>
            <Container>
                <PreviousButton />
            </Container>
            <Container>
                <Row>
                    <Col className='ms-2'>
                        <Carousel className={Style.carousel}>
                            <Carousel.Item>
                                <img
                                    className={Style.carouselImage}
                                    src={Image}
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className={Style.carouselImage}
                                    src={Image}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col className={Style.desc}>
                        <div className={Style.sellerProfile}>
                            <img className={Style.sellerPhoto} src="/assets/profile_buyer.jpg" alt="" />
                            <div className='ms-3'>
                                <h2 className={Style.sellerName}>Taylor Swift</h2>
                                <h1 className={Style.city}>Gresik</h1>
                            </div>
                        </div>

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

                        <PopUp />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SellerHome