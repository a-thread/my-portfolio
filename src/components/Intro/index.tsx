import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./style.scss";

const Intro: React.FC = () => {
  return (
    <div className="hero" id="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <div className="eyebrow">
            <span className="eyebrow-mark" />
            Senior Software Engineer
          </div>
          <h1 className="hero__headline">
            Full-stack systems,
            <br />
            built to <span className="hero__accent">scale.</span>
          </h1>
          <p className="hero__subhead">
            I'm Aiden Threadgoode. I architect and ship full-stack systems on Angular, TypeScript, C#/.NET Core, and AWS — and build the reusable patterns that make an entire team faster.
          </p>
          <div className="hero__ctas">
            <Link to="/projects" className="btn btn-primary">
              View projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </Link>
            <Link to="/resume" className="btn btn-secondary">Download résumé</Link>
          </div>
          <div className="hero__socials">
            <a className="icon-btn" aria-label="GitHub" href="https://github.com/a-thread" target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
            <a className="icon-btn" aria-label="LinkedIn" href="https://www.linkedin.com/in/a-thread" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a className="icon-btn" aria-label="Email" href="mailto:aiden.threadgoode@gmail.com">
              <MdEmail />
            </a>
          </div>
        </div>
        <div className="hero__photo">
          <div className="hero__photo-tint" />
          <img src="/images/headshot.png" alt="Headshot of Aiden Threadgoode" />
          <div className="hero__photo-badge mono">Angular &middot; .NET &middot; AWS</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
