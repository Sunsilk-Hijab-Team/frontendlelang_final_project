import React from 'react';
import styleNotif from './Notification.module.css';
import Navbar from '../../../../src/components/NavbarAfterLogin/NavbarDashboard'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import PreviousButton from '../../../components/PreviousButton/PreviousButton';
import MatchModal from '../../../components/MatchModal/MatchModal';
import {Rupiah} from '../../../components/CostumFunction/Rupiah';

function Notification() {
    // test display 10000 to rupiah format use Rupiah()
    // const test = Rupiah(10000);
    // console.log(test, 'Data Rupiah')

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
                                <div className='status d-flex align-self-center mt-3'>
                                    <MatchModal />
                                    <a href="">
                                        <img className={styleNotif.decline} src="/assets/fi_x.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <hr className="rounded"></hr>
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
                                <div className={styleNotif.buttonStatus}>
                                    <Button className={styleNotif.ButtonUpdate} type="submit">
                                        Update
                                    </Button>
                                    <span></span>
                                    <Button className={styleNotif.ButtonChat} variant="primary" type="submit">
                                        Chat
                                    </Button>
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

export default Notification