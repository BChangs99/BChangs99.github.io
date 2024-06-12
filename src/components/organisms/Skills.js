import React, { useState } from "react";
import ReactGA from "react-ga4";
import "./skills.css";

export default function Skills() {
  const [bgColor, setBgColor] = useState({
    languages: "#f4a548",
    frontendTech: "#f4a548",
    devTools: "#f4a548",
    backendTech: "#f4a548",
  });

  const [filter, setFilter] = useState({
    languages: true,
    frontendTech: true,
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
      [selectedFilter]: !isCurrentlyActive ? "#f4a548" : "#3c7a89",
    }));

    ReactGA.event({
      category: "Skills",
      action: `Click`,
      label: selectedFilter,
    });
  };

  const skills = {
    languages: ["React (JSX)", "JavaScript", "HTML/CSS", "Node.js", "C++", "Python", "Assembly"],
    frontendTech: ["React-Router", "React-Redux", "MaterialUI", "Ant Design", "Tailwind", "Next.js"],
    devTools: ["Git", "GitHub", "VSCode", "Postman", "Jest"],
    backendTech: ["Express", "MongoDB", "Mongoose", "RESTful APIs"],
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
