import { Card, Container, Row, Col } from 'react-bootstrap';
import styleCard from './styleCard.module.css'
import Gambar from './jamTangan.jpg'

function CardComponent() {
    return (
        <Container className={styleCard.container} md>
            <Row lg={6} md={4} sm={3} xs={2}>
                {/* <Col className={styleCard.col}> */}
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img variant="top" src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* </Col> */}
                    {/* <Col className={styleCard.col}> */}
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img variant="top" src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* </Col><Col className={styleCard.col}> */}
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img variant="top" src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* </Col><Col className={styleCard.col}> */}
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img variant="top" src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* </Col><Col className={styleCard.col}> */}
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img variant="top" src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* </Col><Col className={styleCard.col}> */}
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img variant="top" src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* </Col><Col className={styleCard.col}> */}
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img variant="top" src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* </Col><Col className={styleCard.col}> */}
                    <div className={styleCard.cardBody}>
                        <Card className={styleCard.cardStyle}>
                            <Card.Img variant="top" src={Gambar} className={styleCard.imgThumbnail} />
                            <Card.Body>
                                <Card.Title> <strong>Jam Tangan</strong> </Card.Title>
                                <Card.Text className={styleCard.styleCardText}>
                                    Aksesoris
                                </Card.Text>
                                <Card.Title>Rp 200.000</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* </Col> */}
            </Row>
        </Container>
    );
}

export default CardComponent;