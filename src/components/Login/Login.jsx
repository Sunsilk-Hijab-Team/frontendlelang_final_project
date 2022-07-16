import React from 'react';
import styleLogin from './login.module.css';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {

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

                        <Form style={{ width: '80%' }} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='d-flex text-start'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className={styleLogin.roundedForm} />
                                <Form.Text className="text-muted d-flex justify-content-start">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='d-flex text-start '>Password</Form.Label>

                                <div className={styleLogin.iconSpan} onClick={handelToggle}>
                                    {passwordIcon}
                                </div>

                                <Form.Control placeholder="Password"
                                    className={styleLogin.roundedForm} type={passwordType} />
                            </Form.Group>

                            <Button className={styleLogin.roundedButton}>
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