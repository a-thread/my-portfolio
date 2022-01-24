import { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default class Navigation extends Component {

    render() {
        return (
            <Navbar className='py-2 px-3 m-0 w-100' expand='lg'>
                <Navbar.Brand href='/'>
                    <h1>
                        <span className='green'>a-</span>
                        thread
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='w-100 d-flex justify-content-end'>
                        <NavLink to='/' className={(navData) => navData.isActive ? ' selected' : ''}>
                            home
                        </NavLink>
                        <NavLink to='/projects' className={(navData) => navData.isActive ? ' selected' : ''}>
                            projects
                        </NavLink>
                        <NavLink to='/resume' className={(navData) => navData.isActive ? ' selected' : ''}>
                            resume
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}