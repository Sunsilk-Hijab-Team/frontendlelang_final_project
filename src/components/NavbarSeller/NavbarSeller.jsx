import styleNavSeller from './styleNavSeller.module.css';
import Logo from './Logo.svg';
import { Row, Navbar, Nav, Container } from 'react-bootstrap';
import Notificiation from './fi_bell.svg';
import Message from './fi_message-square.svg';
import Profile from './Group_15.svg';
import DashboardMenu from '../DashboardMenu/DashboardMenu';

function NavScroll(props) {

    return (

        <Navbar
            className='sticky-top'
            bg="light" expand="lg">
            <Container lg className={styleNavSeller.containerNavSell}>
                {/* <DashboardMenu /> */}
                <Row>
                    <Navbar.Brand className={styleNavSeller.NavBrand} href="/seller/home">
                        <img className='d-flex logo' src={Logo} alt="halo" />
                    </Navbar.Brand>
                </Row>

                {/* <Navbar.Toggle className='m-0' aria-controls="basic-navbar-nav" /> */}

                {/* <Row> */}
                <div>
                    {props.title}
                </div>
                {/* </Row> */}

                {/* <Row> */}
                <div>
                    <Nav className='menu align-items-center'>
                        <Nav.Link className='p-0' href="#message">
                            <img className={styleNavSeller.iconMessage} src={Message} alt="" />
                        </Nav.Link>

                        <Nav.Link className='p-0' href="/seller/Notification">
                            <img className={styleNavSeller.iconNotif} src={Notificiation} alt="" />
                        </Nav.Link>

                        {/* <img className={styleNavSeller.iconMessage} src={Message} alt="" />
                        <img className={styleNavSeller.iconNotif} src={Notificiation} alt="" /> */}
                        <Nav.Link href="/seller/dashboard/profile" className={styleNavSeller.btnProfile}>
                            <img className='d-flex' src={Profile} alt="" />
                            Unis Badri
                        </Nav.Link>
                    </Nav>
                </div>
                {/* </Row> */}
            </Container>
        </Navbar>
    );
}

export default NavScroll;