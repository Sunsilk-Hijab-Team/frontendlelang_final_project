import React from 'react';
import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Style from '../../../../components/Details/styleDetails.module.css'
import Navbar from '../../../../components/NavbarAfterLogin/NavbarDashboard'
import PreviousButton from '../../../../components/PreviousButton/PreviousButton';
import NoImage from '../../../../images/no_image.png'
import { Carousel, Container, Col, Row} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Previous from './fi_arrow-left.svg';
import Image from './jam_1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from '../../../../components/Details/Details'

const { REACT_APP_API_URL } = process.env

function Sent() {

    const url = `${REACT_APP_API_URL}/api/v1/buyer/product/`;

    let { productId } = useParams();
    
    const [item, setItem] = useState([]);
    const [category, setCategory]  = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const Detail = async () => {
        setLoading(true)
        try {
            await axios.get(url+productId)
            .then(res => {
                setItem(res.data.data.product);
                setCategory(res.data.data.product.categories);
                setImages(res.data.data.product.images);
                // console.log(images, 'null')
            })
            setLoading(false)
        } catch (error) {
            setLoading(true);
        }
    }

    useEffect(() => {
        Detail();
    }, [])

    return (
        <div >
            {/* {toast.success("Harga tawar anda telah terkirim, Tunggu balasan dari penjual",{position:"top-center"})} */}
            <Navbar />
            <Container>
                    <div className={Style.div}>
                    <Container className={Style.container}>
                        <PreviousButton />
                    </Container>
                    <Container className={Style.container}>
                        {
                            loading ?
                                <Row className='d-flex justify-content-center'>
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </Row>
                                : <></>
                        }
                        <Row>
                            <Col>
                                <Carousel className={Style.carousel}>
                                    {
                                        images.length === 0 ?

                                            <Carousel.Item className={Style.carousel}>
                                                <img className={Style.carouselImage} src={NoImage} alt="productImage" />
                                            </Carousel.Item>

                                            :

                                            images.map((image, index) => {
                                                return (
                                                    <Carousel.Item key={index} className={Style.carousel}>
                                                        <img className={Style.carouselImage} src={image.image_url} alt="productImage" />
                                                    </Carousel.Item>
                                                )
                                            })
                                    }
                                </Carousel>
                            </Col>

                            <Col className={Style.desc}>
                                <div className={Style.sellerProfile}>
                                    <img className={Style.sellerPhoto} src="/assets/profile_buyer.jpg" alt="" />
                                    <div className='ms-3'>
                                        <h2 className={Style.sellerName}>Taylor Swift</h2>
                                        <h1 className={Style.city}>Gresik</h1>
                                    </div>
                                </div>

                                <h4 className={Style.h4}>{category === null ? 'Tidak Berkategori' : category.name}</h4>
                                <h1 className={Style.h1}>{item.name}</h1>
                                <div className='d-flex flex-row align-items-center'>
                                    <h3 className={Style.h3}>Price</h3>
                                    <h2 className={Style.h2}>Rp {item.base_price}</h2>
                                </div>
                                <p className={Style.p}>{item.description}</p>

                                <button disabled={false} className={Style.roundedButton}>
                                    Saya Tertarik dan Ingin Nego
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
                   
        </div>
    )
}

export default Sent