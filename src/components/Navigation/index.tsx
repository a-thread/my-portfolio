import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const onHome = pathname === '/';
  const close = () => setIsOpen(false);

  // Plain `#hash` hrefs collide with HashRouter's own routing (it tries to
  // match the fragment as a path and unmounts everything when it can't), so
  // section links are handled entirely in JS: scroll directly when already on
  // the home page, or navigate there and let HomePage scroll after mount.
  const goToSection = (hash: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    close();
    if (onHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: hash } });
    }
  };

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
              <a key={hash} href="/" onClick={goToSection(hash)}>{label}</a>
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
