import React from 'react'
import { NavLink } from 'react-router-dom';
import "./BurgerMenu.css"
import PropTypes from 'prop-types'

const BurgerMenu = props => {
  function burgerMenuCloseHandler() {
    let burgerMenuStyles = document.querySelector(".burger-menu-holder");
    burgerMenuStyles.classList.remove("open");
  }

  function handleResumeOnClick() {
    burgerMenuCloseHandler();
    props.handleResumeOnClick();
  }

  return (
    <div className='burger-menu-holder'>
      <div className='burger-menu'>
      <div 
        className='burger-menu-close'
        onClick={burgerMenuCloseHandler}
        >
      </div>
        <div className='burger-menu-text-holder'>
          <NavLink 
            to="/" 
            className='burger-menu-home'
            onClick={burgerMenuCloseHandler}
          >
            BChangs
          </NavLink>
          <a href="https://www.linkedin.com/in/brianchangtron/" className="burger-menu-linkedin">Linkedin</a>
          <a href="https://github.com/BChangs99" className="burger-menu-github">Github</a>
          <NavLink 
          to="/resume" 
          className='burger-menu-resume'
          onClick={handleResumeOnClick}
        >
          Resume
        </NavLink>
        </div>
      </div>
      <div 
        className='burger-menu-overlay'
        onClick={burgerMenuCloseHandler}
      ></div>
    </div>
  )
}

BurgerMenu.propTypes = {
  handleResumeOnClick: PropTypes.func.isRequired,
}

export default BurgerMenu