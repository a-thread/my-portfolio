import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Bio: React.FC = () => {
    return (
        <div className='about-me' id='bio'>
            <h3 className='about-title text-primary-light mb-4'>BIO</h3>

            <article>
                <p className='bio-content'>
                    Full Stack Engineer with 4+ years of experience designing, building, and optimizing scalable applications across modern tech stacks and cloud platforms. I specialize in full-stack development, cloud architecture, and API integrations, bringing a user-centered approach to solving complex engineering challenges.
                    <br />
                    <br />
                    With a background in the nonprofit sector, I'm passionate about accessibility, inclusive design, and building software that creates real, measurable impact. My experience in peer support and social justice informs a collaborative, people-first approach to engineering—and fuels my commitment to creating meaningful, ethical technology.
                    <br />
                    <br />
                    Explore my <Link to="/projects">projects page</Link> to see what I've been working on!
                </p>
            </article>
        </div>
    )
}

export default Bio;
