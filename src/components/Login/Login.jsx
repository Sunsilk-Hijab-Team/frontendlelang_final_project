import React from 'react';
import styleLogin from './login.module.css';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
const { REACT_APP_API_URL } = process.env


function Login() {

    const url = `${REACT_APP_API_URL}/api/v1/auth/login`;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        token ? setIsLoggedIn(true) : setIsLoggedIn(false)
    }, [token]);

    const handleLogin = async (e) => {
        e.preventDefault();

            axios.post(url, { email, password })
            .then(res => {
                // console.log(res.status, "dari then login");
                // console.log(res.data, "dari then");
                localStorage.setItem('token', res.data.token);

                // window.location.href = '/seller/home';

            })
            .catch(err => {
                console.log(err.message, "dari error");
            })
    }


    const [passwordType, setPasswordType] = useState("password");
    const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />)

    const handelToggle = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            setPasswordIcon(FaEye);
        } else {
            setPasswordType("password");
            setPasswordIcon(FaEyeSlash);
        }
    };

    return (
        <Row className={styleLogin.login} style={{ height: "100%" }}>
            <Col className={styleLogin.styleCol1}>
            </Col>

            <Col id="col2" className='styleForm d-flex align-items-center'>
                <Container className="d-flex row justify-content-center text-center">
                    <div className={styleLogin.loginh1}>Welcome !</div>
                    <div className={styleLogin.loginh2}>Login to Second Hand</div>

                    <div className="d-flex row justify-content-center align-items-spacebetween">

                        <Form onSubmit={handleLogin} style={{ width: '80%' }} >
                            <Form.Group className="mb-3" >
                                <Form.Label className='d-flex text-start'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' className={styleLogin.roundedForm}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <Form.Text className="text-muted d-flex justify-content-start">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className='d-flex text-start '>Password</Form.Label>

                                <div className={styleLogin.iconSpan} onClick={handelToggle}>
                                    {passwordIcon}
                                </div>

                                <Form.Control placeholder="Password" name='password'
                                    className={styleLogin.roundedForm} type={passwordType}
                                    onChange={ (e) => setPassword( e.target.value )}/>
                            </Form.Group>

                            <Button className={styleLogin.roundedButton} type='submit' >
                                Login
                            </Button>
                        </Form>

                    </div>
                    <p className='mt-4'>don't have an account <a href="/register">Register Here</a></p>
                </Container>
            </Col>
        </Row>
    )
}


export default Login;