import "./style.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <span>&copy; 2026 Aiden Threadgoode — built with React, TypeScript &amp; Vite</span>
        <div className="site-footer__links">
          <a href="https://github.com/a-thread" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/a-thread" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
