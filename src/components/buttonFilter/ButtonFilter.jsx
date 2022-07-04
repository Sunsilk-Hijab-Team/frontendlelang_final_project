import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styleButton from './button.module.css';
import SearchIcon from './fi_search.svg';

function ButtonFilter() {
  return (
    <Container className={styleButton.container}>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p>Semua</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p>Hobi</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p>Kendaraan</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p>Baju</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p>Elektronik</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p>Kesehatan</p>
      </Button>
    </Container>
  )
}

export default ButtonFilter