import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import usePageTracking from './usePageTracking';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

function App() {
  usePageTracking();

  // This defaults the dark mode to the user's system preference
  const darkModeInitialState = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(darkModeInitialState);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      {/* Created another div w/ classname app-background for hacky way to invert background color */}
      <div className="app-background">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
