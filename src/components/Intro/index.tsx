import { Link } from 'react-router-dom';
import color from './aiden.png';
import contrast from './headshot.png';
import './style.scss';
import { Button } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

export default function Intro() {
    const [colorTheme] = useState(true);

    return (
        <div className='intro w-100 d-flex flex-column justify-content-center'>
            <div className='d-flex flex-wrap align-items-center justify-content-center main-container'>
                <div className='headshot-container'>
                    {/* image */}
                    <img src={colorTheme ? color : contrast} className='img-fluid animate__animated animate__rollIn custom-shadow' alt='Headshot of Aiden' />
                </div>
                <div className='text-container'>
                    {/* Intro title */}
                    <h1 className='text-blue intro-title animate__animated animate__backInLeft'>
                        Hi, I'm <span className='text-green'>Aiden.</span>
                    </h1>
                    {/* Typewriter effect*/}
                    <h2 className='type-container text-green mt-3'>
                        <Typewriter
                            options={{
                                strings: ['Full Stack Engineer', 'Dog Dad', 'Artist'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    {/* Project button */}
                    <Link to='/projects'>
                        <Button variant='flat' className='btn-outline custom-shadow projects animate__animated animate__backInRight'> recent projects </Button>
                    </Link>
                </div>
            </div>
            {/* Bouncing arrow */}
            <a href='#bio' aria-label='link to bio area'>
                <div className='bg-additional arrow text-white text-center w-100 mt-10'>
                    <i className='fas fa-chevron-down' />
                </div>
            </a>
        </div>
    )
}
