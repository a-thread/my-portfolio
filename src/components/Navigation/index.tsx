import { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ThemeContext, themes } from '../../context/themeContext';
import './style.scss';

export default function Navigation() {
    const [colorTheme, setContrastTheme] = useState(true);

    return (
        <Navbar className='bg-additional py-2 px-3 m-0 w-100' expand='lg'>
            <Navbar.Brand href='/'>
                <h1 className='text-blue'>
                    <span className='text-green'>a-</span>
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
                        <ThemeContext.Consumer>
                            {({ changeTheme }) => (
                                <Button
                                    onClick={() => {
                                        setContrastTheme(!colorTheme);
                                        changeTheme(colorTheme ? themes.contrast : themes.color);
                                    }}
                                >
                                    <i className={!colorTheme ? 'fas fa-sun' : 'fas fa-moon'}></i>
                                    <span className="d-lg-none d-md-block">Switch Mode</span>
                                </Button>
                            )}
                        </ThemeContext.Consumer>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}