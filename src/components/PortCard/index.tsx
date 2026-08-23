import { IProject } from './project.model';
import './style.scss';

const PortCard = ({ image, title, deployed, demo, github, description, tech }: IProject) => {
  const tags = tech.split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <article className="project-card">
      <img className="project-card__image" src={image} alt={title} />
      <div className="project-card__body">
        <h3>{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span className="pill" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-card__links">
          {deployed && (
            <a href={deployed} target="_blank" rel="noreferrer" className="project-card__link">
              Live app
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="project-card__link">
              Demo
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </a>
          )}
          <a href={github} target="_blank" rel="noreferrer" className="project-card__link project-card__link--muted">GitHub</a>
        </div>
      </div>
    </article>
  );
};

export default PortCard;
