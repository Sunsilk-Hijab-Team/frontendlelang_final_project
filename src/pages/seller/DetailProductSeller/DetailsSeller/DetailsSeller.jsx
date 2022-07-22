import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Style from './styleSellerDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';
import NoImage from '../../../../images/no_image.png';
import PreviousButton from '../../../../components/PreviousButton/PreviousButton';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_API_URL } = process.env

function SellerHome() {

    const url = `${REACT_APP_API_URL}/api/v1/buyer/product/`;
    let { productId } = useParams();
    const [item, setItem] = useState([]);
    const [category, setCategory] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    let nav = useNavigate();

    const Detail = async () => {
        setLoading(true)
        try {
            await axios.get(url + productId)
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

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handlePost = async (e) => {
        setBtnLoading(true)
        e.preventDefault();

        const status = 'available';
        const published = true;
        let formData = new FormData();

        formData.append('name', name);
        formData.append('description', description);
        formData.append('base_price', price);
        formData.append('categories_id', categoryId);
        formData.append('status', status);
        formData.append('published', published);
        formData.append('image_url', imageUrl);

        try {
            // console.log(name, description, categoryId, price, status, published, imageUrl);
            // console.log(formData,'isi');
            setBtnLoading(true)
            await axios.post(`${url}/api/v1/seller/product/add`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    setBtnLoading(false)
                    // console.log(res.status, 'response');
                    if (res.status === 201) {
                        nav('/seller/dashboard/product-list');
                        toast.success('Product has been added', {
                            theme: 'colored',
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 4000
                        });
                    }
                })
                .catch((error => {
                    setBtnLoading(true)
                    // console.log(error.response.data.message, 'catch');
                }))
        } catch (error) {
            setBtnLoading(true)
            // console.log(error.response.data.message, 'catch2');
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
                            <img className={Style.sellerPhoto} src="/assets/profile_buyer.jpg" alt="" />
                            <div className='ms-3'>
                                <h2 className={Style.sellerName}>Taylor Swift</h2>
                                <h1 className={Style.city}>Gresik</h1>
                            </div>
                        </div>

                        <h4 className={Style.h4}>{category === null ? 'Tidak Berkategori' : category.name}</h4>
                        <h1 className={Style.h1}>{item.name}</h1>
                        <div className='d-flex flex-row align-items-center'>
                            <h3 className={Style.h3}>Price</h3>
                            <h2 className={Style.h2}>Rp {item.base_price}</h2>
                        </div>
                        <p className={Style.p}>{item.description}</p>

                        <div className='button-add-product mb-4'>
                            <Button className={Style.styleButtonPreview} type="submit">
                                Edit
                            </Button>
                            <span></span>
                            {

                                btnLoading ?
                                    <Button className='styleButton' variant="primary" disabled>
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Loading...
                                    </Button>

                                    :

                                    <Button className={Style.styleButton} variant="primary" type="submit">
                                        Post
                                    </Button>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SellerHome