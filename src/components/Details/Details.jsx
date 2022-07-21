import React from 'react';
import Previous from './fi_arrow-left.svg';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Style from './styleDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';
import NoImage from '../../images/no_image.png';
import PreviousButton from '../PreviousButton/PreviousButton';
import './styleDetails.module.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PopUp from './popup/PopUp';
const { REACT_APP_API_URL } = process.env

function SellerHome() {

    const url = `${REACT_APP_API_URL}/api/v1/buyer/product/`;

    let { productId } = useParams();

    const [item, setItem] = useState([]);
    const [category, setCategory]  = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const Detail = async () => {
        setLoading(true)
        try {
            await axios.get(url+productId)
            .then(res => {
                setItem(res.data.data.product);
                setCategory(res.data.data.product.categories);
                setImages(res.data.data.product.images);
                console.log(images, 'null')
            })
            setLoading(false)
        } catch (error) {
            setLoading(true);
        }
    }

    useEffect(() => {
        Detail();
    }, [])

    return (
        <div>
            <Container>
                <PreviousButton />
            </Container>
            <Container>
                {
                    loading ?
                        <Row className='d-flex justify-content-center'>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </Row>
                    : <></>
                }
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
                            <h2 className={Style.h2}>Rp {item.base_price}</h2>
                        </div>
                        <p className={Style.p}>{item.description}</p>

                        <PopUp />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SellerHome