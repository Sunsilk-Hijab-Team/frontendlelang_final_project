import styleNavSeller from './styleNavSeller.module.css';
import Logo from './Logo.svg';
import { Row, Navbar, Nav, Form, Container, Button, NavDropdown } from 'react-bootstrap';
import iconSearch from './search.svg';
import Notificiation from './fi_bell.svg';
import Message from './fi_message-square.svg';
import Profile from './Group_15.svg';

function NavScroll() {
    return (

        <Navbar
            // fixed="top"
            bg="light" expand="lg">
            <Container md>
                <Row>
                    <Navbar.Brand href="#">
                        <img src={Logo} alt="halo" />
                    </Navbar.Brand>
                </Row>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Row>
                    <p className={styleNavSeller.pagetitle}>Product</p>
                </Row>

                <Row>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link className='p-0' href="#message">
                            <img className={styleNavSeller.iconMessage} src={Message} alt="" />
                        </Nav.Link>

                        <Nav.Link className='p-0' href="#link">
                            <img className={styleNavSeller.iconNotif} src={Notificiation} alt="" />
                        </Nav.Link>

                        {/* <img className={styleNavSeller.iconMessage} src={Message} alt="" />
                        <img className={styleNavSeller.iconNotif} src={Notificiation} alt="" /> */}
                        <Nav.Link href="#" className="btn d-flex justify-content-between align-items-center flex-grow-1">
                            <img className='profile' src={Profile} alt="" />
                            <h3>Unis Badri</h3>
                        </Nav.Link>
                    </Nav>
                </Row>
            </Container>
        </Navbar>
    );
}

export default NavScroll;