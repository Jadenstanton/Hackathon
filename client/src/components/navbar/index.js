import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './navbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars />

            <NavMenu>
            <NavLink to='/about' activeStyle>
                About
            </NavLink>
            <NavLink to='/services' activeStyle>
                Services
            </NavLink>
            <NavLink to='/contact' activeStyle>
                Contact
            </NavLink>
            <NavLink to='/login' activeStyle>
                Login
            </NavLink>
            <NavLink to='/home' activeStyle>
                home
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
            <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar;
