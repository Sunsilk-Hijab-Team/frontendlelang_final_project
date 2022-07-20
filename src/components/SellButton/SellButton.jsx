import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './styleSellButton.css';

function SellButton() {


    const getProfile = async () => {
        
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
                    toast.error('Silahkan lengkapi profile anda dahulu !', {
                        theme: 'colored',
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 4000
                    });
                }

            })
            .catch(err => {
                console.log(err, 'error')
            })
        }catch(error) {

        }
    }

    return (
        <Container className='tombol-jual d-flex flex-row justify-content-center fixed-bottom'>
            <Button href='/seller/add-product' className='roundedButton d-flex flex-row justify-content-center align-items-center'>
                <img className='plus-icon d-flex me-3' src="/assets/fi_plus.svg" alt="" />
                Jual
            </Button>
        </Container>
    );
}

export default SellButton