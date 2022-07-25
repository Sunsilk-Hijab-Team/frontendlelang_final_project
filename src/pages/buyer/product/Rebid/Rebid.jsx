import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Style from './styleRebid.module.css';
import Carousel from 'react-bootstrap/Carousel';
// import Image from './jam_1.png';
import NoImage from '../../../../images/no_image.png'
import PreviousButton from '../../../../components/PreviousButton/PreviousButton';
import './styleRebid.module.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PopUp from './popup/PopUp';
import { Rupiah } from '../../../../components/CostumFunction/Rupiah';

const { REACT_APP_API_URL } = process.env

function Rebid() {
   
    let { orderId } = useParams();
    const url = `${REACT_APP_API_URL}/api/v1/buyer/product/${orderId}`;
    const token = localStorage.getItem('token');
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([]);
    const [seller, setSeller] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const Detail = async () => {
        setLoading(true)
        try {
            await axios({
                method: 'GET',
                url,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            })
                .then(res => {
                    setOrder(res.data.data.order);
                    setProduct(res.data.data.order.products);
                    setCategory(res.data.data.order.products.categories);
                    setImages(res.data.data.order.products.images);
                    setSeller(res.data.data.order.users_seller);
                    // console.log(images, 'null')
                })
                .catch(error => {
                    console.log(error)
                })
            setLoading(false)
        } catch (error) {
            setLoading(true);
            console.log(error)
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
                            <img className={Style.sellerPhoto} src={seller.image_url===''? 'Loading...' : seller.image_url} alt="" />
                            <div className='ms-3'>
                                <h2 className={Style.sellerName}>
                                    {seller.full_name? seller.full_name : 'Loading...'}
                                </h2>
                                <h1 className={Style.city}>
                                    {seller.city? seller.city : 'Loading...'}
                                </h1>
                            </div>
                        </div>

                        <h4 className={Style.h4}>{category === null ? 'Tidak Berkategori' : category.name}</h4>
                        <h1 className={Style.h1}>{product.name}</h1>
                        <div className='d-flex flex-row align-items-center'>
                            <h2 className={Style.h2}>Price : </h2>
                            <h2 className={Style.h2}>{Rupiah(product.base_price)}</h2>
                        </div>
                        <p className={Style.p}>{product.description}</p>

                        <PopUp />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Rebid