import React, { useState, useEffect } from 'react';
import stylePopup from './styleMatchModal.module.css';
import { Form, Row, Col } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5'
import styleNotif from '../../pages/seller/Notification/Notification.module.css'
import axios from 'axios';

function MatchModal() {
    const [modal, setModal] = useState(false);
    const setIcon = useState(<IoClose />)
    const togglePopup = () => {
        setModal(!modal);
        setIcon(IoClose);
    }

    return (
        <div>
            <a className='me-4' onClick={togglePopup}>
                <img className='d-flex' src="/assets/fi_check.svg" alt="" />
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
                                        <img className={styleNotif.buyerProfile} src="/assets/profile_buyer.jpg" alt="" />
                                        <div>
                                            <h2 className={styleNotif.buyerName}>Taylor Swift</h2>
                                            <h1 className={styleNotif.date}>Gresik</h1>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        <img className={styleNotif.buyerProfile} src="/assets/photo_product.jpg" alt="" />
                                        <div>
                                            <h1 className={stylePopup.productTitle}>Jam Tangan Casio</h1>
                                            <h2 className={stylePopup.productPrice}>Rp 250.000</h2>
                                            <h2 className={stylePopup.productTitle}>Ditawar Rp 200.000</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <button className={stylePopup.roundedButton}>
                                Hubungi via Whatsapp
                                <img className='d-flex ms-3' src="/assets/Whatsapp.svg" alt="" />
                            </button>

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