import './App.css';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import usePageTracking from './usePageTracking';
import { Burger } from './Burger';
import BurgerMenu from './BurgerMenu';
import { handleResumeOnClick } from './shared';

function App() {
  usePageTracking();

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Burger />
      <BurgerMenu handleResumeOnClick={handleResumeOnClick} />
      <div 
        style={{ color: "black" }}
        onClick={toggleDarkMode}
      >
        Button
      </div>
      {/* <nav className="nav">
        <NavLink 
          style={(isActive) => {
            return { 
              color: isActive.isActive ? "#0088a9" : "inherit"
            }
          }}
          to="/" 
          className='nav-link-home nav-link'
        >
          BChangs
        </NavLink>
        <a href="https://www.linkedin.com/in/brianchangtron/"><img className='nav-linkedin' src={linkedIn} alt="Linked In"/></a>
        <a href="https://github.com/BChangs99"><img className='nav-github' src={github} alt="Github"/></a>
        <div className="nav-breaker"></div>
        <NavLink 
          style={(isActive) => {
            return { 
              color: isActive.isActive ? "#0088a9" : "inherit"
            }
          }}
          to="/resume" 
          className='nav-links-others nav-link'
          onClick={handleResumeOnClick}
        >
          Resume
        </NavLink>
      </nav> */}
      <Outlet />
      <footer className='footer'>
        <div className='footer-text'>
          Resource Credits
          <ul className='footer-text-links'>
            <li><a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/download" title="download icons">Download icons created by Debi Alpa Nugraha - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/internet" title="internet icons">Internet icons created by Freepik - Flaticon</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
