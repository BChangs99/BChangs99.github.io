import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Resume.css";
import ReactGA from "react-ga4";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LaptopIcon from "@mui/icons-material/Laptop";
import { Fragment } from "react";
import BrianChangResume from "../../assets/BChangsResume.pdf";
import { Chip } from "@mui/material";

export default function Resume() {
  const handleDownloadOnClick = () => {
    // Log the click event to GA
    ReactGA.event({
      category: "Download",
      action: "Click",
      label: "Resume",
    });
  };

  const logClick = (link) => {
    ReactGA.event({
      category: "Resume Link",
      action: "click",
      Label: `${link}`,
    });
  };

  return (
    <Fragment>
      <a
        href={BrianChangResume}
        download="BrianChangResume"
        onClick={handleDownloadOnClick}
        className="resume-download-button-container"
      >
        Click here to download the resume below!
      </a>
      <div className="resume-container">
        <div className="resume-header">
          <div className="resume-header-name">Brian Chang</div>
          <div className="resume-header-links">
            <a href="https://github.com/BChangs99" target="_blank" onClick={() => logClick("Github")}>
              {" "}
              <GitHubIcon />
              github.com/bchangs99
            </a>
            <a href="https://www.linkedin.com/in/bchangs/" target="_blank" onClick={() => logClick("LinkedIn")}>
              {" "}
              <LinkedInIcon />
              linkedin.com/in/bchangs
            </a>
            <a onClick={() => logClick("Email")}>
              {" "}
              <EmailIcon />
              bchangs778@gmail.com
            </a>
            <NavLink to="/" onClick={() => logClick("Return Home")}>
              <LaptopIcon />
              bchangs99.github.io
            </NavLink>
          </div>
        </div>
        <div className="resume-skills-education-section">
          <div className="resume-skills-container">
            <div className="resume-skills-header">Skills</div>
            <div className="resume-skills-holder">
              <div className="resume-skills-section frontend-section">
                <div className="resume-skills-section-title">Frontend:</div>
                <div className="resume-skills-section-skills-holder">
                  <div className="resume-skills-section-skill">React</div>
                  <div className="resume-skills-section-skill">React-Router</div>
                  <div className="resume-skills-section-skill">React-Redux</div>
                  <div className="resume-skills-section-skill">Next.js</div>
                  <div className="resume-skills-section-skill">TypeScript</div>
                  <div className="resume-skills-section-skill">MaterialUI</div>
                  <div className="resume-skills-section-skill">Ant Design</div>
                  <div className="resume-skills-section-skill">Tailwind</div>
                </div>
              </div>
              <div className="resume-skills-section">
                <div className="resume-skills-section-title">Languages:</div>
                <div className="resume-skills-section-skills-holder">
                  <div className="resume-skills-section-skill">JavaScript</div>
                  <div className="resume-skills-section-skill">Python</div>
                  <div className="resume-skills-section-skill">HTML/CSS</div>
                  <div className="resume-skills-section-skill">C++</div>
                </div>
              </div>
              <div className="resume-skills-section">
                <div className="resume-skills-section-title">Backend:</div>
                <div className="resume-skills-section-skills-holder">
                  <div className="resume-skills-section-skill">Node.js</div>
                  <div className="resume-skills-section-skill">Express.js</div>
                  <div className="resume-skills-section-skill">MongoDB</div>
                </div>
              </div>
              <div className="resume-skills-section devTools-section">
                <div className="resume-skills-section-title">Dev Tools:</div>
                <div className="resume-skills-section-skills-holder">
                  <div className="resume-skills-section-skill">Git</div>
                  <div className="resume-skills-section-skill">Puppeteer</div>
                  <div className="resume-skills-section-skill">Jest</div>
                  <div className="resume-skills-section-skill">Postman</div>
                  <div className="resume-skills-section-skill">NVDA/JAWS</div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-education">
            <div className="resume-education-header">Education</div>
            <div className="resume-education-school">University of British Columbia | Masters of Data Science </div>
            <div className="resume-education-bolding">Cumulative GPA: 93</div>
            <div className="resume-education-bolding">Relevant Courses:</div>
            <div className="resume-education-courses-container-small">
              <div>DSCI 571: Supervised Learning</div> <div>DSCI 531: Data Visualization</div>{" "}
            </div>
            <div className="resume-education-school">
              University of Waterloo | Mechatronics Honours | Bachelors of Engineering
            </div>
            <div className="resume-education-bolding">Cumulative GPA: 85</div>
            <div className="resume-education-bolding">Relevant Courses:</div>
            <div className="resume-education-courses-container">
              <div>SYDE 522: Foundations of Artificial Intelligience</div>
              <div>MTE 140: Data Structures & Algorithms</div>
              <div>MTE 262: Microprocessors & Digital Logic</div>
              <div>GENE 121: Digital Computation</div>
              <div>SYDE 548: User Centered Design Methods</div>
              <div>SYDE 543: Cognitive Ergonomics</div>
              {/* <div>ECE 484: Digital Control Applications</div> */}
              {/* <div>MTE 325: Microprocessor Systems and Interfacing for Mechatronics Engineering</div> */}
            </div>
            {/* <div className="resume-education-school">Meta Marketing Analytics Professional Certificate Course</div>
            <div className="resume-education-bolding">Relevant Courses:</div>
            <div className="resume-education-courses-container-small">
              <div>Data Analytics Methods for Marketing</div> <div>Statistics for Marketing</div>{" "}
              <div>Python Data Analytics</div> <div>Data Analysis with Spreadsheets and SQL</div>
            </div> */}
          </div>
        </div>
        <div className="resume-experience">
          <div className="resume-experience-header">Experience</div>
          <div className="resume-experience-employer">
            Freelance Developer
            <div className="resume-experience-details">
              [ December 2023 - Present | <LocationOnIcon className="resume-location-icon" /> Remote ]
            </div>
            <div className="resume-experience-chips">
              <Chip className="chip" label="Node.js" size="middle" />
              <Chip className="chip" label="Puppeteer.js" size="middle" />
              <Chip className="chip" label="Git" size="middle" />
            </div>
          </div>
          <div className="resume-freelance-subsection">Real Estate Report Extraction</div>
          <ul className="resume-list-container">
            <li>
              Developed a Node.js solution to automate data extraction from real estate reports using pixel positioning,
              eliminating on average 4 hours of manual time, then standardizing the data into a user-friendly CSV format
              for visualization.
            </li>
            <li>
              Collaborated closely with project stakeholders to create scalable and versatile solutions for handling
              missing and outdated data, enabling future data aggregation across various real estate markets.
            </li>
          </ul>
          <div className="resume-freelance-subsection">Jobs Data Web Scraper</div>
          <ul className="resume-list-container">
            <li>
              Led a web automation project for a multi-million-dollar real estate firm to gather job postings across
              Greater Vancouver, developing custom scraping scripts with Puppeteer to gather postings by industry,
              salary, location, and remote work availability.
            </li>
            <li>
              Optimized scraping algorithms to reduce runtime by 50% from 1.5 hours to 45 minutes and implemented a
              modular code structure for scalability, while coordinating with stakeholders to continuously refine
              project requirements.
            </li>
          </ul>
          <div className="resume-experience-employer">
            Dozr
            <div className="resume-experience-details">
              [ Developer | May - September 2021 | {<LocationOnIcon className="resume-location-icon" />} Kitchener,
              Canada ]
            </div>
            <div className="resume-experience-chips">
              <Chip className="chip" label="Node.js" size="middle" />
              <Chip className="chip" label="EJS" size="middle" />
              <Chip className="chip" label="MongoDB" size="middle" />
              <Chip className="chip" label="React" size="middle" />
              <Chip className="chip" label="React-Redux" size="middle" />
              <Chip className="chip" label="TypeScript" size="middle" />
              <Chip className="chip" label="Postman" size="middle" />
              <Chip className="chip" label="Git" size="middle" />
            </div>
          </div>
          <ul className="resume-list-container">
            <li>
              Solely accomplished overhaul of the Node.js backend and EJS email infrastructure, resulting in
              consolidation of follow-up emails for purchases across all Front-end platforms, accelerated completion to
              under 1 month for shareholder presentation.{" "}
            </li>
            <li>
              Re-implemented user purchase tracking, creating new order summary pages using React and Node.js,
              delivering a production-ready front end within 2 weeks.
            </li>
            <li>
              Fully implemented user analytics through tools such as Google Analytics and Bing Ad Conversion, connecting
              all user interactions within Dozr's primary ecommerce platform to the company's CRM for future marketing
              campaigns.
            </li>
          </ul>
          <div className="resume-experience-employer">
            BenQ{" "}
            <div className="resume-experience-details">
              [ Developer | May - August 2019 & January - April 2020 |{" "}
              {<LocationOnIcon className="resume-location-icon" />} Taipei, Taiwan ]
            </div>
            <div className="resume-experience-chips">
              <Chip className="chip" label="Node.js" size="middle" />
              <Chip className="chip" label="React" size="middle" />
              <Chip className="chip" label="Socket.io" size="middle" />
              <Chip className="chip" label="WebRTC" size="middle" />
              <Chip className="chip" label="Git" size="middle" />
            </div>
          </div>
          <ul className="resume-list-container">
            <li>
              Developed an extensive chrome extension for Mantis Bug tracker using React and JS, accelerating QA team
              velocity and reducing daily time spent reporting bugs by 10% (48 minutes).
            </li>
            <li>
              Prototyped stream broadcasting services using WebRTC and Socket.io, completing versatile proof of concepts
              within 1 month for presentation to multiple product leads.
            </li>
          </ul>
          <div className="resume-experience-employer">
            Newtopia{" "}
            <div className="resume-experience-details">
              [ Developer | September - December 2018 | {<LocationOnIcon className="resume-location-icon" />} Toronto,
              Canada ]
            </div>
            <div className="resume-experience-chips">
              <Chip className="chip" label="React" size="middle" />
              <Chip className="chip" label="React Native" size="middle" />
              <Chip className="chip" label="React Redux" size="middle" />
              <Chip className="chip" label="Jest" size="middle" />
              <Chip className="chip" label="Git" size="middle" />
            </div>
          </div>
          <ul className="resume-list-container">
            <li>
              Achieved improved error handling and user engagement by designing, creating, and implementing a
              Redux-based log for developer observation.
            </li>
            <li>
              Increased efficiency and compatibility of the mobile app's endpoint by refactoring and adding JSDoc
              documentation to all endpoints
            </li>
            <li>
              Enhanced code coverage from 80% to 90% of the entire code base by writing nearly 100 unit tests using
              Jest.
            </li>
            <li>
              Ensured WCAG compliance with accessibility enhancements across 20 web pages, as well conducted meticulous
              NVDA and JAWS screen reader testing, resolving all issues within 3 weeks.
            </li>
            <li>
              Routinely fixed critical bugs, including forking 3rd-party open source dependencies and
              editing/contributing to their code.
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
