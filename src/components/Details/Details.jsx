import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Style from './styleDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';
import NoImage from '../../images/no_image.png'
import PreviousButton from '../PreviousButton/PreviousButton';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
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
                <Row className={Style.rowStyle}>
                    <Col className={Style.col}>
                        <h4 className={Style.h4}>{category.name}</h4>
                        <h1 className={Style.h1}>{item.name}</h1>
                        <div className='d-flex flex-row align-items-center'>
                            <h3 className={Style.h3}>Price</h3>
                            <h2 className={Style.h2}>Rp {item.base_price}</h2>
                        </div>
                        <p className={Style.p}>{item.description}</p>

                        <Button className={Style.roundedButton}>
                            Saya Tertarik dan Ingin Nego
                        </Button>
                    </Col>

                    <Col className={Style.col}>
                        <Carousel className={Style.carousel}>
                                {
                                    images.length === 0 ?

                                    <Carousel.Item className={Style.carousel}>
                                        <img className={Style.carousel} src={NoImage} alt="productImage" />
                                    </Carousel.Item>

                                    :

                                    images.map((image, index) => {
                                        return (
                                            <Carousel.Item key={index} className={Style.carousel}>
                                                <img className={Style.carousel} src={image.image_url} alt="productImage" />
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