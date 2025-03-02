import React from 'react';
import './style.scss';

const Bio: React.FC = () => {
    return (
        <div className='about-me' id='bio'>
            <h3 className='about-title text-primary-light mb-4'>BIO</h3>

            <article>
                <p className='bio-content'>
                    Full Stack Engineer with 3+ years of hands on experience designing, building, and implementing applications
                    using a wide range of technologies and programming languages. Check out my projects page to see a few of my
                    personal projects!
                    <br />
                    <br />
                    Coming from the nonprofit sector with a focus upon peer support and social justice, I am
                    passionate about accessibility and approach programming challenges from fresh perspectives
                    to create collaborative and meaningful web applications.
                </p>
            </article>
        </div>
    )
}

export default Bio;
