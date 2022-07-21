import React from 'react';
import './styleFavorites.css';
import Navbar from '../../../../components/NavbarAfterLogin/NavbarDashboard'
import { Container, Col, Row } from 'react-bootstrap';
import DashboardMenu from '../../../../components/DashboardMenu/DashboardMenu';
import PreviousButton from '../../../../components/PreviousButton/PreviousButton';

function Favorites() {
    return (
        <div>
            <Navbar title="Favorites" />
            <Container  className='previous'>
                <PreviousButton className="previousButton"/>
            </Container>

            <Container>
                <Row>
                    <Col className='dashboardMenu' sm={3}>
                        <DashboardMenu />
                    </Col>
                    <Col sm={7} className='empty-favorite'>
                        <img className='d-flex' src="/assets/favorites.svg" alt="" />
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
            </Container>
        </div >

    )
}

export default Favorites