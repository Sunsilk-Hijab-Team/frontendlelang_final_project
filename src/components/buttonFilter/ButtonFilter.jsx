import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styleButton from './button.module.css';

function ButtonFilter() {
  return (
    <Container className='d-flex justify-content-center'>
            <Button className={styleButton.button} type="search">halo</Button>
            <Button className={styleButton.button} type="search">halo</Button>
            <Button className={styleButton.button} type="search">halo</Button>
            <Button className={styleButton.button} type="search">halo</Button>
            <Button className={styleButton.button} type="search">halo</Button>
            <Button className={styleButton.button} type="search">halo</Button>
    </Container>
  )
}

export default ButtonFilter