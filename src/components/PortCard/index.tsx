import { ArrowUpRightIcon } from '../icons';
import { IProject } from './project.model';
import './style.scss';

const PortCard = ({ image, title, deployed, demo, github, description, tech }: IProject) => {
  const tags = tech.split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <article className="project-card">
      <img className="image" src={image} alt={title} />
      <div className="body">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <div className="tags">
          {tags.map((tag) => (
            <span className="pill" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="links">
          {deployed && (
            <a href={deployed} target="_blank" rel="noreferrer" className="link">
              Live app
              <ArrowUpRightIcon size={13} />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="link">
              Demo
              <ArrowUpRightIcon size={13} />
            </a>
          )}
          <a href={github} target="_blank" rel="noreferrer" className="link link--muted">GitHub</a>
        </div>
      </div>
    </article>
  );
};

export default PortCard;
