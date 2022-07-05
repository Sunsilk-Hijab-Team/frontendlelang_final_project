import Navbar from '../../../components/NavbarSeller/NavbarSeller';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Previous from './fi_arrow-left.svg';
import './styleAddProduct.css';

import Image_1 from './Group_1.png';
import Image_2 from './Group_86.png';
import styleRegister from '../../../components/Register/register.module.css';
import { Form, Button } from 'react-bootstrap';

function AddProduct() {
    return (
        <div>
            <Navbar title="Add Product" />
            <div>
                <Container>
                    <img className='previous' src={Previous} alt="halo" />
                </Container>
                <Container className='form'>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Form className={styleRegister.formStyle}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='add-product-label'>
                                        Product Name
                                    </Form.Label>
                                    <Form.Control className={styleRegister.rounded} type="text" placeholder="Product Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='add-product-label'>Price</Form.Label>
                                    <Form.Control className={styleRegister.rounded} type="email" placeholder="Rp 0,00" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='add-product-label'>Category</Form.Label>
                                    <Form.Control className={styleRegister.rounded} type="email" placeholder="Choose Category" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='add-product-label'>Product Description</Form.Label>
                                    <Form.Control className={styleRegister.rounded} type="email" placeholder="ex: Jalan Ikan Hiu 33" />
                                </Form.Group>

                                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='add-product-label'>Category</Form.Label>
                                    <span className="icons-span" onClick={handelToggle}>
                                        {passwordIcon}
                                    </span>
                                    <Form.Control className={styleRegister.rounded} placeholder="min 6 characters" type={passwordType} />
                                </Form.Group> */}

                                <div className='button-add-product'>
                                    <Button className='styleButtonPreview' variant="primary" type="submit">
                                        Preview
                                    </Button>
                                    <span></span>
                                    <Button className='styleButton' variant="primary" type="submit">
                                        Post
                                    </Button>
                                </div>
                            </Form>
                        </Col>

                        <Col lg={6} sm={12} className='photo d-flex flex-column align-content-center flex-wrap'>
                            <img className='image_1' src={Image_1} alt="" />
                            <p className='add-photo-label'>Product Photo</p>
                            <div>
                                <img className='image_2' src={Image_2} alt="" />
                                <img src={Image_2} alt="" />
                            </div>
                            <p className='add-photo-label'>Add More</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AddProduct