import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './styleSoldProduct.css';
import Navbar from '../../../../components/NavbarSeller/NavbarSeller';
import DashboardMenu from '../../../../components/DashboardMenu/DashboardMenu';
import PreviousButton from '../../../../components/PreviousButton/PreviousButton';
import CardProduct from '../../../../components/Cards/CardProduct';

function SoldProduct() {
    return (
        <div>
            <Navbar title="Sold Product" />
            <Container  className='previous'>
                <PreviousButton className="previousButton" />
            </Container>

            <Container>
                <Row>
                    <Col sm={3}>
                        <DashboardMenu />
                    </Col>
                    <Col sm={9}>
                        <CardProduct />
                    </Col>
                    {/* <Col sm={2}>
                    </Col> */}
                    {/* <Col>3 of 3</Col> */}
                </Row>
            </Container>
        </div >

    )
}

export default SoldProduct