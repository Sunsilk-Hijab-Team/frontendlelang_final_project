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
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
const { REACT_APP_API_URL } = process.env;

function Profile() {

    const token = localStorage.getItem('token');
    const url = `${REACT_APP_API_URL}`;
    const [item, setItem] = useState('');
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    const getProfile = async () => {
        setLoading(true)
        try {
            const profile = await axios.get(`${url}/api/v1/auth/user/whoami`, {
                headers: {
                            "Authorization" : `Bearer ${token}`
                        }
            })
            setItem(profile.data.user)
            setLoading(false)
        } catch (error) {
            setLoading(true);
            console.log(error.response.data.message)
        }
    }

    const [image_url, setImageUrl] = useState('');
    const [full_name, setFullName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');


    const handleUpdate = async (e) => {
        e.preventDefault();

        let formData = new FormData();

        // formData.append('image_url', image_url);
        formData.append('full_name', full_name);
        formData.append('city', city);
        formData.append('address', address);
        formData.append('phone', phone);

        try {
            console.log(formData, 'formdata');
            await axios.put(`${url}/api/v1/auth/update`, formData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(res => {
                console.log(res, 'res')

                if(res.data.userUpdate[0] === 1){
                    toast.success('Update profile has been success', {
                        theme: 'colored',
                        position: toast.POSITION.TOP_RIGHT
                    })
                } else{
                    toast.error('Update profile has been failed', {
                        theme: 'colored',
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
            })
            .catch( error => {
                console.log(error.response.data.message, 'catch')
                toast.error(error.response.data.message, {
                    theme: 'colored',
                    position: toast.POSITION.TOP_RIGHT
                })
            })

        } catch (error) {

        }
    }

    useEffect(() => {
        token ? getProfile() : nav('/login')
        getProfile();

    }, [token, nav])

    return (
        <div>

        <Navbar title="Profile" />

            <Container  className='previous'>
                <PreviousButton className="previousButton" />
            </Container>
        {

            loading ?

            <Row className='d-flex justify-content-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Row>

            :

            <Container>
                <Row>
                    <Col className='dashboardMenu' sm={3}>
                        <DashboardMenu />
                    </Col>
                    <Col sm={7} className="content">
                        <Form onSubmit={handleUpdate} className='form-profile d-flex flex-column align-self-center'>
                            <Button className='profile-input align-self-center' >
                                <img className='d-flex' src='/assets/photo_profile.svg' alt="" />
                            </Button>
                             <Form.Control id="image" className={styleRegister.rounded} type="file" hidden onChange={(e) => setImageUrl(e.target.value)} />
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='add-product-label'>
                                    Name*
                                </Form.Label>
                                <Form.Control className={styleRegister.rounded} type="text" defaultValue={item.full_name} placeholder="Your Name" required onChange={(e) => setFullName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='add-product-label'>City*</Form.Label>
                                <Form.Control className={styleRegister.rounded} type="text" defaultValue={item.city} placeholder="City" required onChange={ (e) => setCity(e.target.value) } />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='add-product-label'>Address*</Form.Label>
                                <Form.Control className={styleRegister.rounded} type="text" defaultValue={item.address} placeholder="ex: Jalan Ikan Hiu 33" required onChange={ (e) => setAddress(e.target.value) } />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='add-product-label'>No. Handphone*</Form.Label>
                                <Form.Control className={styleRegister.rounded} type="number" defaultValue={item.phone} placeholder="ex: +62 1234 5678" required onChange={ (e) => setPhone(e.target.value) } />
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

        }
        </div >
    );
}

export default Profile;