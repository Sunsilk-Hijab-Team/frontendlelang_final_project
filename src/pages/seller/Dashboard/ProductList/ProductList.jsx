import React from 'react';
import style from './styleProductList.module.css';
import Navbar from '../../../../components/NavbarAfterLogin/NavbarDashboard'
import { Col, Container, Row } from 'react-bootstrap';
import CardProduct from '../../../../components/CardsDashboard/CardDashboard'
import DashboardMenu from '../../../../components/DashboardMenu/DashboardMenu';
import PreviousButton from '../../../../components/PreviousButton/PreviousButton';

function ProductList() {
    return (
        <div>
            <Navbar title="Product List" />
            <Container  className='previous'>
                <PreviousButton className="previousButton" />
            </Container>

            <Container >
                <Row className={style.container}>
                    <Col className='dashboardMenu' sm={3}>
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

export default ProductList