import Navbar from '../../../components/NavbarAfterLogin/NavbarDashboard';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Previous from './fi_arrow-left.svg';
import './styleAddProduct.css';

import Image_1 from './Group_1.png';
import Image_2 from './Group_86.png';
import styleRegister from '../../../components/Register/register.module.css';
import { Form, Button } from 'react-bootstrap';
import PreviousButton from '../../../components/PreviousButton/PreviousButton';

function AddProduct() {
    return (
        <div>
            <Navbar title="Add Product" />
            <Container>
                <PreviousButton />
            </Container>
            <Container className='form'>
                <Row>
                    <Col sm={12}>
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
                        </Form>
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
                <Row>
                    <Col>
                        <div className='button-add-product'>
                            <Button className='styleButtonPreview' type="submit">
                                Preview
                            </Button>
                            <span></span>
                            <Button className='styleButton' variant="primary" type="submit">
                                Post
                            </Button>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddProduct