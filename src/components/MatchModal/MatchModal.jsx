import React, { useState, useEffect } from 'react';
import stylePopup from './styleMatchModal.module.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import {Link} from 'react-router-dom';
import styleNotif from '../../pages/seller/Notification/Notification.module.css'
import axios from 'axios';
import {Rupiah} from '../../components/CostumFunction/Rupiah';

function MatchModal(props) {
    const [modal, setModal] = useState(false);
    const setIcon = useState(<IoClose />)
    const togglePopup = () => {
        setModal(!modal);
        setIcon(IoClose);
    }

    useEffect(() => {
        console.log("ini propsss"+props.data);
    })

    // console.log("ini dari modal", items);

    return (
        <div>
            <a className='btn btn-sm btn-success' onClick={togglePopup}>
                {/* <img className='d-flex' src="/assets/fi_check.svg" alt="" /> */}
                Chat Now
            </a>
            {modal &&
                (
                    <div className={stylePopup.modal}>
                        <div className={stylePopup.overlay}></div>
                        <div className={stylePopup.modalContent}>

                            <strong>Yeay kamu berhasil mendapat harga yang sesuai</strong><br /><br />

                            <div className={stylePopup.textPopup}>
                                Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
                            </div>

                            <div className={stylePopup.imagePopup}>
                                <div className={stylePopup.product}>
                                    <p className={stylePopup.title}>Product Match</p>
                                    <div className='d-flex flex-row'>
                                        <img className={styleNotif.buyerProfile} src={props.data?props.data.users_buyer.image_url:"Loading..."} alt="" />
                                        <div>
                                            <h2 className={styleNotif.buyerName}>
                                                {props.data?props.data.users_buyer.full_name:"Loading..."}
                                            </h2>
                                            <h1 className={styleNotif.date}>
                                            {props.data?props.data.users_buyer.city:"Loading..."}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        <img className={styleNotif.buyerProfile} src={props.data?props.data.products.images[0].image_url:'Loading...'} alt="" />
                                        <div>
                                            <h1 className={stylePopup.productTitle}>
                                                {props.data?props.data.products.name:"Loading..."}
                                            </h1>
                                            <h2 className={stylePopup.productPrice}>
                                                {props.data?props.data.products.price:"Loading..."}
                                            </h2>
                                            <h2 className={stylePopup.productTitle}>
                                                Ditawar {props.data? Rupiah(props.data.bid_price):"Loading..."}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href={"https://api.whatsapp.com/send?phone="+props.data.users_buyer.phone+"&text=Hai%20Kak"}>
                                <button className={stylePopup.roundedButton}>
                                    Hubungi via Whatsapp
                                    <img className='d-flex ms-3' src="/assets/Whatsapp.svg" alt="" />
                                </button>
                            </a>

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

export default MatchModal