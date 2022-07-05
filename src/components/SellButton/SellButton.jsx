import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './styleSellButton.css';

function SellButton() {
    return (
        <Container className='tombol-jual d-flex flex-row justify-content-center'>
            <Button href='/seller/add-product' className='roundedButton d-flex flex-row justify-content-center align-items-center fixed-bottom'>
                <img className='plus-icon me-3' src="/assets/fi_plus.svg" alt="" />
                Jual
            </Button>
        </Container>
    );
}

export default SellButton