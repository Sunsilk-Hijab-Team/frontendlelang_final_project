import Navbar from '../../../components/NavbarAfterLogin/NavbarDashboard'
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
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
                            <Card className="mt-4 mb-2">
                                <Carousel>
                                    <Carousel.Item className={Style.carouselItem}>
                                        <img className="img-fluid" src={NoImage} alt="productImage" />
                                    </Carousel.Item>
                                </Carousel>
                            </Card>
                        </Col>
                        
                        <Col>
                            <p className="fw-bold">Deskripsi</p>
                            <p className={Style.p}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, quae?
                            </p>

                        </Col>
                    </Col>
                    <Col md={3}>
                        <Card className="p-3 mt-4">
                            <h4 className={Style.h4}>Kategori</h4>
                            <h1 className={Style.h1}>Nama Produk</h1>
                            <div className='d-flex flex-row align-items-center'>
                                <h3 className={Style.h3}>Price</h3>
                                <h2 className={Style.h2}>Harga oiiiiii</h2>
                            </div>
                            <Button className={["my-2",Style.buttonTerbitkan]}>
                                Terbitkan
                            </Button>
                            {/* button outline danger */}
                            <Button className={Style.buttonEdit}>
                                Edit
                            </Button>
                        </Card>
                        <Card className="p-3 mt-2">
                            <Col>
                                <img className="img-fluid" src={NoImage} alt="productImage" />
                            </Col>
                            <Col>
                                <h4 className={Style.h4}>Nama Penjual</h4>
                                <p className={Style.p}>Alamat Penjual</p>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PreviewProduct