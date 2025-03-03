import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Bio: React.FC = () => {
    return (
        <div className='about-me' id='bio'>
            <h3 className='about-title text-primary-light mb-4'>BIO</h3>

            <article>
                <p className='bio-content'>
                    Full Stack Engineer with 4+ years of experience designing, building, and optimizing
                    scalable applications across a range of technologies and cloud platforms.
                    Specializing in full-stack development, cloud architecture, and API integrations,
                    I bring a user-focused approach to solving complex engineering challenges.
                    <br />
                    <br />
                    Coming from the nonprofit sector, I am passionate about accessibility, inclusive design,
                    and innovative solutions that enhance user experiences. My background in peer support and
                    social justice gives me a unique perspective in building collaborative and meaningful applications.
                    <br />
                    <br />
                    Check out my <Link to="/projects">projects page</Link> to see some of my work!
                </p>
            </article>
        </div>
    )
}

export default Bio;
