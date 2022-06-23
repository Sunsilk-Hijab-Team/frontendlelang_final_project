import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styleButton from './button.module.css';

function ButtonFilter() {
  return (
    <Container className='d-flex justify-content-center'>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src="assets/fi_search.svg" alt="" />
        <p>Semua</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src="assets/fi_search.svg" alt="" />
        <p>Hobi</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src="assets/fi_search.svg" alt="" />
        <p>Kendaraan</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src="assets/fi_search.svg" alt="" />
        <p>Baju</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src="assets/fi_search.svg" alt="" />
        <p>Elektronik</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src="assets/fi_search.svg" alt="" />
        <p>Kesehatan</p>
      </Button>
    </Container>
  )
}

export default ButtonFilter