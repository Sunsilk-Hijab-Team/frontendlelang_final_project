import {React, useEffect, useState} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
// import axios
import axios from 'axios';
// import io from "socket.io-client";

function NotificationTest() {
    const jwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmdWxsX25hbWUiOiJKb2huIERvZWVlZWUiLCJlbWFpbCI6InRyaXlhc25pa28yQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiY2l0eSI6bnVsbCwiYWRkcmVzcyI6bnVsbCwiaW1hZ2VfdXJsIjpudWxsfSwiaWF0IjoxNjU4MTQxNjc3fQ.8a2ljyJ7hrliiRTKpZj5_akgBKfVO7FjckKlmMSk5fo";
    const token=localStorage.setItem("token", "Bearer "+jwt);
    const [notification, setNotification]=useState([]);
    // get item token from localstorage
    const tokenItem=localStorage.getItem("token");
    const REACT_API_URL="https://lelang-euyy.herokuapp.com";

    const getAllNotification=async()=>{
        const response=await axios.get(`${REACT_API_URL}/api/v1/notification/all`,{
            headers:{
                Authorization:tokenItem
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

    useEffect(()=>{
        getAllNotification();
    },[]);
    
    // console.log("########"+notification);
    return (
        <div>
            {/* <Navbar title="Notification" />
            <Container className='previous'>
                <PreviousButton />
            </Container> */}

            <Container>
                <Row>
                    <Col md={12} >
                        <h1>Notification</h1>
                        {/* {console.log("#############"+notification.Notifications)} */}
                        {/* looping notification data */}
                        {notification.map((item, index)=>{
                            console.log(item);
                            return(
                                <div key={index}>
                                    <h3>{item.read_status}</h3>
                                    <p>{item.transaction_date}</p>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </div >

    );
}

export default NotificationTest