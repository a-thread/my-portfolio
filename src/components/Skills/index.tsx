import React, { Component } from "react";
import './style.scss';

export default class Skills extends Component {
    render() {
        return (
            <div className='skillsContainer'>
                <h3>Tools, Technologies<br /> & Skills</h3>

                <div className='skillsSection'>
                    <div>
                        <span><i className='fas fa-laptop-code'></i></span>
                        <h4>Front End</h4>
                        <p>Typescript, Angular, React, Bootstrap, Material UI, rxjs, ngrx, redux, HTML, CSS, SASS jQuery, Bootstrap, Material UI</p>
                    </div>
                    <div>
                        <span><i className='fas fa-terminal'></i></span>
                        <h4>Back End</h4>
                        <p>C#, AWS (Lambda microservices, API Gateway, S3), SQL, GraphQL, NoSQL, NestJs, Mongoose, Express, NodeJs, MongoDB</p>
                    </div>
                </div>
                <div className='skillsSection'>
                    <div>
                        <span className='text-primary-light'><i className='fas fa-code-branch'></i></span>
                        <h4>Tools</h4>
                        <p>Git, Github, Jira, , Hubspot, Slack, Adobe Creative Suite</p>
                    </div>
                    <div className='soft'>
                        <span className='text-primary-light'><i className='fas fa-users-cog'></i></span>
                        <h4>Soft Skills</h4>
                        <p>Critical Thinking, Communication, Resourcefulness, Resilience, Organization, Flexibility, A True Passion for Learning</p>
                    </div>
                </div>
            </div>
        )
    }
};
