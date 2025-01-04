import React, { Fragment, useState } from "react";
import "./Experience.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ReactGA from "react-ga4";
import { Chip } from "@mui/material";

let experiencesData = [
  {
    date: "January 2024 -  Present",
    title: "HungerFord Properties",
    role: "Freelance Contractor | Vancouver, BC",
    description:
      "I worked with HungerFord Properties to develop a web automation script to gather, clean, and present jobs data from various job boards online. For this project I created the scraper using JavaScript and Puppeteer.js. With quality feedback and iterative development, I delivered a robust solution that reduced hours of manual data entry to sub 45 minute code runtime.",
    skills: ["Puppeteer.js", "Node.js"],
    type: "work",
  },
  {
    date: "October 2023 - Dec 2023",
    title: "Meta Marketing Analytics Professional Certificate",
    role: "Student | Coursera",
    courses: [
      "Introduction to Data Analytics",
      "Data Analysis with Spreadsheets and SQL",
      "Data Analytics Methods for Marketing",
      "Marketing Analytics Foundation",
      "Marketing Analytics with Meta",
      "Python Data Analytics",
      "Statistics for Marketing",
    ],
    skills: [],
    type: "school",
  },
  {
    date: "Jan 2022 - May 2022",
    title: "University of Waterloo",
    role: "Student | Waterloo, Ontario",
    courses: [
      "Production and Service Operations Management",
      "Mechatronics Engineering Project",
      "Foundations of Artificial Intelligence",
      "User Centred Design Methods",
    ],
    skills: [],
    type: "school",
  },
  {
    date: "Sep 2021 - Dec 2021",
    title: "University of Waterloo",
    role: "Student | Waterloo, Ontario",
    courses: [
      "Digital Control Applications",
      "Introduction to Optimization",
      "Mechatronics Engineering Design Project",
      "Cognitive Ergonomics",
      "Classical Mythology",
    ],
    skills: [],
    type: "school",
  },
  {
    date: "May 2021 - August 2021",
    title: "Dozr",
    role: "Developer | Kitchener, Waterloo",
    description:
      "While working at Dozr, I maintained and improved a high-traffic React web interface, deploying bug fixes and implementing new features. I also led the overhaul of the email system, enhancing backend infrastructure and redesigning the format. Additionally, I played a key role in re-implementing a customer's order tracking page with reusable React components. Collaboration with cross-functional teams ensured seamless integration and alignment with project goals.",
    skills: ["React", "CSS", "Node.js", "MongoDB"],
    type: "work",
  },
  {
    date: "Jan 2021 - May 2021",
    title: "University of Waterloo",
    role: "Student | Waterloo, Ontario",
    courses: [
      "Fluid Mechanics 1",
      "Engineering Economics",
      "Electromechanical Machine Design",
      "Automatic Control Systems",
      "Mechatronics Engineering Design Workshop",
    ],
    skills: [],
    type: "school",
  },
  {
    date: "Sep 2020 - Dec 2020",
    title: "University of Waterloo",
    role: "Student | Waterloo, Ontario",
    courses: ["Society, Technology, and Values", "History and Film", "Research in the Workplace"],
    skills: [],
    type: "school",
  },
  {
    date: "May 2020 - Sep 2020",
    title: "University of Waterloo",
    role: "Student | Waterloo, Ontario",
    courses: [
      "Kinematics and Dynamics of Machines",
      "Introduction to Thermodynamics and Heat Transfer",
      "Actuators and Power Electronics",
      "Microprocessor Systems and Interfacing for Mechatronics Engineering",
      "Systems Models 1",
    ],
    skills: [],
    type: "school",
  },
  {
    date: "Jan 2020 - May 2020",
    title: "BenQ",
    role: "Developer | Taipei, Taiwan",
    description:
      "For my second Co-op at Benq, I prototyped streaming broadcast systems using experimental technologies like WebRTC and socket.io to explore real-time streaming possibilities. I also implemented China-compliant web analytics tools, ensuring accurate user tracking within the Chinese market. With technical expertise and collaboration, I drove innovation, met regulatory requirements, and delivered high-quality solutions.",
    skills: ["WebRTC", "React", "Node.js", "Socket.io"],
    type: "work",
  },
  {
    date: "Sep 2019 - Dec 2019",
    title: "University of Waterloo",
    role: "Student | Waterloo, Ontario",
    courses: [
      "Advanced Calculus",
      "Numerical Methods",
      "Sensors and Instrumentation",
      "Introduction to Computer Structures and Real-Time Systems",
      "Linear Systems and Signals",
    ],
    skills: [],
    type: "school",
  },
  {
    date: "May 2019 - Sep 2019",
    title: "BenQ",
    role: "Developer | Taipei, Taiwan",
    description:
      "Working at BenQ, I improved QA department velocity by developing a streamlined Chrome extension for error reporting in the Mantis bug tracking tool.  This simplified bug capture, accelerating issue identification and resolution.  Additionally, I enhanced the Mention social media marketing tool, empowering the team to address user feedback effectively by analyzing and categorizing it for quick response and strategy adaptation.  I also automated the transfer and integration of user data from Eloqua to Salesforce, enhancing efficiency and accuracy in analyzing campaign performance. Throughout these initiatives, I utilized my technical expertise to collaborate with cross-functional teams, driving productivity, enhancing user experiences, and optimizing marketing efforts.",
    skills: ["React", "Node.js"],
    type: "work",
  },
  {
    date: "Jan 2019 - May 2019",
    title: "University of Waterloo",
    role: "Student | Waterloo, Ontario",
    courses: [
      "Experimental Measurements and Statistical Analysis",
      "Ordinary Differential Equations",
      "Mechanics of Deformable Solids",
      "Introduction to Microprocessors and Digital Logic",
      "Physics 2 (Dynamics)",
    ],
    skills: [],
    type: "school",
  },
  {
    date: "Sep 2018 - Dec 2018",
    title: "Newtopia",
    role: "Developer | Toronto, Canada",
    description:
      "In my role, I made significant contributions to code quality and user experience. I designed and implemented a Redux-based logging system for powerful error handling and user engagement insights. Additionally, I refactored the mobile app's endpoint, added JSDoc documentation, and improved efficiency. I also wrote comprehensive Jest unit tests, increasing code coverage to 90%. Furthermore, I actively addressed critical bugs, contributing to third-party open-source dependencies. These efforts enhanced software reliability, stability, and user satisfaction.",
    skills: ["React", "React Native", "Jest"],
    type: "work",
  },
  {
    date: "May 2018 - September 2018",
    title: "University of Waterloo",
    role: "Student | Waterloo, Ontario",
    courses: [
      "Calculus 2 for Engineering",
      "Structure and Properties of Materials",
      "Statics",
      "Circuits",
      "Algorithms and Data Structures",
    ],
    skills: [],
    type: "school",
  },
  {
    date: "Jan 2018 - May 2018",
    title: "Developer | Toronto, Canada",
    role: "Jan 2018 - May 2018",
    description:
      "I collaborated on developing React functionality for a globally marketed website commissioned by WWF. The website aimed to promote environmental awareness through aggregated social media content.  Leveraging React, I helped create engaging features and a user-friendly platform for displaying social media content. This collaborative project had a powerful impact on raising environmental consciousness on a global scale.",
    skills: ["React"],
    type: "work",
  },
  {
    date: "Sep 2017 - Dec 2017",
    title: "University of Waterloo",
    role: "Student | Waterloo, Ontario",
    courses: [
      "Chemistry for Engineers",
      "Digital Computation",
      "Linear Algebra for Engineering",
      "Calculus 1 for Engineering",
      "Mechatronics Engineering",
    ],
    skills: [],
    type: "school",
  },
];

