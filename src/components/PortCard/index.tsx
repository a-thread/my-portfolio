import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { IProject } from './project.model';
import './style.scss';

export default class PortCard extends Component<IProject> {
  render() {
    const { id, image, title, deployed, github, description, email, password, tech } = this.props;
    return (
      <article className='portfolio-item custom-shadow py-2' id={`${id}`}>

        {/* Media */}
        <div className='image'>

          {/* image */}
          <img className='custom-shadow' src={`${image}`} alt={title} />

          {/* Buttons Row */}
          <div className='btnsRow d-flex flex-wrap justify-content-around align-items-center'>

            {/* Deployed */}
            <a href={deployed} target='_blank' rel='noreferrer'>
              <Button variant='flat' className='custom-shadow'>App</Button>
            </a>

            {/* Repo */}
            <a href={github} target='_blank' rel='noreferrer'>
              <Button variant='flat' className='custom-shadow'>Repo</Button>
            </a>
          </div>
        </div>

        {/* Text */}
        <div className='text'>

          {/* Project Name */}
          <h2>{title}</h2>
          <div>

            {/* Description */}
            <p className='my-1'>{description}</p>

            {/* Guest Login, if any */}
            {(email && password) &&
              <div className='login'>
                <p className="mt-0 mb-1"><b>Guest Login:</b></p>
                <p className='my-1'><b>email:</b> {email}</p>
                <p className='my-1'><b>password:</b> {password}</p>
              </div>}

            {/* Tech Used */}
            <p className='mt-2'><b>Tech Used:</b> {tech}</p>
          </div>
        </div>
      </article >
    );
  }
};
