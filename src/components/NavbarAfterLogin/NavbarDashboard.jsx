import styleNavSeller from './styleNavDashboard.module.css';
import Logo from './Logo.svg';
import { Row, Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Message from './fi_message-square.svg';
import Profile from './Group_15.svg';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import NotifModal from '../NotifModal/NotifModal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { style } from '@mui/system';
import SearchCollapse from '../DropdownSearch/DropdownSearch'

const { REACT_APP_API_URL } = process.env

function NavScroll(props) {

    const url = `${REACT_APP_API_URL}/api/v1/auth/user/whoami`;
    const nav = useNavigate();

    const [profile, setProfile] = useState('');
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const getUser = async () => {
        setLoading(true)
        try {
            await axios({
                method: 'get',
                url,
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    setLoading(false)
                    setProfile(res.data.user)
                })
        } catch (error) {
            setLoading(true)
        }

    }
    const handleLogout = () => {
        localStorage.removeItem('token')
        nav('/login')
    }

    useEffect(() => {
        getUser()
    }, [])

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
                    <Navbar.Brand className={styleNavSeller.NavBrand} href="/">
                        <img className='d-flex logo' src={Logo} alt="halo" />
                    </Navbar.Brand>
                </Row>

                <div className={styleNavSeller.title}>
                    {props.title}
                </div>

                {/* <Row> */}
                <div className='d-flex justify-content-center'>
                    {props.middle}
                </div>
                {/* </Row> */}

                {/* PROFILE */}
                <div>
                    <Nav className='menu d-flex flex-row align-items-center'>
                        <div className={styleNavSeller.iconSearch}>
                            <SearchCollapse />
                        </div>
                        {/* <Nav.Link className='p-0' href="#message">
                            <img className={styleNavSeller.iconMessage} src={Message} alt="" />
                        </Nav.Link> */}

                        <NotifModal />


                        {/* <Nav.Link className='p-0' href="/seller/Notification">
                            <img className={styleNavSeller.iconNotif} src={Notificiation} alt="" />
                        </Nav.Link> */}

                        <Dropdown
                            onMouseLeave={() => setShowDropdown(false)}
                            onMouseOver={() => setShowDropdown(true)}
                        >

                            <Dropdown.Toggle
                                id="dropdown-basic" className={styleNavSeller.dropdownProfile}
                            >
                                <Nav.Link href="#" className={styleNavSeller.btnProfile}>
                                    {
                                        loading ?
                                            <p className="text-dark">&nbsp;Loading....&nbsp;</p>
                                            :
                                            <></>
                                    }
                                    {
                                        profile.image_url === null ?
                                            <img className='d-flex me-2' src={Profile} alt="" />
                                            :
                                            <img className='d-flex me-2' src={profile.image_url} alt="" />
                                    }
                                    <div>{profile.full_name}</div>
                                </Nav.Link>
                            </Dropdown.Toggle>

                            <Dropdown.Menu show={showDropdown} className={styleNavSeller.dropdown}>
                                <Dropdown.Item href="/seller/dashboard/product-list">
                                Dashboard
                                </Dropdown.Item>
                                {/* <Dropdown.Item href="/seller/dashboard/profile">
                                    Profile
                                </Dropdown.Item> */}
                                <Dropdown.Item onClick={handleLogout}>
                                    Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavScroll;