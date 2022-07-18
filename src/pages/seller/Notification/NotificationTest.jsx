import {React, useEffect, useState} from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import io from "socket.io-client";

function NotificationTest() {
    const token=localStorage.setItem("token", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRyaXlhc25pa29AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkRjl5OE5ReVJYeFF3cmJPWldOSmwxT2hLTUMwRUVtRktNMVN3dldRWEYxenU0ck0zUi52bGUiLCJwaG9uZSI6bnVsbCwiY2l0eSI6bnVsbCwiYWRkcmVzcyI6bnVsbCwiaW1hZ2VfdXJsIjpudWxsfSwiaWF0IjoxNjU3ODkxNDMxfQ.95dyCzazXpEmSxbt0rNRLNbnDV6oaNjAQhPIPSRWZjA");
    // const [notification, setNotification]=useState("");
    const [notificationList, setNotificationList]=useState([]);
    // get item token from localstorage
    const tokenItem=localStorage.getItem("token");

    useEffect(()=>{
        fetch("http://localhost:8000/api/v1/notification/all", {
            method: "GET",
            headers: {
                "Authorization": tokenItem,
                "Content-Type": "application/json"
            }
        })
        .then(res=>{
            // console.log("res oiii"+res.json());
            return res.json();
        })
        .then(data=>{
            console.log("data oiii"+data.data.Notifications);
            // setNotificationList(data.data.Notifications);
        })
        .catch(err=>{
            console.log(err);
        })
    }, []);
    // console.log user id from user login
    console.log(
        
    )

    return (
        <div>
            Notification Test
            {/* <Navbar title="Notification" />
            <Container className='previous'>
                <PreviousButton />
            </Container> */}

            {/* <Container>
                <Row>
                    <Col md={12} >
                        {notificationList.map((notification, index) => (
                            <div key={index}>
                                {notification}
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container> */}
        </div >

    );
}

export default NotificationTest