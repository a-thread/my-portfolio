import React from "react";
import Feedback from 'react-bootstrap/esm/Feedback';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Highlights from '../components/Highlights';
import Intro from '../components/Intro';
import Navigation from '../components/Navigation';
import SideLinks from '../components/SideLinks';
import Skills from '../components/Skills';

const HomePage: React.FC = () => {
    return (
        <>
            <div className="intro-wrapper d-flex flex-column">
                <Navigation />
                <Intro />
            </div>
            <Bio />
            <Highlights />
            <Skills />
            <Feedback />
            <Contact />
            <SideLinks />
            <Footer />
        </>
    )
}

export default HomePage;

