import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './styleSellButton.css';

function SellButton() {
    return (
        <Container className='d-flex justify-content-center fixed-bottom'>
            <Button href='/user/add-product' className='roundedButton d-flex flex-row justify-content-center align-items-center'>
                <img className='plus-icon d-flex me-3' src="/assets/fi_plus.svg" alt="" />
                Jual
            </Button>
        </Container>
    );
}

export default SellButton