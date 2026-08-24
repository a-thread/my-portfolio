import { SITE } from '@shared/data/site';
import './style.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer-inner">
        <span>&copy; {year} {SITE.name} — built with React, TypeScript &amp; Vite</span>
        <div className="site-footer-links">
          <a href={SITE.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
