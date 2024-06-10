import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/ProjectsDocumentation";
import Main from "./components/pages/Main";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
