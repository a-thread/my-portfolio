import './style.scss';

const Skills = () => {
    return (
        <div className='skillsContainer'>
            <h3>Tools, Technologies<br /> & Skills</h3>

            <div className='skillsSection'>
                <div>
                    <span><i className='fas fa-laptop-code'></i></span>
                    <h4>Front End</h4>
                    <p>JavaScript/TypeScript, HTML, Sass/CSS, React, Angular, RxJS, NgRx, Redux, Material UI, Bootstrap</p>
                </div>
                <div>
                    <span><i className='fas fa-terminal'></i></span>
                    <h4>Back End</h4>
                    <p>C#, SQL, NoSQL, Node.js, .NET Core, Entity Framework Core</p>
                </div>
            </div>
            <div className='skillsSection'>
                <div>
                    <span className='text-primary-light'><i className='fas fa-code-branch'></i></span>
                    <h4>Tools</h4>
                    <p>Git/Github, AWS (Lambda microservices, API Gateway, S3), Test Driven Development</p>
                </div>
                <div className='soft'>
                    <span className='text-primary-light'><i className='fas fa-users-cog'></i></span>
                    <h4>Soft Skills</h4>
                    <p>Critical Thinking, Communication, Resourcefulness, Resilience, Organization, Flexibility, Passion for Learning</p>
                </div>
            </div>
        </div>
    )
};

export default Skills;
