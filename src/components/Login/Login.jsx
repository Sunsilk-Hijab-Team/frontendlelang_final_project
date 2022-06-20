import React from 'react';
import styleLogin from './login.module.css';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import Background from './Subtract.svg';

function Login() {
    return (
        <Row className={styleLogin.login} style={{ height: "100%" }}>
            <Col>
            <img src={Background} alt="img" height={620}/>
            </Col>

            <Col className='styleForm d-flex align-items-center'>
                <Container className="d-flex row justify-content-center text-center">
                    <h1 className='mb-5'><strong>Welcome</strong></h1>
                    <h3><strong>Login to</strong> <strong>S</strong>econd <strong>H</strong>and</h3>
                    <div className="d-flex row justify-content-center">
                            <Form style={{width:'80%'}} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='d-flex text-start'>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className={styleLogin.roundedForm}/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='d-flex text-start'>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                    className={styleLogin.roundedForm}/>
                                </Form.Group>
                            </Form>
                    </div>
                    
                    <Button className={styleLogin.roundedButton}>Login</Button>

                    <p className='mt-4'>don't have an account <a href="/register">Register Here</a></p>
                </Container>
            </Col>
        </Row>
    )
}

export default Login;