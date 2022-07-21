import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Style from './styleDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';
import NoImage from '../../images/no_image.png';
import PreviousButton from '../PreviousButton/PreviousButton';
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
<<<<<<< HEAD
                <Row className={Style.styleRow}>
                    <Col className={Style.col1}>
                        <h4 className={Style.h4}>{category.name}</h4>
=======
                <Row>
                    <Col>
                        <h4 className={Style.h4}>{category === null ? 'Tidak Berkategori' : category.name}</h4>
<<<<<<< HEAD
=======
>>>>>>> ae4115e0ab044ace72096f0c4a199a27cad22cc4
>>>>>>> dae711cd7be2fe723723e67586ec2367f6d8ef93
                        <h1 className={Style.h1}>{item.name}</h1>
                        <div className='d-flex flex-row align-items-center'>
                            <h2 className={Style.h2}>Price : </h2>
                            <h2 className={Style.h2}>Rp {item.base_price}</h2>
                        </div>
                        <p className={Style.p}>{item.description}</p>

                        <PopUp />
                    </Col>

                    <Col>
                        <Carousel className={Style.carousel}>
                                {
                                    images.length === 0 ?

                                    <Carousel.Item className={Style.carousel}>
                                        <img className={Style.imgcarousel} src={NoImage} alt="productImage" />
                                    </Carousel.Item>

                                    :

                                    images.map((image, index) => {
                                        return (
                                            <Carousel.Item key={index} className={Style.carousel}>
                                                <img className={Style.imgcarousel} src={image.image_url} alt="productImage" />
                                            </Carousel.Item>
                                        )
                                    })
                                }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SellerHome