import React from "react";
import { Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SideLinks from '../components/SideLinks';

const ResumePage: React.FC = () => {
    return (
        <div className='resume-container m-0'>
            <Navigation />
            <div className='my-4 d-flex justify-content-center'>
                <div>
                    <a
                        rel='noreferrer' target='_blank'
                        href='https://docs.google.com/document/d/1sA68wHHfIcCFOtg2DxkTUiGCc7eReWvk16JM7kYO8r0/export?format=pdf'
                        className='d-flex flex-column justify-content-center align-items-center'>
                        <Button variant='flat' className='custom-shadow resume'>
                            download resume
                        </Button>
                    </a>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="resume-iframe-container">
                    <iframe title="Resume" className="w-100 h-100" src="https://docs.google.com/document/d/e/2PACX-1vRIQQCPL2xGJ_e0dKuza_VkhwG38bnqJKSQ8q6j-3X2Z491wZPrUlfXyMpmVQNVRatIxdB4h41zVhga/pub?embedded=true"></iframe>
                </div>
            </div>
            <SideLinks />
            <Footer />
        </div>
    );
};
export default ResumePage;
