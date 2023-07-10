import React from 'react'
import Burger from '../atoms/Burger';
import BurgerMenu from '../molecules/BurgerMenu';
import Switch from '@mui/material/Switch';
import IconDash from '../molecules/IconDash';
import { handleResumeOnClick } from '../../shared';
import PropTypes from 'prop-types';
import "./Header.css"

export default function Header(props) {
  return (
   <div className='app-header'>
      <Burger />
      <BurgerMenu handleResumeOnClick={handleResumeOnClick} />
      <IconDash/>
      <div className="theme-toggle">
         <Switch 
            onClick={props.toggleDarkMode}
            aria-labelledby="Dark Mode Toggle"
         >
            {props.darkMode ? "Light Mode" : "Dark Mode"}
         </Switch>
      </div>
   </div>
  )
}

Header.propTypes = {
   darkMode: PropTypes.bool.isRequired,
   toggleDarkMode: PropTypes.func.isRequired,
}

