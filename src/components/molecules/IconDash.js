import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import "./IconDash.css"

export default function IconDash(props) {
  return (
   <div className="app-header-contact">
      <NavLink to="/"><HomeIcon /></NavLink>
      <a aria-label="LinkedIn Link" alt="LinkedIn Link" href="https://www.linkedin.com/in/brianchangtron/"><LinkedInIcon/></a>
      <a aria-label="Github Link" alt="Github Link" href="https://www.github.com/BChangs99"><GitHubIcon/></a>
      <a aria-label="Email Link" alt="Email Link" href="mailto:bchangs778@gmail.com"><EmailIcon/></a>
      <NavLink to="/resume"><ArticleIcon /></NavLink>
      {props.children}
   </div>
  )
}
