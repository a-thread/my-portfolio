import { useEffect } from 'react';
import data from '@shared/data/data.json';
import PortCard from '../components/PortCard';
import { IProject } from '../components/PortCard/project.model';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './style.scss';

const featuredTitles = ['Elysia', 'Lichen'];

const PortfolioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projects = data as IProject[];
    const featured = featuredTitles
        .map((title) => projects.find((project) => project.title === title))
        .filter((project): project is IProject => Boolean(project));
    const moreCount = projects.length - featured.length;

    return (
        <>
            <Navigation />
            <div className="projects-page">
                <div className="wrap projects-page__header">
                    <div className="eyebrow"><span className="eyebrow-mark" />Selected work</div>
                    <h1>Projects</h1>
                    <p>Two personal projects I've built outside of work — the rest of my repositories are on GitHub.</p>
                </div>
                <div className="wrap projects-page__grid">
                    {featured.map((project) => (
                        <PortCard {...project} key={project.id} />
                    ))}
                    <a
                        className="projects-page__more"
                        href="https://github.com/a-thread"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <rect x="3" y="7" width="18" height="13" rx="2" />
                            <path d="M3 7l2-3h5l2 3" />
                        </svg>
                        <h3>{moreCount} more projects</h3>
                        <p>View the full archive on GitHub</p>
                        <span className="projects-page__more-link">
                            github.com/a-thread
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
                        </span>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
};
export default PortfolioPage;
