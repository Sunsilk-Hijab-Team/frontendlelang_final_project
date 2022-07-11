import styleNavBuyer from './styleNavDashboard.module.css';
import Logo from './Logo.svg';
import { Row, Navbar, Container } from 'react-bootstrap';
import DashboardMenu from '../DashboardMenuBuyer/DashboardMenu';

function NavScroll(props) {

    return (

        <Navbar
            className='sticky-top'
            bg="light" expand="lg">
            <Container lg className={styleNavBuyer.containerNavSell}>
                <div className={styleNavBuyer.dashboardMenu}>
                    <DashboardMenu />
                </div>
                <Row>
                    <Navbar.Brand className={styleNavBuyer.NavBrand} href="/seller/home">
                        <img className='d-flex logo' src={Logo} alt="halo" />
                    </Navbar.Brand>
                </Row>

                {/* <Navbar.Toggle className='m-0' aria-controls="basic-navbar-nav" /> */}

                {/* <Row> */}
                <div className='d-flex justify-content-center'>
                    {props.middle}
                </div>
                {/* </Row> */}

                {/* <Row> */}
                <div className={styleNavBuyer.loginCollapse}>
                    {props.right}
                </div>
                {/* </Row> */}
            </Container>
        </Navbar>
    );
}

export default NavScroll;