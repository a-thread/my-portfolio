import { ArrowUpRightIcon } from '../icons';
import { IProject } from './project.model';
import './style.scss';

const PortCard = ({ image, title, deployed, demo, github, description, tech }: IProject) => {
  const tags = tech.split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <article className="project-card">
      <img className="project-card-image" src={image} alt={title} />
      <div className="project-card-body">
        <h3>{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-tags">
          {tags.map((tag) => (
            <span className="pill" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-card-links">
          {deployed && (
            <a href={deployed} target="_blank" rel="noreferrer" className="project-card-link">
              Live app
              <ArrowUpRightIcon size={13} />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="project-card-link">
              Demo
              <ArrowUpRightIcon size={13} />
            </a>
          )}
          <a href={github} target="_blank" rel="noreferrer" className="project-card-link project-card-link--muted">GitHub</a>
        </div>
      </div>
    </article>
  );
};

export default PortCard;
