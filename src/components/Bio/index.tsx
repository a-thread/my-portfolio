import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Bio: React.FC = () => {
    return (
        <div className='about-me' id='bio'>
            <h3 className='about-title text-primary-light mb-4'>BIO</h3>

            <article>
                <p className='bio-content'>
                    Senior Software Engineer with 5+ years of experience architecting and shipping full-stack systems on Angular, TypeScript, C#/.NET Core, and AWS. I focus on building reusable engineering patterns—frameworks, standards, and pipelines that make an entire team faster, not just my own code.
                    <br />
                    <br />
                    Recent work includes re-architecting a nightly batch process into a real-time AWS Lambda/SNS/S3 pipeline, and building a DTO/Validator/Filter factory system that cut feature build time by roughly 80% for my team. I also mentor engineers through code review and contribute to my company's enterprise agentic-AI pilot program, helping author governance and control standards for responsible AI adoption.
                    <br />
                    <br />
                    Explore my <Link to="/projects">projects page</Link> to see what I've been building outside of work.
                </p>
            </article>
        </div>
    )
}

export default Bio;
