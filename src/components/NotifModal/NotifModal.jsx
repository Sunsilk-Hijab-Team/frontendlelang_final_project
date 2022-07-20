import React, { useState, useEffect } from 'react';
import stylePopup from './styleNotifModal.module.css';
import { Form, Nav } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5'
import Notificiation from './fi_bell.svg';
import styleNotif from '../../pages/seller/Notification/Notification.module.css';
import moment from 'moment';

// import costum hook rupiah
import {Rupiah} from '../../components/CostumFunction/Rupiah';

import axios from 'axios';

function NotifModal() {
  const [modal, setModal] = useState(false);
  const setIcon = useState(<IoClose />)
  const togglePopup = () => {
    setModal(!modal);
    setIcon(IoClose);
  }

  
  const [notification, setNotification]=useState([]);
  // get item token from localstorage
  const tokenItem=localStorage.getItem("token");
  // console.log(tokenItem);
  const REACT_API_URL="https://lelang-euyy.herokuapp.com";

  const getAllNotification=async()=>{
      const response=await axios.get(`${REACT_API_URL}/api/v1/notification/all`,{
          headers:{
              Authorization:`Bearer ${tokenItem}`
          }
      })
      .then((response)=>{
          // console.log(response.data);
          const allNotification= response.data.Notifications;
          // console.log(allNotification);
          setNotification(allNotification);
          // console.log(notification);
      })
      .catch((error)=>{
          console.log(error);
      })
  }
  console.log(notification);

  useEffect(()=>{
      getAllNotification();
  },[]);

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
            {notification.map((item, index)=>{
              console.log(item.orders.orders);
              return(
                    // <div key={index}>
                    //     <h3>{item.read_status}</h3>
                    //     <p></p>
                    // </div>
            
                <div className={stylePopup.modalContent}>
                  <Nav.Link className={stylePopup.product} href="/seller/Notification">
                    <img className={styleNotif.productPicture} src="/assets/photo_product.jpg" alt="" />
                    <div>
                      <div className='d-flex flex-row justify-content-between'>
                        <h1 className={stylePopup.date}>Penawaran produk</h1>
                        <h1 className={stylePopup.date}>
                          {item.transaction_date ? moment(item.transaction_date).format('DD-MM-YYYY') : 'undefined'}
                        </h1>
                      </div>
                      <div>
                        <h1 className={stylePopup.productTitle}>
                          {item.orders.products ? item.orders.products.name : "Undefined"}
                        </h1>
                        <h2 className={stylePopup.productPrice}>
                          {item.orders.products ? Rupiah(item.orders.products.base_price) : "Undefined"}
                        </h2>
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
                )
            })}
          </div>
        )
      }
    </div>
  )
}

export default NotifModal