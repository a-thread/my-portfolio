// import Footer from "../common/Footer";

import { Component } from "react";
import Feedback from "react-bootstrap/esm/Feedback";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Navigation from "../components/Navigation";
import SideLinks from "../components/SideLinks";
import Skills from "../components/Skills";

export default class HomePage extends Component {
    render() {

        return (
            <>
                <Navigation />
                <Intro />
                <Bio />
                <Skills />
                <Feedback />
                <Contact />
                <SideLinks />
                {/* <Footer /> */}
            </>
        )
    }
}
