import Navbar from '../../../components/NavbarAfterLogin/NavbarDashboard';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import Previous from './fi_arrow-left.svg';
import './styleAddProduct.css';
import Image_1 from './Group_1.png';
import Image_2 from './Group_86.png';
import styleRegister from '../../../components/Register/register.module.css';
import { Form, Button } from 'react-bootstrap';
import PreviousButton from '../../../components/PreviousButton/PreviousButton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
const { REACT_APP_API_URL } = process.env;


function AddProduct() {

    const url = REACT_APP_API_URL;
    const token = localStorage.getItem('token');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState('')
    let nav = useNavigate();


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
            console.log(error);
        }
    }

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handlePost = async (e) => {

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

        try{
            // console.log(name, description, categoryId, price, status, published, imageUrl);
            // console.log(formData,'isi');

            await axios.post(`${url}/api/v1/seller/product/add`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then( res => {
                console.log(res.status, 'response');
                if(res.status === 201){
                    nav('/seller/dashboard/product-list');
                    toast.success('Product has been added', {
                        theme: 'colored',
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 4000
                    });
                }
            })
            .catch((error => {
                // console.log(error.response.data.message, 'catch');
            }))
        } catch(error) {
            // console.log(error.response.data.message, 'catch2');
        }

    }

    useEffect(() => {

        token ? <></> : nav('/login')

        getCategory();
    }, [])

    return (
        <div>
            <Navbar title="Add Product" />
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
                                        <Form.Control className={styleRegister.rounded} type="text" placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='add-product-label'>Price</Form.Label>
                                        <Form.Control className={styleRegister.rounded} type="number" placeholder="Rp 0,00" onChange={(e) => setPrice(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='add-product-label'>Category</Form.Label>
                                        <Form.Select className={styleRegister.rounded} onChange={(e) => setCategoryId(e.target.value)}>
                                            <option selected disabled> -- Choose Category -- </option>
                                            {
                                                items.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item.id}>{item.name}</option>
                                                    )
                                                })
                                            }
                                        </Form.Select>
                                        {/* <Form.Control className={styleRegister.rounded} type="email" placeholder="Choose Category"/> */}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='add-product-label'>Product Description</Form.Label>
                                        <Form.Control className={styleRegister.rounded} type="text" placeholder="ex: Lorem ipsum dolor sit amet" onChange={(e) => setDescription(e.target.value)}  />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='add-product-label'>Gambar</Form.Label>
                                        <Form.Control className={styleRegister.rounded} type="file" placeholder="ex: Lorem ipsum dolor sit amet" onChange={(e) => setImageUrl(e.target.files[0])}  />
                                    </Form.Group>


                            </Col>

                            <Col sm={12} className='photo d-flex flex-column align-content-center'>
                                <img className='image_1' src={Image_1} alt="" />
                                <p className='add-photo-label'>Product Photo</p>
                                <div className='d-flex additional'>
                                    <img className='image_2' src={Image_2} alt="" />
                                    <img className='d-flex' src={Image_2} alt="" />
                                </div>
                                <p className='add-photo-label-more'>Add More</p>
                            </Col>
                        </Row>
                    </Form>
                    <Row>
                        <Col>
                            <div className='button-add-product mb-4'>
                                <Button className='styleButtonPreview' type="submit">
                                    Preview
                                </Button>
                                <span></span>
                                <Button onClick={handlePost} className='styleButton' variant="primary" type="submit">
                                    Post
                                </Button>
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

export default AddProduct