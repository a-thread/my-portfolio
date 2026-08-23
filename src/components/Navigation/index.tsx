import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { useDarkMode } from '@shared/state/DarkModeContext';
import './style.scss';

const SECTION_LINKS = [
  { hash: 'impact', label: 'Impact' },
  { hash: 'skills', label: 'Toolkit' },
  { hash: 'about', label: 'About' },
  { hash: 'contact', label: 'Contact' },
];

const PAGE_LINKS = [
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Résumé' },
];

const Navigation = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const onHome = pathname === '/';
  const sectionHref = (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);
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
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={22}
            color="var(--text)"
            label={isOpen ? 'Close menu' : 'Open menu'}
          />
        </div>

        <div
          id="site-nav-panel"
          className={`site-nav__panel${isOpen ? ' site-nav__panel--open' : ''}`}
        >
          <div className="site-nav__anchors">
            {SECTION_LINKS.map(({ hash, label }) => (
              <a key={hash} href={sectionHref(hash)} onClick={close}>{label}</a>
            ))}
          </div>
          <div className="site-nav__divider" />
          <div className="site-nav__pages">
            {PAGE_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`btn btn-secondary${pathname === to ? ' site-nav__page--active' : ''}`}
                aria-current={pathname === to ? 'page' : undefined}
                onClick={close}
              >
                {label}
              </Link>
            ))}
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
