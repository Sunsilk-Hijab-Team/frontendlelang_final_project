import { Card, Container, Row, Badge } from 'react-bootstrap';
import styleCard from './styleCard.module.css'
import { useEffect, useState } from 'react';
import NoImage from '../../images/no_image.png'
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Rupiah } from '../CostumFunction/Rupiah';
// import Gambar from './jamTangan.jpg'
const { REACT_APP_API_URL } = process.env;

function CardComponent() {

    const url = `${REACT_APP_API_URL}`;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    let nav = useNavigate();

    const getProducts = async () => {
        setLoading(true);
        try{
            await axios.get(`${url}/api/v1/seller/product/all`,{
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(res => {
                // console.log(res.data.product, 'prd')
                setLoading(false)
                setItems(res.data.product)
            })
        } catch (error){
            // console.log(error.message)
            setLoading(true)
        }
    }

    useEffect( () => {
        token ? getProducts() : nav('/login');
        getProducts();
    }, []);

    return (
        <Container className={styleCard.container} md>

            {
                items ?

            <Row lg={4} md={2} sm={2}>

                {
                    loading ?

                    <Spinner animation="border" role="status" size="lg">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                    : <></>
                }

                {

                    items.map((item, index) => {

                        return (

                            <div key={index} className={styleCard.cardBody}>
                                <Link to={'/seller/preview-product/'+item.id}>
                                    <Card className={styleCard.cardStyle}>
                                        <Card.Img src={ item.images.length === 0 ? NoImage : item.images[0].image_url } className={styleCard.imgThumbnail} />
                                        {
                                            item.published === true ?
                                            <Badge bg="success">Published</Badge>
                                            :
                                            <Badge bg="warning text-dark">Preview</Badge>
                                        }
                                        <Card.Body>
                                            <Card.Title> <strong>{item.name}</strong> </Card.Title>
                                            <Card.Text className={styleCard.styleCardText}>
                                                { item.categories.name === 0 ? '-' : item.categories.name }
                                            </Card.Text>
                                            <Card.Title>{ Rupiah(item.base_price)}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>

                        );

                    })

                }
            </Row>

            :

            <h5 className="fw-bold">Opps... Belum ada product yang kamu jual nih...</h5>

            }

        </Container>
    );
}

export default CardComponent;