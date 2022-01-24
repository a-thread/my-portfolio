import { Link } from "react-router-dom";
import headshot from "./aiden.png";
import "./style.scss";
import { Button } from "react-bootstrap"
import Typewriter from "typewriter-effect";
import { Component } from "react";

export default class Intro extends Component {

    render() {
        return (
            <div className="intro w-100 d-flex flex-column justify-content-center">
                <div className="d-flex flex-wrap align-items-center justify-content-center main-container">
                    <div className="headshot-container">
                        {/* image */}
                        <img src={headshot} className="img-fluid animate__animated animate__rollIn shadow" alt="Headshot of Aiden" />
                    </div>
                    <div className="text-container">
                        {/* Intro title */}
                        <h1 className="intro-title animate__animated animate__backInLeft">Hi, I'm <span className="green">Aiden.</span></h1>
                        {/* Typewriter effect*/}
                        <h2 className="type-container">
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Engineer', 'Dog Dad', 'Artist'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        {/* Project button */}
                        <Link to="/projects">
                            <Button variant="flat" className="shadow projects animate__animated animate__backInRight"> recent projects </Button>
                        </Link>
                    </div>
                </div>
                {/* Bouncing arrow */}
                <a href="#bio" aria-label="link to bio area">
                    <div className="arrow text-white text-center w-100 mt-10">
                        <i className="fas fa-chevron-down" />
                    </div>
                </a>
            </div>
        )
    }
}
