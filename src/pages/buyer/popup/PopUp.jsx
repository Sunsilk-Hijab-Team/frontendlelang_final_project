import React, { useState } from 'react';
import stylePopup from './stylePopup.module.css';
import {Button} from 'react-bootstrap';

function PopUp() {
    const [modal, setModal] = useState(false);
    const togglePopup = () => {
        setModal(!modal)
    }

    return (
        <div>
            <button
                className={stylePopup.roundedButton}
                onClick={togglePopup}
            >
                saya tertarik dan ingin Nego
            </button>
            {modal &&
                (
                    <div className={stylePopup.modal}>
                        <div className={stylePopup.overlay}></div>
                        <div className={stylePopup.modalContent}>
                            <p><strong>Masukan Harga Tawarmu</strong></p>
                            Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual
                            <div className="gambar"></div>
                            <Button>Bismillah</Button>
                            <button className={stylePopup.closeModal}
                                onClick={togglePopup}
                            >
                                close
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PopUp