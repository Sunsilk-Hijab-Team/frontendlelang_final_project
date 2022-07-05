import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    StyleBars
} from './NavbarElemens';

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    {props.navLeft}
                </NavLink>

                <StyleBars>
                <Bars />
                </StyleBars>
                <NavMenu>
                {props.navMiddle}
                </NavMenu>

                <NavBtn>
                    {props.navRight}
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;