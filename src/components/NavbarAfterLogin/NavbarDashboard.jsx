import styleNavSeller from './styleNavDashboard.module.css';
import Logo from './Logo.svg';
import { Row, Navbar, Nav, Container } from 'react-bootstrap';
import Message from './fi_message-square.svg';
import Profile from './Group_15.svg';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import NotifModal from '../NotifModal/NotifModal';
import ButtonLogout from '../ButtonLogout/ButtonLogout';

function NavScroll(props) {

    return (

        <Navbar
            className='sticky-top'
            bg="light" expand="lg">
            <Container lg className={styleNavSeller.containerNavSell}>
                {/* COMPONENT HAMBURGER */}
                <div className={styleNavSeller.dashboardMenu}>
                    <DashboardMenu />
                </div>
                <Row>
                    <Navbar.Brand className={styleNavSeller.NavBrand} href="/seller/home">
                        <img className='d-flex logo' src={Logo} alt="halo" />
                    </Navbar.Brand>
                </Row>

                <div className='d-flex justify-content-center'>
                    {props.title}
                </div>

                {/* PROFILE */}
                <div>
                    <Nav className='menu d-flex flex-row align-items-center'>
                        <Nav.Link className='p-0' href="#message">
                            <img className={styleNavSeller.iconMessage} src={Message} alt="" />
                        </Nav.Link>

                        <NotifModal />

                        {/* <Nav.Link className='p-0' href="/seller/Notification">
                            <img className={styleNavSeller.iconNotif} src={Notificiation} alt="" />
                        </Nav.Link> */}

                        <Nav.Link href="/seller/dashboard/profile" className={styleNavSeller.btnProfile}>
                            <img className='d-flex' src={Profile} alt="" />
                            Unis Badri
                        </Nav.Link>
                        <ButtonLogout />
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavScroll;