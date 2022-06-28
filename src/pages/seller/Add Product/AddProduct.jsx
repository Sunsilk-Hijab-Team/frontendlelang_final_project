import Navbar from '../../../components/NavbarSeller/NavbarSeller';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Previous from './fi_arrow-left.svg';
import Style from './styleAddProduct.css';

function AddProduct() {
    return (
        <div>
            <Navbar title="Product" />
            <div>
                <Container className={Style.previousCont}>
                    <img className={Style.previous} src={Previous} alt="halo" />
                </Container>
                <Container>
                    <Row>
                        <Col>

                        </Col>

                        <Col>
                            mmnsk
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AddProduct