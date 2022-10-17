import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Resume from '../components/Resume';
import SideLinks from '../components/SideLinks';

export default class ResumePage extends Component {
    render() {
        return (
            <div className='resume-container m-0'>
                <Navigation />
                <div className='my-4 d-flex justify-content-center'>
                    <div>
                        <a
                            rel='noreferrer' target='_blank'
                            href='https://drive.google.com/uc?export=download&id=1q5kx3U25LwqHKoYo7miWmE59wJ3ufw19'
                            className='d-flex flex-column justify-content-center align-items-center'>
                            <Button variant='flat' className='custom-shadow resume'>
                                download resume
                            </Button>
                        </a>
                    </div>
                </div>
                <Resume />
                <SideLinks />
                <Footer />
            </div>
        );
    }
}
