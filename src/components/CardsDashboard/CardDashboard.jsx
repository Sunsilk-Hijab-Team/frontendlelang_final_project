import { Card, Container, Row, Badge, Button } from 'react-bootstrap';
import styleCard from './styleCard.module.css'
import { useEffect, useState } from 'react';
import NoImage from '../../images/no_image.png'
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Rupiah } from '../CostumFunction/Rupiah';
// import Gambar from './jamTangan.jpg'
const { REACT_APP_API_URL } = process.env;

function CardComponent() {

    const url = `${REACT_APP_API_URL}`;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [load, setLoad] = useState(false);
    const token = localStorage.getItem('token');
    let nav = useNavigate();

    const getProducts = async () => {
        setLoading(true);
        try{
            // console.log("url------------",url);
            await axios.get(`${url}/api/v1/seller/product/all`,{
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(res => {
                // console.log(res.data.product, 'prd')
                setLoading(false)
                setItems(res.data.product)
                // console.log('res data product#####', res.data.product);
            })
        } catch (error){
            // console.log(error.message)
            setLoading(true)
        }
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            await axios.delete(`${url}/api/v1/seller/product/delete/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(res => {
                if(res.data.status === 'success'){
                    getProducts();
                    nav('/seller/dashboard/product-list')
                    toast.success('Product berhasil di hapus', {
                        theme: 'colored',
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
            })
            .catch(err => {
                console.log(err, 'error')
            })
        } catch (error) {
            console.log(error, 'error')
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
            <Row lg={4} md={2} sm={2} xs={4}>

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
                                            <Button onClick={ e => handleDelete(e, item.id) } variant="danger" className="btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                                </svg>
                                            </Button>
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