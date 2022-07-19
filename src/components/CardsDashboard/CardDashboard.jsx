import { Card, Container, Row, Col } from 'react-bootstrap';
import styleCard from './styleCard.module.css'
import { useEffect, useSate } from 'react';
import axios from 'axios';
import Gambar from './jamTangan.jpg'
const { REACT_APP_API_URL } = process.env;

function CardComponent() {

    const url = `${REACT_APP_API_URL}`;

    const getProducts = async () => {

            

    }

    return (
        <Container className={styleCard.container} md>
            <Row lg={4} md={2} sm={2}>
                <Col>
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                    <Col>
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col><Col>
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col><Col>
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
            </Row>
        </Container>
    );
}

export default CardComponent;