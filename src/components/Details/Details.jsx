import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Style from './styleDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';
// import Image from './jam_1.png';
import NoImage from '../../images/no_image.png'
import PreviousButton from '../PreviousButton/PreviousButton';
import './styleDetails.module.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PopUp from './popup/PopUp';
import Login from '../ButtonLogin/ButtonLogin';
import Navbar from '../NavbarBeforeLogin/NavbarDashboard';

const { REACT_APP_API_URL } = process.env

function SellerHome() {

    const url = `${REACT_APP_API_URL}/api/v1/buyer/product/`;
    let { productId } = useParams();
    const [item, setItem] = useState([]);
    const [category, setCategory] = useState([]);
    const [seller, setSeller] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const Detail = async () => {
        setLoading(true)
        try {
            await axios.get(url + productId)
                .then(res => {
                    setItem(res.data.data.product);
                    setCategory(res.data.data.product.categories);
                    setSeller(res.data.data.product.users)
                    setImages(res.data.data.product.images);
                    // console.log(images, 'null')
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
        <div className={Style.div}>
            <Container className={Style.container}>
                <PreviousButton />
            </Container>
            <Container className={Style.container}>
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
                    <Col>
                        <Carousel className={Style.carousel}>
                            {
                                images.length === 0 ?

                                    <Carousel.Item className={Style.carousel}>
                                        <img className={Style.carouselImage} src={NoImage} alt="productImage" />
                                    </Carousel.Item>

                                    :

                                    images.map((image, index) => {
                                        return (
                                            <Carousel.Item key={index} className={Style.carousel}>
                                                <img className={Style.carouselImage} src={image.image_url} alt="productImage" />
                                            </Carousel.Item>
                                        )
                                    })
                            }
                        </Carousel>
                    </Col>

                    <Col className={Style.desc}>
                        <div className={Style.sellerProfile}>
                            {
                                seller.image_url === null ?
                                <img className={Style.sellerPhoto} src={NoImage} alt="" />
                                :
                                <img className={Style.sellerPhoto} src={seller.image_url} alt="" />
                            }
                            <div className='ms-3'>
                                <h2 className={Style.sellerName}>{seller.full_name}</h2>
                                <h1 className={Style.city}>{seller.city}</h1>
                            </div>
                        </div>

                        <h4 className={Style.h4}>{category === null ? 'Tidak Berkategori' : category.name}</h4>
                        <h1 className={Style.h1}>{item.name}</h1>
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