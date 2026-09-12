import { useEffect } from "react";
import data from "./data/data.json";
import { SITE } from "@shared/data/site";
import PortCard from "./PortCard";
import { Project } from "./PortCard/project.model";
import { ArrowUpRightIcon, FolderIcon } from "@shared/components/Icons";
import "./style.scss";

const featuredTitles = ["Elysia", "Lichen"];

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = data as Project[];
  const featured = featuredTitles
    .map((title) => projects.find((project) => project.title === title))
    .filter((project): project is Project => Boolean(project));
  const moreCount = projects.length - featured.length;

  return (
    <div className="projects-page">
      <div className="wrap header">
        <div className="eyebrow">
          <span className="eyebrow-mark" />
          Selected work
        </div>
        <h1>Projects</h1>
        <p>
          Two personal projects I've built outside of work — the rest of my
          repositories are on GitHub.
        </p>
      </div>
      <div className="wrap grid">
        {featured.map((project) => (
          <PortCard {...project} key={project.id} />
        ))}
        <a className="more" href={SITE.github} target="_blank" rel="noreferrer">
          <FolderIcon />
          <h3>{moreCount} more projects</h3>
          <p>View the full archive on GitHub</p>
          <span className="more-link">
            {SITE.githubHandle}
            <ArrowUpRightIcon size={13} />
          </span>
        </a>
      </div>
    </div>
  );
};
export default PortfolioPage;
