import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import stylePopup from './stylePopup.module.css';
import { Form, Row, Col, Spinner} from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';
const { REACT_APP_API_URL } = process.env

function PopUp() {
    const [modal, setModal] = useState(false);
    const [bidPrice, setBidPrice] = useState('');
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([]);
    const [images, setImages] = useState([]);

    const nav = useNavigate();
    let { orderId } = useParams();
    
    const url_rebid = `${REACT_APP_API_URL}/api/v1/buyer/order/price-appeal/${orderId}`;
    const token = localStorage.getItem('token')
    const handleOrder = async (e) => {
            e.preventDefault();
            
            try{
                // console.log(bidPrice);
                // await axios.post(url, ,{ headers: {
                //     'Authorization': `Bearer ${token}`
                // } })
                await axios({
                    method: 'PUT',
                    url_rebid,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    data: {
                        bid_price: bidPrice,                
                    }
                })
                .then( res => { 
                    console.log(res);
                    nav('/buyer/logged/sent/'+product.id)
                    
                })
                .catch(error => {
                console.log(error.response.data.message);
                })
        
            } catch (error) {
                return error.message;
            }
        }

    const url_detail = `${REACT_APP_API_URL}/api/v1/buyer/product/${orderId}`;

    const Detail = async () => {
        try {
            await axios({
                method: 'GET',
                url_detail,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                setProduct(res.data.data.product);
                setCategory(res.data.data.product.categories);
                setImages(res.data.data.product.images);
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        Detail();
    }, [])



    const setIcon = useState(<IoClose />)
    const togglePopup = () => {
        setModal(!modal);
        setIcon(IoClose);
    }

    return (
        <div>
            <button
                className={stylePopup.roundedButton}
                onClick={togglePopup}
            >
                Saya Tertarik dan Ingin Nego
            </button>
            {modal &&
                (
                    <div className={stylePopup.modal}>
                        <div className={stylePopup.overlay}></div>
                        <div className={stylePopup.modalContent}>

                            <strong>Masukan Harga Tawarmu</strong><br /><br />

                            <div className={stylePopup.textPopup}>
                                Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual
                            </div>
                            {/* {
                    loading ?
                        <Row className='d-flex justify-content-center'>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </Row>
                    : <></>
                } */}
                            <div className={stylePopup.imagePopup}>
                                <div className={stylePopup.row}>
                                    <div className={stylePopup.satu}>
                                        <div className={stylePopup.img}>
                                            <img className={stylePopup.image} src={images[0].image_url} alt="imageproduct" /></div>
                                    </div>
                                    <div className={stylePopup.dua}>
                                        <strong>{category.name}</strong><br />
                                        Rp. {product.base_price}
                                    </div>
                                </div>
                            </div>
                            <br /> Harga Tawar
                            

                            <div>
                                <Form >
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control
                                            className={stylePopup.styleForm}
                                            type="number"
                                            placeholder="Rp. 0,00" 
                                            onChange={event =>setBidPrice(event.target.value)}/>
                                        <Form.Text className="text-muted d-flex justify-content-start">
                                        </Form.Text>
                                    </Form.Group>
                                    <button className={stylePopup.roundedButtonSend} onClick={handleOrder}>
                                        Kirim</button>
                                </Form>
                            </div>

                            

                            <div className={stylePopup.closeModal}
                                onClick={togglePopup}
                            >
                                {setIcon}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default PopUp