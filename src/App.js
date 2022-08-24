import './App.css';
import linkedIn from './linkedin-logo.png'
import github from './github.png'
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="nav">
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
          to="/skills" 
          className='nav-links-others nav-link'
        >
          Skills
        </NavLink>
        <NavLink 
          style={(isActive) => {
            return { 
              color: isActive.isActive ? "#0088a9" : "inherit"
            }
          }}
          to="/projects" 
          className='nav-links-others nav-link'
        >
          Projects
        </NavLink>
        <NavLink 
          style={(isActive) => {
            return { 
              color: isActive.isActive ? "#0088a9" : "inherit"
            }
          }}
          to="/resume" 
          className='nav-links-others nav-link'
        >
          Resume
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
