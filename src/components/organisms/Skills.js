import React, { useState } from "react";
import ReactGA from "react-ga4";
import "./skills.css";

export default function Skills() {
  const [bgColor, setBgColor] = useState({
    languages: "#4FD1C5",
    frontendTech: "#4FD1C5",
    dataScience: "#4FD1C5",
    devTools: "#4FD1C5",
    backendTech: "#4FD1C5",
  });

  const [filter, setFilter] = useState({
    languages: true,
    frontendTech: true,
    dataScience: true,
    devTools: true,
    backendTech: true,
  });

  const handleFilterChange = (selectedFilter) => {
    const isCurrentlyActive = filter[selectedFilter];

    setFilter((prevFilter) => ({
      ...prevFilter,
      [selectedFilter]: !isCurrentlyActive,
    }));

    setBgColor((prevBgColor) => ({
      ...prevBgColor,
      [selectedFilter]: !isCurrentlyActive ? "#4FD1C5" : "#3c7a89",
    }));

    ReactGA.event({
      category: "Skills",
      action: `Click`,
      label: selectedFilter,
    });
  };

  const skills = {
    languages: ["JavaScript", "Python", "HTML/CSS", "R", "C++", "Assembly"],
    frontendTech: ["React", "React-Router", "React-Redux", "MaterialUI", "Ant Design", "Tailwind", "Next.js", "D3.js"],
    dataScience: ['Sci-Kit Learn', "Quarto", "Altair", "ggplot2"],
    devTools: ["Git", "GitHub", "Postman", "Docker", "Jest", "Pytest",  "VSCode"],
    backendTech: ["Node.js", "Express", "MongoDB", "Mongoose", "PyMongo", "PostgreSQL"],
  };

  return (
    <div className="main-skills-container">
      <h1>Skills</h1>
      <div className="skills-grid-container">
        {Object.keys(filter).map((filterKey) => (
          <div
            key={filterKey}
            className="skills-filter"
            style={{ backgroundColor: bgColor[filterKey] }}
            onClick={() => handleFilterChange(filterKey)}
          >
            {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
          </div>
        ))}
        {Object.keys(skills).map((skillKey) => (
          <div key={skillKey} className="skills-container">
            {skills[skillKey].map((skill, index) => (
              <div key={index} className={`skill ${filter[skillKey] ? "" : "hidden"}`}>
                {skill}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
