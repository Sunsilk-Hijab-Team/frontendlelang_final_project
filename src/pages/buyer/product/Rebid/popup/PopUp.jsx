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
    
    const urlRebid = `${REACT_APP_API_URL}/api/v1/buyer/order/price-appeal/${orderId}`;
    const token = localStorage.getItem('token')
    const handleRebid = async (e) => {
            e.preventDefault();
            
            try{
                // console.log(bidPrice);
                // await axios.post(url, ,{ headers: {
                //     'Authorization': `Bearer ${token}`
                // } })
                await axios({
                    method: 'PUT',
                    url: urlRebid,
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

    const urlDetail = `${REACT_APP_API_URL}/api/v1/buyer/order/product/${orderId}`;

    const Detail = async () => {
        try {
            await axios({
                method: 'GET',
                url: urlDetail,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                setProduct(res.data.data.order.products);
                setCategory(res.data.data.order.products.categories);
                setImages(res.data.data.order.products.images);
                console.log(res);
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
                Saya Ingin Menawar Lagi
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
                                            {console.log(images,'tes')}
                                            <img className={stylePopup.image} src={ images != null ? images[0].image_url : 'loading'} alt="imageproduct" /></div>
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
                                    <button className={stylePopup.roundedButtonSend} onClick={handleRebid}>
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