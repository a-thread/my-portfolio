// import Footer from "../common/Footer";

import { Component } from "react";
import Navigation from "../components/Navigation";
import Resume from "../components/Resume";
import SideLinks from "../components/SideLinks";

export default class ResumePage extends Component {
    render() {

        return (
            <>
                <Navigation />
                <Resume />
                <SideLinks />
                {/* <Footer /> */}
            </>
        )
    }
}
