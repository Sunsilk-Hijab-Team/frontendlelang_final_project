import { Card, Container, Row, Col } from 'react-bootstrap';
import styleCard from './styleCard.module.css'
// import Gambar from './jamTangan.jpg'
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import axios from 'axios'
const { REACT_APP_API_URL } = process.env

function CardComponent() {

    const url = `${REACT_APP_API_URL}/api/v1/product/all`;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        setLoading(true)
        try {

            const products =  await axios.get(url)
            // console.log(products.data.data.product);
            setItems(products.data.data.product);
            setLoading(false)

        } catch (error) {

             setLoading(true);

            // console.log(error.message);
        }

    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <Container className={styleCard.container} md>
            <Row lg={6} md={4} sm={3} xs={2}>
            {
                loading ?

                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>


                : <></>
            }
            {
                items.map((item, index) => {
                    return (



                        <div key={index} className={styleCard.cardBody}>
                            <Card className={styleCard.cardStyle}>
                                <Card.Img variant="top" src={item.images[0].image_url} className={styleCard.imgThumbnail} />
                                <Card.Body>
                                    <Card.Title> <strong>{item.name}</strong> </Card.Title>
                                    <Card.Text className={styleCard.styleCardText}>
                                        { item.categories.name }
                                    </Card.Text>
                                    <Card.Title>Rp { item.base_price }</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>


                    );
                })
            }
            </Row>
        </Container>
    );
}

export default CardComponent;