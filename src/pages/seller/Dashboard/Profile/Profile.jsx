import React from 'react';
import './styleProfile.css';
import Navbar from '../../../../components/NavbarAfterLogin/NavbarDashboard'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import DashboardMenu from '../../../../components/DashboardMenu/DashboardMenu';
import PreviousButton from '../../../../components/PreviousButton/PreviousButton';
import styleRegister from '../../../../components/Register/register.module.css';
// import cameraIcon from './assets/photo_profile.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
const { REACT_APP_API_URL } = process.env


function Profile() {

    const url = `${REACT_APP_API_URL}/api/v1/auth/user/whoami`;
    const [item, setItem] = useState('');
    const token = localStorage.getItem('token');

    const getProfile = async () => {

        try {
            const profile = await axios.get(url, {
                headers: {
                            "Authorization" : `Bearer ${token}`
                        }
            })

            setItem(profile.data.user)

        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(() => {
        getProfile();
    }, [])

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
                                <Form.Control className={styleRegister.rounded} type="text" value={item.full_name} placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='add-product-label'>City*</Form.Label>
                                <Form.Control className={styleRegister.rounded} type="text" value={item.city} placeholder="City" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='add-product-label'>Address*</Form.Label>
                                <Form.Control className={styleRegister.rounded} type="text" value={item.address} placeholder="ex: Jalan Ikan Hiu 33" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='add-product-label'>No. Handphone*</Form.Label>
                                <Form.Control className={styleRegister.rounded} type="number" value={item.phone} placeholder="ex: +62 1234 5678" />
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