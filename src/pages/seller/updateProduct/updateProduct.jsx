import Navbar from '../../../components/NavbarAfterLogin/NavbarDashboard';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './styleAddProduct.css';
import Image_2 from './Group_86.png';
import styleRegister from '../../../components/Register/register.module.css';
import { Form, Button } from 'react-bootstrap';
import PreviousButton from '../../../components/PreviousButton/PreviousButton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import _ from 'lodash';
const { REACT_APP_API_URL } = process.env;


function UpdateProduct() {

    const url = REACT_APP_API_URL;
    const token = localStorage.getItem('token');
    const [items, setItems] = useState([]);
    const [data, setData] = useState([]);
    const [dataImg, setDataImg] = useState([]);
    const [loading, setLoading] = useState(false)
    const [btnLoading, setBtnLoading] = useState(false)
    const [dload, setDLoad] = useState(false)

    let nav = useNavigate();

    const { productId } = useParams();

    const getCategory = async () => {
        setLoading(true)
        try {
            await axios.get(`${url}/api/v1/seller/category/all`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    setItems(res.data.categories);
                    setLoading(false)
                })
            // .catch(err => {
            //     console.log(err);
            // })

        } catch (error) {
            setLoading(false)
            // console.log(error);
        }
    }

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState([]);
    // const reader = new FileReader();

    const handleGetProduct = async () => {
        setLoading(true)
        try {
            await axios.get(`${url}/api/v1/seller/product/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {

                    // console.log(res.data.product, 'data edit')
                    setData(res.data.product)
                    setName(res.data.product.name)
                    setDataImg(res.data.product.images)
                    setName(res.data.product.name)
                    setDescription(res.data.product.description)
                    setCategoryId(res.data.product.categories.id)
                    setPrice(res.data.product.base_price)

                    setLoading(false)
                })
        } catch (error) {
            setLoading(false)
        }

    }



    const handleUpdate = async (e) => {
        setBtnLoading(true)
        e.preventDefault();

        const status = 'available';
        // const published = true;
        let formData = new FormData();

        formData.append('name', name);
        formData.append('description', description);
        formData.append('base_price', price);
        formData.append('categories_id', categoryId);

        // formData.append('status', status);
        // formData.append('published', published);

        _.forEach(imageUrl, file => {
            formData.append('image_url', file);
        })


        try {
            console.log(name, description, categoryId, price, status, imageUrl);
            setBtnLoading(true)
            await axios.put(`${url}/api/v1/seller/product/update/${productId}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    setBtnLoading(false)
                    if (res.status === 200) {
                        handleGetProduct()
                        nav('/seller/product/update/' + productId);
                        toast.success('Product has been updated', {
                            theme: 'colored',
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 3000
                        });
                    }
                })
                .catch((error => {
                    setBtnLoading(false)
                    // console.log(error.response.data.message, 'catch');
                    // console.log(error,'---');
                }))
        } catch (error) {
            setBtnLoading(false)
            // console.log(error.response.data.message, 'catch2');
        }

    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        // console.log(id, 'id-gb')
        setDLoad(true)
        try {
            await axios.delete(`${url}/api/v1/seller/product/image/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    setDLoad(false)
                    // console.log(res.status, 'res');
                    // console.log(res, 'response-delete-image')
                    if (res.status === 200) {
                        handleGetProduct()
                        nav('/seller/product/update/' + productId);
                        toast.success('Image has been deleted', {
                            theme: 'colored',
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 3000
                        });
                    }
                })
                .catch(err => {
                    // console.log(err, 'err-delete-image')
                })
        } catch (error) {
            setDLoad(false)
            // console.log(error);
        }
    }

    useEffect(() => {

        token ? <></> : nav('/login')

        getCategory();
        handleGetProduct();
    }, [])

    return (
        <div>
            <Navbar title='Update Product' />
            <Container>
                <PreviousButton />
            </Container>
            {
                loading ?

                    <Row className='d-flex justify-content-center'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Row>

                    :

                    <Container className='form'>
                        <Form className={styleRegister.formStyle}>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='add-product-label'>
                                            Product Name
                                        </Form.Label>
                                        <Form.Control className={styleRegister.rounded} type="text" defaultValue={data.name === null ? <></> : data.name} placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='add-product-label'>Price</Form.Label>
                                        <Form.Control className={styleRegister.rounded} type="number" defaultValue={data.base_price === null ? <></> : data.base_price} placeholder="Rp 0,00" onChange={(e) => setPrice(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='add-product-label'>Category</Form.Label>
                                        <Form.Select className={styleRegister.rounded} onChange={(e) => setCategoryId(e.target.value)}>
                                            <option disabled> -- Choose Category -- </option>
                                            {

                                                items.length > 0 ?

                                                    items.map((item, index) => {
                                                        return (

                                                            categoryId === item.id ?

                                                                <option selected key={index} value={item.id}>{item.name}</option>
                                                                :
                                                                <option key={index} value={item.id}>{item.name}</option>
                                                        )
                                                    })

                                                    :

                                                    <option selected disabled> -- Category not found -- </option>

                                            }
                                        </Form.Select>
                                        {/* <Form.Control className={styleRegister.rounded} type="email" placeholder="Choose Category"/> */}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='add-product-label'>Product Description</Form.Label>
                                        <Form.Control className={styleRegister.rounded} type="text" defaultValue={data.description === null ? <></> : data.description} placeholder="ex: Lorem ipsum dolor sit amet" onChange={(e) => setDescription(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='add-product-label' for="product_image">
                                            Gambar
                                            <img className='image_2 img-update' src={Image_2} alt="" />
                                        </Form.Label>
                                        <Form.Control id="product_image" hidden className={styleRegister.rounded} type="file" multiple placeholder="ex: Lorem ipsum dolor sit amet" onChange={(e) => setImageUrl(e.target.files)} />
                                    </Form.Group>


                                </Col>

                                <Col sm={12} className='photo d-flex flex-column align-content-center'>

                                    <div className='d-flex additional flex-column-reverse flex-md-row'>

                                        {
                                            data.image_url === null ?

                                                <img className='image_2 img-update' src={Image_2} alt="" />

                                                :

                                                dataImg.map((image, index) => {

                                                    return (
                                                        <div>
                                                            <p className='add-photo-label'>Product Photo</p>
                                                            <img key={index} className='img_update image_2' src={image.image_url} alt="" />

                                                            <Button onClick={e => handleDelete(e, image.id)} variant="danger" className="btn-sm mt-2" type="button">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                                </svg>
                                                            </Button>

                                                        </div>
                                                    )

                                                })

                                        }

                                    </div>
                                </Col>
                            </Row>
                        </Form>
                        <Row>
                            <Col>
                                <div className='button-add-product mb-4'>
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

                                            <Button onClick={handleUpdate} className='styleButton' variant="primary" type="submit">
                                                Update
                                            </Button>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>

            }
        </div>
    )
}

export default UpdateProduct
