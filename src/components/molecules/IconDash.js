import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "./IconDash.css"

export default function IconDash() {
  return (
   <div className="app-header-contact">
      <a aria-label="LinkedIn Link" alt="LinkedIn Link" href="https://www.linkedin.com/in/brianchangtron/"><LinkedInIcon/></a>
      <a aria-label="Github Link" alt="Github Link" href="https://www.github.com/BChangs99"><GitHubIcon/></a>
      <a aria-label="Email Link" alt="Email Link" href="mailto:bchangs778@gmail.com"><EmailIcon/></a>
   </div>
  )
}
