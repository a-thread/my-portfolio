import React, { useState } from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import './style.scss';
import { IconContext } from "react-icons/lib";
import { useDarkMode } from "../../utils/DarkModeContext";

const Navigation: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const [isClosed, setClosed] = useState(false)

    return (
        <Navbar className='bg-accent py-2 px-3 m-0 w-100' expand='lg'>
            <Navbar.Brand href='/'>
                <h1 className='text-secondary-light'>
                    <span className='text-primary-light'>a-</span>
                    thread
                </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className="text-white">
                <Hamburger toggled={isClosed} toggle={setClosed} />
            </Navbar.Toggle>

            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='w-100 d-flex justify-content-end align-items-center'>
                    <NavLink to='/' className={(navData) => navData.isActive ? ' selected' : ''}>
                        home
                    </NavLink>
                    <NavLink to='/projects' className={(navData) => navData.isActive ? ' selected' : ''}>
                        projects
                    </NavLink>
                    <NavLink to='/resume' className={(navData) => navData.isActive ? ' selected' : ''}>
                        resume
                    </NavLink>
                    <div className='d-flex flex-end'>
                        <Button
                            aria-label="toggle dark mode"
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode ? (
                                <IconContext.Provider
                                    value={{ color: 'white' }}>
                                    <BsFillSunFill />
                                </IconContext.Provider>
                            ) : (
                                <IconContext.Provider
                                    value={{ color: 'white' }}>
                                    <BsFillMoonStarsFill />
                                </IconContext.Provider>
                            )}
                            <span className="d-lg-none d-md-block">Switch Mode</span>
                        </Button>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
