import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './styleSellButton.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const { REACT_APP_API_URL } = process.env;

function SellButton() {

    const url = REACT_APP_API_URL;
    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState('')
    let nav = useNavigate();

    const hanleDirect = async (e) => {
        e.preventDefault();
        setLoading(true)
        try{
            await axios.get(`${url}/api/v1/auth/user/whoami`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                setLoading(false)
                // console.log(res.data.user, 'data')
                if( res.data.user.phone === null
                    && res.data.user.city === null
                    && res.data.user.address === null
                    && res.data.user.image_url === null
                ){
                    nav('/seller/dashboard/profile');
                    toast.warning('Silahkan lengkapi profile dahulu !', {
                        theme: 'colored',
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 4000
                    });
                } else {
                    nav('/seller/add-product');
                }

            })
            .catch(err => {
                console.log(err, 'error')
            })
        }catch(error) {

        }
    }

    useEffect(() => {
        hanleDirect();
    }, [])

    return (
<<<<<<< HEAD
        <Container className='d-flex justify-content-center fixed-bottom'>
            <Button href='/user/add-product' className='roundedButton d-flex flex-row justify-content-center align-items-center'>
=======
        <Container className='tombol-jual d-flex flex-row justify-content-center fixed-bottom'>
            <Button onClick={hanleDirect} className='roundedButton d-flex flex-row justify-content-center align-items-center'>
>>>>>>> fix
                <img className='plus-icon d-flex me-3' src="/assets/fi_plus.svg" alt="" />
                Jual
            </Button>
        </Container>
    );
}

export default SellButton