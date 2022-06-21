import styleNav from './styleNav.module.css';
import Logo from './Logo.svg';
import { Row, Navbar, Nav, Form, Container, Button} from 'react-bootstrap';
import imageLogin from './fi_log-in.svg';
import iconSearch from './search.svg';

function NavScroll() {
    return (
        <Navbar expand="lg" className={styleNav.styleNav}>
            <Container md>
                <Row>
                    <Nav>
                        <Nav.Link href="#">
                            <img src={Logo} alt="halo" />
                        </Nav.Link>
                    </Nav>
                </Row>

                <Row>
                    <Form className={styleNav.search}>
                        <Form.Control
                            type="search here"
                            placeholder="  Search here"
                            aria-label="Search"
                            className={styleNav.rounded}
                        />
                        <img src={iconSearch} alt="search" className={styleNav.styleIcon} />
                    </Form>
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