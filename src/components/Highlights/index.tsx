import './style.scss';

const Highlights = () => {
    return (
        <div className='highlightsContainer'>
            <h3>Career Highlights</h3>

            <div className='highlightsGrid'>
                <div>
                    <span><i className='fas fa-sitemap'></i></span>
                    <h4>Reusable Frameworks</h4>
                    <p>Architected DTO/Validator/Filter factories that cut feature build time ~80% across the team.</p>
                </div>
                <div>
                    <span><i className='fas fa-bolt'></i></span>
                    <h4>Real-Time Pipelines</h4>
                    <p>Re-architected a nightly batch process into a real-time AWS Lambda/SNS/S3 system.</p>
                </div>
                <div>
                    <span><i className='fas fa-clipboard-check'></i></span>
                    <h4>Team Standards</h4>
                    <p>Set frontend/SDLC standards adopted team-wide; led a state-management migration now used as the team's reference implementation.</p>
                </div>
                <div>
                    <span><i className='fas fa-robot'></i></span>
                    <h4>Responsible AI</h4>
                    <p>Selected for enterprise agentic-AI pilot programs; author governance and control documentation for responsible AI adoption.</p>
                </div>
                <div>
                    <span><i className='fas fa-shield-alt'></i></span>
                    <h4>Proactive Security</h4>
                    <p>Identified and escalated real security exposures—supply-chain risk, credential leaks, dependency-hardening gaps.</p>
                </div>
                <div>
                    <span><i className='fas fa-chalkboard-teacher'></i></span>
                    <h4>Mentorship</h4>
                    <p>Mentor engineers through code review; previously coached 30+ developers as a full-stack teaching assistant.</p>
                </div>
            </div>
        </div>
    )
};

export default Highlights;