function Experience() {
  const [filter, setFilter] = useState("all");
  const [bgColor, setBgColor] = useState({
    all: "#4FD1C5",
    work: "transparent",
    school: "transparent",
  });

  const handleFilterChange = (filter) => {
    setFilter(filter);
    setBgColor(() => ({
      all: "transparent",
      work: "transparent",
      school: "transparent",
      [filter]: "#4FD1C5",
    }));

    ReactGA.event({
      category: "Filter",
      action: "Click",
      label: `Filter Experience to ${filter}`,
    });
  };

  return (
    <Fragment>
      <div className="experience-header">
        <h1>Experience</h1>
      </div>
      <div className="experience-filter-toggle">
        <div style={{ backgroundColor: bgColor.all }} onClick={() => handleFilterChange("all")}>
          All
        </div>
        <div style={{ backgroundColor: bgColor.work }} onClick={() => handleFilterChange("work")}>
          Work
        </div>
        <div style={{ backgroundColor: bgColor.school }} onClick={() => handleFilterChange("school")}>
          School
        </div>
      </div>
      <VerticalTimeline animate={true}>
        {experiencesData.map((experience, index) => {
          // Now we want to use state to filter the experiences based on the button toggle
          // If the filter is 'all', we want to show all experiences
          // If the filter is 'work', we want to show only work experiences
          // If the filter is 'school', we want to show only school experiences
          // We can use the filter state to determine which experiences to show
          if (experience.type === filter || filter === "all") {
            return (
              <VerticalTimelineElement
                key={experience.date}
                date={experience.date}
                contentStyle={{ borderRadius: "1em" }}
                iconStyle={
                  index === 0
                    ? { background: "rgb(233, 30, 99)", color: "#fff" }
                    : { background: "rgb(33, 150, 243)", color: "#fff" }
                }
                icon={experience.type === "work" ? <WorkOutlineOutlinedIcon /> : <SchoolOutlinedIcon />}
              >
                <h3>{experience.title}</h3>
                <h4>{experience.role}</h4>
                {experience.description && <p>{experience.description}</p>}
                {experience.courses && (
                  <ul>
                    {experience.courses.map((course, index) => (
                      <li>{course}</li>
                    ))}
                  </ul>
                )}
                {experience.skills.length !== 0 && (
                  <div className="experience-skills-bar">
                    {experience.skills.map((skill, index) => (
                      <Chip label={skill} />
                    ))}
                  </div>
                )}
              </VerticalTimelineElement>
            );
          } else {
            return null;
          }
        })}
      </VerticalTimeline>
    </Fragment>
  );
}

export default Experience;
