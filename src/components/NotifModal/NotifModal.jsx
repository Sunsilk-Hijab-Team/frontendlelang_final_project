import React, { useState } from 'react';
import stylePopup from './styleNotifModal.module.css';
import { Nav } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5'
import Notificiation from './fi_bell.svg';
import styleNotif from '../../pages/seller/Notification/Notification.module.css'

function NotifModal() {
  const [modal, setModal] = useState(false);
  const setIcon = useState(<IoClose />)
  const togglePopup = () => {
    setModal(!modal);
    setIcon(IoClose);
  }

  return (
    <div>
      <Nav.Link
        // href="/seller/Notification" 
        onClick={togglePopup}>
        <img className={stylePopup.iconNotif} src={Notificiation} alt="" />
      </Nav.Link>
      {modal &&
        (
          <div className={stylePopup.modal}>
            {/* <div className={stylePopup.overlay}></div> */}
            <div className={stylePopup.modalContent}>
              <Nav.Link className={stylePopup.product} href="/seller/Notification">
                <img className={styleNotif.productPicture} src="/assets/photo_product.jpg" alt="" />
                <div>
                  <div className='d-flex flex-row justify-content-between'>
                    <h1 className={stylePopup.date}>Penawaran produk</h1>
                    <h1 className={stylePopup.date}>20 Apr, 14:04</h1>
                  </div>
                  <div>
                    <h1 className={stylePopup.productTitle}>Jam Tangan Casio</h1>
                    <h2 className={stylePopup.productPrice}>Rp 250.000</h2>
                    <h2 className={stylePopup.productTitle}>Ditawar Rp 200.000</h2>
                  </div>
                </div>
              </Nav.Link>

              <hr class="rounded"></hr>

              <div className={styleNotif.product}>
                <img className={styleNotif.productPicture} src="/assets/photo_product.jpg" alt="" />
                <div>
                  <div className='d-flex flex-row justify-content-between'>
                    <h1 className={stylePopup.date}>Berhasil diterbitkan</h1>
                    <h1 className={stylePopup.date}>19 Apr, 12:00</h1>
                  </div>
                  <div>
                    <h1 className={stylePopup.productTitle}>Jam Tangan Casio</h1>
                    <h2 className={stylePopup.productPrice}>Rp 250.000</h2>
                  </div>
                </div>
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

export default NotifModal