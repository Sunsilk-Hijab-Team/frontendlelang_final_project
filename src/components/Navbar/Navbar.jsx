import styleNav from './styleNav.module.css';
import Logo from './Logo.svg';
import { Row, Navbar, Nav, Container, Button } from 'react-bootstrap';
import imageLogin from './fi_log-in.svg';


function NavScroll(props) {
    return (
        <Navbar expand="lg" bg="light" >
            <Container md>
                <Row className={styleNav.brand}>
                    <Nav>
                        <Nav.Link href="#">
                            <img src={Logo} alt="halo" />
                        </Nav.Link>
                    </Nav>
                </Row>
                <Row>
                    <Nav>
                        {props.navMiddle}
                    </Nav>
                </Row>

                <Row>
                    <a href="/login">
                        <Button className={styleNav.styleLogin}>
                            <img src={imageLogin} alt="" /> Log in
                        </Button>
                    </a>
                </Row>

            </Container>
        </Navbar>
    );
}

export default NavScroll;