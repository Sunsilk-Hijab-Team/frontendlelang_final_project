import Navbar from '../../../components/NavbarAfterLogin/NavbarDashboard'
import { Col, Container, Row, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import NoImage from '../../../images/no_image.png';
import Style from './stylePreviews.module.css';

import React from 'react';
// import './styleProductDetail.css';
import Details from '../../../components/Details/Details';

function PreviewProduct() {
    return (
        <div>
            <Navbar />

            <Container>
                <Row>
                    <Col md={9}>
                        <Col>
                            <Carousel className={Style.carousel}>
                                <Carousel.Item className={Style.carousel}>
                                    <img className={Style.carousel} src={NoImage} alt="productImage" />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col>
                            <p className={Style.p}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, quae?
                            </p>

                        </Col>
                    </Col>
                    <Col md={3}>
                        <h4 className={Style.h4}>Kategori</h4>
                        <h1 className={Style.h1}>Nama Produk</h1>
                        <div className='d-flex flex-row align-items-center'>
                            <h3 className={Style.h3}>Price</h3>
                            <h2 className={Style.h2}>Harga</h2>
                        </div>
                        {/* <Button className={Style.roundedButton}>
                            Saya Tertarik dan Ingin Nego
                        </Button> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PreviewProduct