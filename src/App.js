import "./App.css";
import { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

function App() {
  const location = useLocation();

  // This defaults the dark mode to the user's system preference
  const darkModeInitialState = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(darkModeInitialState);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    ReactGA.initialize("G-Z428J6SS1Z");
  }, [location]);

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      {/* Created another div w/ classname app-background for hacky way to invert background color */}
      <div className="app-background">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
