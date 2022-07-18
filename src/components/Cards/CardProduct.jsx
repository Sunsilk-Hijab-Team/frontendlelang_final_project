import { Card, Container, Row, Col } from 'react-bootstrap';
import styleCard from './styleCard.module.css'
// import Gambar from './jamTangan.jpg'
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
const { REACT_APP_API_URL } = process.env

function CardComponent() {

    const url = `${REACT_APP_API_URL}/api/v1/product/all`;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const getProducts = async () => {
            // setLoading(true)
            try {
                const products =  await axios.get(url)
                // console.log(products.data.data.product)
                // .catch(error => {
                //     console.log(error.messages);
                // })
                // console.log(products.data.data.product);
                setItems(products.data.data.product);
                console.log("ini itemsss =====")
                console.log(items)
                setLoading(false);
                // console.log("disini oiii")
    
            } catch (error) {
                 setLoading(true);
                // console.log(error.message);
            }
        }

        getProducts();
    }, [setItems, setLoading]);

    return (
        <Container className={styleCard.container} md={12} lg={12}>
            {/* <ul>
                {items &&
                items.map(( item, index ) => (
                    <li key={index}>
                        <h3>{item.name}</h3>
                        <img src={item.images[0].image_url} />
                        <p>{item.categories.name}</p>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul> */}
            <Row lg={6} md={4} sm={3} xs={2}>
            {
                loading ?
                <Row className='d-flex justify-content-center'>
                    <Spinner animation="border" role="status" size="lg">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>

                : <></>
            }
            {items &&
                items.map((item, index) => {
                    return (

                        <div key={index} className={styleCard.cardBody}>
                            <Link to={'/detail/'+item.id}>
                                <Card className={styleCard.cardStyle}>
                                    <Card.Img variant="top" src={item.images[0].image_url} className={styleCard.imgThumbnail} />
                                    <Card.Body>
                                        <Card.Title> <strong>{item.name}</strong> </Card.Title>
                                        <Card.Text className={styleCard.styleCardText}>
                                            {item.categories.name }
                                        </Card.Text>
                                        <Card.Title>Rp { item.base_price }</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>


                    );
                })
            } 
            </Row>
        </Container>
    );
}

export default CardComponent;