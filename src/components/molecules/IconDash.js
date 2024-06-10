import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import ReactGA from "react-ga4";
import { handleResumeOnClick } from "../../shared";
import "./IconDash.css";

export default function IconDash(props) {
  const logClick = (link) => {
    ReactGA.event({
      category: "Icon",
      action: "click",
      Label: `${link}`,
    });
  };

  return (
    <div className="app-header-contact">
      <NavLink to="/" onClick={() => logClick("Return Home")}>
        <HomeIcon />
      </NavLink>
      <a
        aria-label="LinkedIn Link"
        alt="LinkedIn Link"
        href="https://www.linkedin.com/in/brianchangtron/"
        onClick={() => logClick("LinkedIn")}
      >
        <LinkedInIcon />
      </a>
      <a
        aria-label="Github Link"
        alt="Github Link"
        href="https://www.github.com/BChangs99"
        onClick={() => logClick("GitHub")}
      >
        <GitHubIcon />
      </a>
      <a aria-label="Email Link" alt="Email Link" href="mailto:bchangs778@gmail.com" onClick={() => logClick("Email")}>
        <EmailIcon />
      </a>
      <NavLink to="/resume" onClick={() => handleResumeOnClick("Icon")}>
        <ArticleIcon />
      </NavLink>
      {props.children}
    </div>
  );
}
