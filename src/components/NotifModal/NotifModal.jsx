import React, { useState, useEffect } from 'react';
import stylePopup from './styleNotifModal.module.css';
import { Nav, Container, Row, Col } from 'react-bootstrap';
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
          // if allNotification is empty
          if(allNotification.length===0){
            setNotification([]);
          }else{
            setNotification(allNotification.reverse());
          }
          // console.log(notification);
      })
      .catch((error)=>{
          console.log(error);
      })
  }
  console.log("notificationnn",notification);

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
      
      <Container>
      {modal &&
        (
          <div className={["mt-5",stylePopup.modal]}>
            {/* <div className={stylePopup.overlay}></div> */}
            <Container fluid>
              <div className={stylePopup.modalContent}>
              {
              notification.length>0?
              notification.map((item, index)=>{
                console.log("itemm order",item);
                // if index < 2 do looping
                if(index<2){
                return(
                  <div>
                    <Nav.Link className={stylePopup.product} href="/seller/Notification">
                      <Row>
                        <Col sm={2}>
                        <img className={[styleNotif.productPicture]} src={item.orders.products.images[0].image_url} alt="" />
                        </Col>
                        <Col sm={10}>
                          <div>
                            <div>
                              <h1 className={stylePopup.date}>{item.notif_message? item.notif_message: "Undefined"}</h1>
                              <h4 className={stylePopup.date}>
                                {item.transaction_date ? moment(item.transaction_date).format('DD MMM, HH:mm') : 'undefined'}
                              </h4>
                            </div>
                            <div>
                              <h1 className={stylePopup.productTitle}>
                                {item.orders.products ? item.orders.products.name : "Undefined"}
                              </h1>
                              <h2 className={stylePopup.productPrice}>
                                {item.orders.products ? Rupiah(item.orders.products.base_price) : "Undefined"}
                              </h2>
                              <h2 className={stylePopup.productTitle}>Ditawar {item.orders.bid_price? Rupiah(item.orders.bid_price) : "Undefined"}</h2>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Nav.Link>

                    <hr class="rounded"></hr>
                  </div>
                )
                }
              })
              :<>Notification Empty</>
              }
              <div className={stylePopup.closeModal}
                onClick={togglePopup}>
              {setIcon}
              </div>
              <Row>
                <Col md={12} className="d-flex justify-content-center">
                  <p> <a href="/seller/notification">Lihat Selengkapnya</a></p>
                </Col>
              </Row>
              </div>
            </Container>
          </div>

        )
      }
      </Container>
    </div>
  )
}

export default NotifModal