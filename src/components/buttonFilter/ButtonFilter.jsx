import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styleButton from './button.module.css';

function ButtonFilter() {
  return (
    <Container className='d-flex justify-content-center'>
            <Button className={styleButton.button} type="search">Semua</Button>
            <Button className={styleButton.button} type="search">Hobi</Button>
            <Button className={styleButton.button} type="search">Kendaraan</Button>
            <Button className={styleButton.button} type="search">Baju</Button>
            <Button className={styleButton.button} type="search">Elektronik</Button>
            <Button className={styleButton.button} type="search">Kesehatan</Button>
    </Container>
  )
}

export default ButtonFilter