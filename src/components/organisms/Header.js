import React, { useEffect } from "react";
import Switch from "@mui/material/Switch";
import IconDash from "../molecules/IconDash";
import { isMobile } from "react-device-detect";
import PropTypes from "prop-types";
import ReactGA from "react-ga4";
import "./Header.css";

export default function Header(props) {
  const [mouseEntered, setMouseEntered] = React.useState(false);
  const [initialHeaderState, setInitialHeaderState] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      // If mobile we just leave header
      if (!isMobile) setInitialHeaderState(false);
    }, 1000);
  }, []);

  const toggleSwitch = () => {
    props.toggleDarkMode();

    ReactGA.event({
      category: "Toggle",
      action: "Click",
      Label: `Toggle Appearance to ${props.darkMode ? "Light" : "Dark"}`,
    });
  };

  return (
    <div
      className="app-header"
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
      style={!initialHeaderState ? (mouseEntered ? { opacity: 1 } : { opacity: 0 }) : { opacity: 1 }}
    >
      <IconDash>
        <div className="theme-toggle">
          <Switch onClick={toggleSwitch} aria-labelledby="Dark Mode Toggle">
            {props.darkMode ? "Light Mode" : "Dark Mode"}
          </Switch>
        </div>
      </IconDash>
    </div>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
