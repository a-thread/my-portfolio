import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useBetween } from 'use-between';
import { themes, useShareableState } from '../../utils/utils';
import './style.scss';

export default function Navigation() {
    const { theme, setTheme } = useBetween(useShareableState);

    return (
        <Navbar className='bg-additional py-2 px-3 m-0 w-100' expand='lg'>
            <Navbar.Brand href='/'>
                <h1 className='text-green'>
                    <span className='text-blue'>a-</span>
                    thread
                </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>

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
                            onClick={() => {
                                setTheme(theme === '' ? themes.contrast : themes.color);
                            }}
                        >
                            <i className={theme === '' ? 'fas fa-moon' : 'fas fa-sun'}></i>
                            <span className="d-lg-none d-md-block">Switch Mode</span>
                        </Button>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}