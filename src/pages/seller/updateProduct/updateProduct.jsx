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
        try{
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

        } catch(error){
             setLoading(false)
            console.log(error);
        }
    }

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    // const reader = new FileReader();

    const handleGetProduct = async () => {
        setLoading(true)
        try{
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
        }catch(error){
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
        formData.append('image_url', imageUrl);

        console.log(formData, 'form data')

        try{
            console.log(name, description, categoryId, price, status, imageUrl);
            setBtnLoading(true)
            await axios.put(`${url}/api/v1/seller/product/update/${productId}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then( res => {
                setBtnLoading(false)
                if(res.status === 200){
                    handleGetProduct()
                    nav('/seller/product/update/'+productId);
                    toast.success('Product has been updated', {
                        theme: 'colored',
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000
                    });
                }
            })
            .catch((error => {
                setBtnLoading(false)
                console.log(error.response.data.message, 'catch');
                console.log(error,'---');
            }))
        } catch(error) {
            setBtnLoading(false)
            console.log(error.response.data.message, 'catch2');
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
                if(res.status === 200){
                    handleGetProduct()
                    nav('/seller/product/update/'+productId);
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
                                        <Form.Control className={styleRegister.rounded} type="number" defaultValue={data.base_price === null ? <></> : data.base_price } placeholder="Rp 0,00" onChange={(e) => setPrice(e.target.value)} />
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
                                        <Form.Control className={styleRegister.rounded} type="text" defaultValue={data.description === null ? <></> : data.description} placeholder="ex: Lorem ipsum dolor sit amet" onChange={(e) => setDescription(e.target.value)}  />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='add-product-label'>Gambar</Form.Label>
                                        <Form.Control className={styleRegister.rounded} type="file" multiple={true} placeholder="ex: Lorem ipsum dolor sit amet" onChange={(e) => setImageUrl(e.target.files[0])}  />
                                    </Form.Group>


                            </Col>

                            <Col sm={12} className='photo d-flex flex-column align-content-center'>
                                <p className='add-photo-label'>Product Photo</p>
                                <div className='d-flex additional'>
                                    {
                                        data.image_url === null ?

                                        <img className='image_2' src={Image_2} alt="" />

                                        :

                                        dataImg.map((image, index) => {

                                            return (
                                                <div>

                                                    <img key={index} className='image_2' src={image.image_url} alt="" />

                                                        <Button onClick={e => handleDelete(e, image.id)} className="btn btn-danger btn-sm mt-2 fw-bold" type="button">Hapus</Button>

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
                        <Col>
                        </Col>
                    </Row>
                </Container>

            }
        </div>
    )
}

export default UpdateProduct
