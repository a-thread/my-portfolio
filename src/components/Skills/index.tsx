import './style.scss';

const Skills = () => {
    return (
        <div className='skillsContainer'>
            <h3>Tools, Technologies<br /> & Skills</h3>

            <div className='skillsGrid'>
                <div>
                    <span><i className='fas fa-laptop-code'></i></span>
                    <h4>Front End</h4>
                    <p>Angular, TypeScript, RxJS, NgRx, JavaScript, React, Redux, HTML5, CSS3/Sass, Next.js, Material UI, Bootstrap, Tailwind CSS, Responsive Design</p>
                </div>
                <div>
                    <span><i className='fas fa-terminal'></i></span>
                    <h4>Back End</h4>
                    <p>C#, .NET Core, Python, Node.js, REST APIs, GraphQL, Entity Framework Core, PostgreSQL, SQL Server, Redis, MongoDB</p>
                </div>
                <div>
                    <span><i className='fas fa-code-branch'></i></span>
                    <h4>Tools & DevOps</h4>
                    <p>Git & GitHub, AWS (Lambda, API Gateway, S3, Aurora RDS, SNS/SQS), Terraform, CI/CD pipelines, Jest, Docker, TDD & Unit Testing, Google Analytics (GA4), Pendo</p>
                </div>
                <div>
                    <span><i className='fas fa-users-cog'></i></span>
                    <h4>Soft Skills</h4>
                    <p>Collaborative Leadership, Critical Thinking, Effective Communication, Resourcefulness, Resilience, Mentorship, Organization, Adaptability, Continuous Learning</p>
                </div>
            </div>
        </div>
    )
};

export default Skills;
