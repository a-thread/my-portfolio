import React from "react";
import { Link } from 'react-router-dom';
import './style.scss';
import { Button } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import { useDarkMode } from "@shared/state/DarkModeContext";

const Intro: React.FC = () => {
    const { isDarkMode } = useDarkMode();

    const colorPhoto = "/images/aiden.png";
    const contrastPhoto = "/images/headshot.png";


    const reloadSrc = (e?: any) => {
        if (isDarkMode) {
            e.target.src = colorPhoto;
        } else {
            e.target.src = contrastPhoto;
        }
    };


    return (
        <div className='intro bg-accent w-100 h-100 d-flex flex-column justify-content-center'>
            <div className='d-flex flex-wrap align-items-center justify-content-center main-container'>
                <div className='headshot-container'>
                    {/* image */}
                    <img src={isDarkMode ? contrastPhoto : colorPhoto} onError={reloadSrc} className='img-fluid animate__animated animate__rollIn custom-shadow' alt='Headshot of Aiden' />
                </div>
                <div className='text-container'>
                    {/* Intro title */}
                    <h1 className='text-secondary-light intro-title animate__animated animate__backInLeft'>
                        Hi, I'm <span className='text-primary-light'>Aiden.</span>
                    </h1>
                    {/* Typewriter effect*/}
                    <h2 className='type-container text-secondary-light mt-3'>
                        <Typewriter
                            options={{
                                strings: ['Full Stack Engineer', 'Systems Thinker', 'Building for Impact'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    {/* Project button */}
                    <Link to='/projects'>
                        <Button variant='flat' className='mt-3 custom-shadow projects animate__animated animate__backInRight'> recent projects </Button>
                    </Link>
                </div>
            </div>
            {/* Bouncing arrow */}
            <a href='#bio' aria-label='link to bio area'>
                <div className='bg-accent arrow text-white text-center w-100 mt-10'>
                    <i className='fas fa-chevron-down' />
                </div>
            </a>
        </div>
    )
}
export default Intro;