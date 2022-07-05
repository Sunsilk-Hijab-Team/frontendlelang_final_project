import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styleButton from './button.module.css';
import SearchIcon from './fi_search.svg';

function ButtonFilter() {
  return (
    <Container className='d-flex justify-content-center'>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p className={styleButton.filterLabel} >Semua</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p className={styleButton.filterLabel}>Hobi</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p className={styleButton.filterLabel}>Kendaraan</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p className={styleButton.filterLabel}>Baju</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p className={styleButton.filterLabel}>Elektronik</p>
      </Button>
      <Button className={styleButton.button} type="search">
        <img className='filterLogo' src={SearchIcon} alt="" />
        <p className={styleButton.filterLabel}>Kesehatan</p>
      </Button>
    </Container>

    // <Container className={styleButton.container}>
    //   <Button className={styleButton.button} type="search">
    //     <img className='filterLogo' src="assets/fi_search.svg" alt="" />
    //     <p>Semua</p>
    //   </Button>
    //   <Button className={styleButton.button} type="search">
    //     <img className='filterLogo' src="assets/fi_search.svg" alt="" />
    //     <p>Hobi</p>
    //   </Button>
    //   <Button className={styleButton.button} type="search">
    //     <img className='filterLogo' src="assets/fi_search.svg" alt="" />
    //     <p>Kendaraan</p>
    //   </Button>
    //   <Button className={styleButton.button} type="search">
    //     <img className='filterLogo' src="assets/fi_search.svg" alt="" />
    //     <p>Baju</p>
    //   </Button>
    //   <Button className={styleButton.button} type="search">
    //     <img className='filterLogo' src="assets/fi_search.svg" alt="" />
    //     <p>Elektronik</p>
    //   </Button>
    //   <Button className={styleButton.button} type="search">
    //     <img className='filterLogo' src="assets/fi_search.svg" alt="" />
    //     <p>Kesehatan</p>
    //   </Button>
    // </Container>
  )
}

export default ButtonFilter