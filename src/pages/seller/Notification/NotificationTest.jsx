import React from 'react';
import styleNotif from './Notification.module.css';
import Navbar from '../../../components/NavbarDashboard/NavbarDashboard'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import PreviousButton from '../../../components/PreviousButton/PreviousButton';

function NotificationTest() {
    const token=localStorage.setItem("token", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmdWxsX25hbWUiOm51bGwsImVtYWlsIjoidHJpeWFzbmlrbzJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJjaXR5IjpudWxsLCJhZGRyZXNzIjpudWxsLCJpbWFnZV91cmwiOm51bGx9LCJpYXQiOjE2NTcxOTI4ODl9.fgiyC_YYtCR_fP4v_2J5Fw0XpAN04OxYN3THWu6cqo0");
    
    return (
        <div>
            <Navbar title="Notification" />
            <Container className='previous'>
                <PreviousButton />
            </Container>

            <Container>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={7}>
                        <div className={styleNotif.content}>
                            <div className={styleNotif.product}>
                                <img className={styleNotif.productPicture} src="/assets/photo_product.jpg" alt="" />
                                <div>
                                    <h1 className={styleNotif.productTitle}>Jam Tangan Casio</h1>
                                    <h2 className={styleNotif.productPrice}>Rp 250.000</h2>
                                </div>
                            </div>
                            <div className={styleNotif.product}>
                                <img className={styleNotif.buyerProfile} src="/assets/profile_buyer.jpg" alt="" />
                                <div className='ms-3'>
                                    <h1 className={styleNotif.date}>20 Apr, 14:04</h1>
                                    <h2 className={styleNotif.buyerName}>Taylor Swift</h2>
                                    <h1 className={styleNotif.date}>Gresik</h1>
                                </div>
                                <h2 className={styleNotif.bid}>Bid Rp 200.000</h2>
                                <div className='status d-flex align-self-center'>
                                    <a className='me-4' href="">
                                        <img className='d-flex' src="/assets/fi_check.svg" alt="" />
                                    </a>
                                    <a href="">
                                        <img className='d-flex' src="/assets/fi_x.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>                        
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div >

    );
}

export default NotificationTest