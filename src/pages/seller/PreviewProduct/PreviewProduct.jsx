import Navbar from '../../../components/NavbarAfterLogin/NavbarDashboard'
import { Col, Container, Row, Button, Card, Spinner, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import NoImage from '../../../images/no_image.png';
import Style from './stylePreviews.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Rupiah} from '../../../components/CostumFunction/Rupiah';
const { REACT_APP_API_URL } = process.env;

// import './styleProductDetail.css';
// import Details from '../../../components/Details/Details';

function PreviewProduct() {

    const url = REACT_APP_API_URL;
    let { productId } = useParams();
    let nav = useNavigate();
    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState(false);
    const [load, setLoad] = useState(false);
    const [product, setProduct] = useState([]);
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [user, setUser] = useState([]);

    const getDetail = async () => {
        setLoading(true)
        try {
            console.log('url product list-----------', url);
            await axios.get(`${url}/api/v1/seller/product/${productId}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                setProduct(res.data.product)
                setImages(res.data.product.images)
                setCategories(res.data.product.categories)
                setUser(res.data.product.users)
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
            })
        } catch (error) {
            console.log(error.message)
            setLoading(false)
        }
    }

    const goPublish = async (e) => {
        let published = true;
        // e.prevetDefault()
        try {
            // await axios.put(`${url}/api/v1/seller/product/update/${productId}`, published,{
            //     headers: {
            //         'Authorization': `Bearer ${token}`
            //     }
            // })
            await axios({
                url: `${url}/api/v1/seller/product/update/${productId}`,
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: {
                    published
                }
            })
            .then(res => {
                console.log(res.data, 'res')
                setLoad(false)
            })
            .catch(err => {
                console.log(err.message, 'error1')
            })
            console.log(published, 'pp')
        } catch(error){
            console.log(error.message)
            setLoad(false)
        }
    }

    const goUpdate = async (e) => {
        nav(`/seller/product/update/${productId}`)
    }

    useEffect(() => {
        getDetail();
    }, [])

    return (
        <div>
            <Navbar />

            <Container>
                    {

                    loading ?

                    <Row className="d-flex justify-content-center m-5">
                        <div className={Style.loading}>
                            <Spinner animation="border" role="status" size="lg">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    </Row>

                        :
                <Row>


                    <Col md={9}>

                        <Col>
                            <Card className="mt-4 mb-2">
                                <Carousel>
                                    {
                                        images.length === 0 ?

                                            <Carousel.Item className={Style.carouselItem}>
                                                <img className="img-fluid" src={NoImage} alt="productImage" />
                                            </Carousel.Item>

                                        :

                                        images.map((image, index) => {

                                            return (

                                                <Carousel.Item key={index} className={Style.carouselItem}>
                                                    <img className="img-fluid" src={image.image_url} alt="productImage" />
                                                </Carousel.Item>

                                            )

                                        })

                                    }
                                </Carousel>
                            </Card>
                        </Col>

                        <Col>
                            <p className="fw-bold">Deskripsi</p>
                            <p className={Style.p}>
                                {product.description}
                            </p>

                        </Col>
                    </Col>
                    <Col md={3}>
                        <Card className="p-3 mt-4">
                            <h4 className={Style.h4}>{categories == 0 ? 'Not Found' : categories.name }</h4>
                            <h1 className={Style.h1}>{product.name}</h1>
                            <div className='d-flex flex-row align-items-center'>
                                <h3 className={Style.h3}>Price&nbsp;</h3>
                                <h2 className={Style.h2}>{Rupiah(product.base_price)}</h2>
                            </div>
                            {
                                product.published === true ?
                                <></>
                                :
                                    <Button onClick={goPublish} className={["my-2",Style.buttonTerbitkan]} type="button">
                                        Terbitkan
                                    </Button>
                            }
                            {/* button outline danger */}
                            <Button onClick={goUpdate} type="button" className={Style.buttonEdit}>
                                Edit
                            </Button>
                        </Card>

                        <Card className="p-3 mt-2">
                            <Col>
                                <img className="img-fluid" src={user.image_url ? user.image_url : NoImage} alt="productImage" />
                            </Col>
                            <Col>
                                <h4 className={Style.h4}>{user.full_name}</h4>
                                <p className={Style.p}>{user.address}</p>
                            </Col>
                        </Card>
                    </Col>
                </Row>


                    }

            </Container>
        </div>
    )
}

export default PreviewProduct