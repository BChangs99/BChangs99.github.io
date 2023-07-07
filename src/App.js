import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import usePageTracking from './usePageTracking';
import { Burger } from './Burger';
import BurgerMenu from './BurgerMenu';
import { handleResumeOnClick } from './shared';
import Switch from '@mui/material/Switch';

function App() {
  usePageTracking();

  // This defaults the dark mode to the user's system preference
  const darkModeInitialState = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(darkModeInitialState);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // ToDo
  //Extrapolate header into own component
  // Organize components by atom, molecule, etc.
  return (
    <div className={darkMode ? "App dark-mode" : "App light-mode"}>
      {/* Created another div w/ classname app-background for hacky way to invert background color */}
      <div className="app-background">
        <div className='app-header'>
          <Burger />
          <BurgerMenu handleResumeOnClick={handleResumeOnClick} />
          <div className="theme-toggle">
            <Switch 
              onClick={toggleDarkMode}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Switch>
          </div>
        </div>
        {/* <nv className="nav">
          <NavLink 
            style={(isActive) => {
              return { 
                color: isActive.isActive ? "#3C7A89" : "inherit"
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
                color: isActive.isActive ? "#3C7A89" : "inherit"
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
    </div>
  );
}

export default App;
