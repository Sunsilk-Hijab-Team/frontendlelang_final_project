import { Card, Container, Row  } from 'react-bootstrap';
import styleCard from './styleCard.module.css'
import NoImage from '../../images/no_image.png'
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
const { REACT_APP_API_URL } = process.env

function CardComponent() {

    const url = `${REACT_APP_API_URL}/api/v1/product/all`;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

   const getProducts = async () => {

        setLoading(true)

        try {
            //  console.log(items, 'items--sebelum');
            await axios.get(url)
            .then(res => {
                setLoading(false)
                setItems(res.data.data.product)
            }).then( () => {
                // console.log(items, 'items-sesudah');

            })
            .catch(error => {
                // console.log(error.response.data.message)
            })
            // await setItems(products.data.data.product);
            // setLoading(false)


        } catch (error) {

            //  setLoading(true);

            console.log(error.message);
        }

    }


    useEffect(() => {
        getProducts();
    }, [setItems, setLoading]);



    return (
        <Container className={styleCard.container} md>

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
            {

                items.map((item, index) => {
                    // console.log(item, '--map');
                   return (
                        <div key={index} className={styleCard.cardBody}>
                            <Link to={'/detail/'+item.id}>
                                <Card className={styleCard.cardStyle}>

                                    <Card.Img variant="top" src={ item.images.length === 0  ? NoImage : item.images[0].image_url } className={styleCard.imgThumbnail} />

                                    <Card.Body>
                                        <Card.Title> <strong>{item.name}</strong> </Card.Title>
                                        <Card.Text className={styleCard.styleCardText} >
                                            { item.categories.name === 0 ? '-' : item.categories.name }
                                        </Card.Text>
                                        <Card.Title>Rp {item.base_price}</Card.Title>
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