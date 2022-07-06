import React from 'react';
import './styleProfile.css';
import Navbar from '../../../../components/NavbarDashboard/NavbarDashboard'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import DashboardMenu from '../../../../components/DashboardMenu/DashboardMenu';
import PreviousButton from '../../../../components/PreviousButton/PreviousButton';
import styleRegister from '../../../../components/Register/register.module.css';
// import cameraIcon from './assets/photo_profile.svg';


function Profile() {
    return (
        <div>
            <Navbar title="Profile" />
            <Container  className='previous'>
                <PreviousButton className="previousButton" />
            </Container>

            <Container>
                <Row>
                    <Col className='dashboardMenu' sm={3}>
                        <DashboardMenu />
                    </Col>
                    <Col sm={7} className="content">
                        <Form className='form-profile d-flex flex-column align-self-center'>
                            <Button className='profile-input align-self-center'>
                                <img className='d-flex' src='/assets/photo_profile.svg' alt="" />
                            </Button>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='add-product-label'>
                                    Name*
                                </Form.Label>
                                <Form.Control className={styleRegister.rounded} type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='add-product-label'>City*</Form.Label>
                                <Form.Control className={styleRegister.rounded} type="email" placeholder="City" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='add-product-label'>Address*</Form.Label>
                                <Form.Control className={styleRegister.rounded} type="email" placeholder="ex: Jalan Ikan Hiu 33" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='add-product-label'>No. Handphone*</Form.Label>
                                <Form.Control className={styleRegister.rounded} type="email" placeholder="ex: +62 1234 5678" />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='add-product-label'>Category</Form.Label>
                                    <span className="icons-span" onClick={handelToggle}>
                                        {passwordIcon}
                                    </span>
                                    <Form.Control className={styleRegister.rounded} placeholder="min 6 characters" type={passwordType} />
                                </Form.Group> */}

                            <div>
                                <Button className='button-save' variant="primary" type="submit">
                                    Save
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col sm={2}>

                    </Col>
                    {/* <Col>3 of 3</Col> */}
                </Row>
            </Container>
        </div >
    );
}

export default Profile;