import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import { DarkModeProvider, useDarkMode } from "./contexts/DarkModeContext";
import "./App.css"; // Import your CSS file here

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-Z428J6SS1Z");
  }, [location]);

  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

function AppContent() {
  const { darkMode } = useDarkMode();
  console.log(darkMode, "darkMode");

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      {/* Created another div w/ classname app-background for hacky way to invert background color */}
      <div className="app-background">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
