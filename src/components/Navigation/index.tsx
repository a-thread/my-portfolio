import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useDarkMode } from "@shared/state/DarkModeContext";
import "./style.scss";

const Navigation: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const onHome = pathname === "/";
  const anchor = (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);
  const close = () => setIsOpen(false);

  return (
    <nav className="site-nav">
      <div className="wrap site-nav__inner">
        <Link to="/" className="site-nav__logo" onClick={close}>
          <span>a</span>
          <span className="site-nav__logo-dot">&middot;</span>
          <span className="site-nav__logo-rest">thread</span>
        </Link>

        <div className="site-nav__hamburger">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} color="var(--text)" />
        </div>

        <div className={`site-nav__panel${isOpen ? " site-nav__panel--open" : ""}`}>
          <div className="site-nav__anchors">
            <a href={anchor("impact")} onClick={close}>Impact</a>
            <a href={anchor("skills")} onClick={close}>Toolkit</a>
            <a href={anchor("about")} onClick={close}>About</a>
            <a href={anchor("contact")} onClick={close}>Contact</a>
          </div>
          <div className="site-nav__divider" />
          <div className="site-nav__pages">
            <Link
              to="/projects"
              className={`btn btn-secondary${pathname === "/projects" ? " site-nav__page--active" : ""}`}
              onClick={close}
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className={`btn btn-secondary${pathname === "/resume" ? " site-nav__page--active" : ""}`}
              onClick={close}
            >
              Résumé
            </Link>
          </div>
          <button className="icon-btn" aria-label="toggle dark mode" onClick={toggleDarkMode}>
            {isDarkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
