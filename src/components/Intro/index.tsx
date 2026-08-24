import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ArrowUpRightIcon } from '../icons';
import { SITE, emailHref } from '@shared/data/site';
import './style.scss';

const Intro = () => {
  return (
    <div className="hero" id="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-mark" />
            {SITE.role}
          </div>
          <h1 className="hero-headline">
            Full-stack systems,
            <br />
            built to <span className="hero-accent">scale.</span>
          </h1>
          <p className="hero-subhead">
            I'm {SITE.name}. I specialize in full-stack development — reusable architectures, dynamic APIs, and scalable frontend frameworks — built on C#, TypeScript, Angular, .NET Core, and AWS.
          </p>
          <div className="hero-ctas">
            <Link to="/projects" className="btn btn-primary">
              View projects
              <ArrowUpRightIcon />
            </Link>
            <Link to="/resume" className="btn btn-secondary">Download résumé</Link>
          </div>
          <div className="hero-socials">
            <a className="icon-btn" aria-label="GitHub" href={SITE.github} target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
            <a className="icon-btn" aria-label="LinkedIn" href={SITE.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a className="icon-btn" aria-label="Email" href={emailHref}>
              <MdEmail />
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <div className="hero-photo-tint" />
          <img src="/images/headshot.png" alt={`Headshot of ${SITE.name}`} />
          <div className="hero-photo-badge mono">Angular &middot; .NET &middot; AWS</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
