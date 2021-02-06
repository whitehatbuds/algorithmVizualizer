import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavItem, NavMenu, NavLink,
        NavBtnLink, NavItemBtn } from './Navbar.elements';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const toggleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {

        (window.innerWidth <= 960) ? setButton(false) : setButton(true);
    }

    useEffect(() => {
       showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={closeMobileMenu}>
                        <NavIcon />
                        ULTRA
                    </NavLogo>
                    <MobileIcon onClick={toggleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={toggleClick} click={click}>
                        <NavItem>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/services'>
                                Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/products'>
                                Products
                            </NavLink>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/sign-up'>
                                    <Button fontBig primary>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
