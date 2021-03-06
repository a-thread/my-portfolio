import React, { Component } from "react";
import Feedback from 'react-bootstrap/esm/Feedback';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Navigation from '../components/Navigation';
import SideLinks from '../components/SideLinks';
import Skills from '../components/Skills';

export default class HomePage extends Component {
    render() {

        return (
            <>
                <div className="intro-wrapper d-flex flex-column">
                    <Navigation />
                    <Intro />
                </div>
                <Bio />
                <Skills />
                <Feedback />
                <Contact />
                <SideLinks />
                <Footer />
            </>
        )
    }
}
