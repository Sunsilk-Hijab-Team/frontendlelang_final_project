import React from 'react';
import './styleDashboardMenu.css';
import { Button } from 'react-bootstrap';

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function DashboardMenu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* HAMBURGER ICON */}
            <Button className="d-lg-none menu-bar" onClick={handleShow}>
                <img className='d-flex' src="/assets/fi_menu.svg" alt="" />
            </Button>

            {/* RESPONSIVE MODE */}
            <Offcanvas show={show} onHide={handleClose} responsive="md">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <a href="/seller/home">
                            <img className='d-flex logo' src="/assets/Logo.svg" alt="halo" />
                        </a>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='offcanfasBody'>
                    <Button href="/user/profile" className='button p-2 mb-4'>
                        <img className='d-flex' src="/assets/fi_user.svg" alt="" />
                        Profile
                        <img className='dashboard-menu-arrow d-flex' src="/assets/fi_chevron-right.svg" alt="" />
                    </Button>
                    <Button href="/user/product-list" className='button p-2 mb-4'>
                        <img className='d-flex' src="/assets/fi_box.svg" alt="" />
                        Product List
                        <img className='dashboard-menu-arrow d-flex' src="/assets/fi_chevron-right.svg" alt="" />
                    </Button>
                    <Button href="/user/favorite" className='button p-2 mb-4'>
                        <img className='d-flex' src="/assets/fi_heart.svg" alt="" />
                        Favorites
                        <img className='d-flex' src="/assets/fi_chevron-right.svg" alt="" />
                    </Button>
                    <Button href="/user/sold-product" className='button p-2 mb-4'>
                        <img className='d-flex' src="/assets/fi_dollar-sign.svg" alt="" />
                        Sold Product
                        <img className='d-flex' src="/assets/fi_chevron-right.svg" alt="" />
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>

            {/* NON-RESPONSIVE MODE*/}
            <div className='dashboardMenu'>
                <Button href="/seller/dashboard/profile" className='button p-2 mb-4'>
                    <img className='d-flex' src="/assets/fi_user.svg" alt="" />
                    Profile
                    <img className='dashboard-menu-arrow d-flex' src="/assets/fi_chevron-right.svg" alt="" />
                </Button>
                <Button href="/seller/dashboard/product-list" className='button p-2 mb-4'>
                    <img className='d-flex' src="/assets/fi_box.svg" alt="" />
                    Product List
                    <img className='dashboard-menu-arrow d-flex' src="/assets/fi_chevron-right.svg" alt="" />
                </Button>
                <Button href="/seller/dashboard/favorite" className='button p-2 mb-4'>
                    <img className='d-flex' src="/assets/fi_heart.svg" alt="" />
                    Favorites
                    <img className='d-flex' src="/assets/fi_chevron-right.svg" alt="" />
                </Button>
                <Button href="/seller/dashboard/sold-product" className='button p-2 mb-4'>
                    <img className='d-flex' src="/assets/fi_dollar-sign.svg" alt="" />
                    Sold Product
                    <img className='d-flex' src="/assets/fi_chevron-right.svg" alt="" />
                </Button>
            </div>
        </div >

    )
}

export default DashboardMenu