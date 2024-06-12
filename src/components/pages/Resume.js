import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Resume.css";
import ReactGA from "react-ga4";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LaptopIcon from "@mui/icons-material/Laptop";
import { Fragment } from "react";
import LinkIcon from "@mui/icons-material/Link";
import BrianChangResume from "../../assets/BChangsResume.pdf";

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
            <a href="https://www.linkedin.com/in/brianchangtron/" target="_blank" onClick={() => logClick("LinkedIn")}>
              {" "}
              <LinkedInIcon />
              linkedin.com/in/brianchangtron
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
        <div className="resume-left">
          <div className="resume-skills-container">
            <div className="resume-skills-header">Skills</div>
            <div className="resume-skills-holder">
              <div className="resume-skills-section">
                <div className="resume-skills-section-title">Languages:</div>
                <div className="resume-skills-section-skills-holder">
                  <div className="resume-skills-section-skill">React</div>
                  <div className="resume-skills-section-skill">HTML/CSS</div>
                  <div className="resume-skills-section-skill">JavaScript</div>
                  <div className="resume-skills-section-skill">TypeScript</div>
                  <div className="resume-skills-section-skill">Node.js</div>
                  <div className="resume-skills-section-skill">Python</div>
                  <div className="resume-skills-section-skill">C++</div>
                  <div className="resume-skills-section-skill">Assembly</div>
                </div>
              </div>
              <div className="resume-skills-section">
                <div className="resume-skills-section-title">Frontend Tech:</div>
                <div className="resume-skills-section-skills-holder">
                  <div className="resume-skills-section-skill">React-Router</div>
                  <div className="resume-skills-section-skill">React-Redux</div>
                  <div className="resume-skills-section-skill">MaterialUI</div>
                  <div className="resume-skills-section-skill">Ant Design</div>
                  <div className="resume-skills-section-skill">Tailwind</div>
                  <div className="resume-skills-section-skill">Next.js</div>
                </div>
              </div>
              <div className="resume-skills-section">
                <div className="resume-skills-section-title">Dev Tools:</div>
                <div className="resume-skills-section-skills-holder">
                  <div className="resume-skills-section-skill">Git</div>
                  <div className="resume-skills-section-skill">Puppeteer</div>
                  <div className="resume-skills-section-skill">Jest</div>
                  <div className="resume-skills-section-skill">Postman</div>
                </div>
              </div>
              <div className="resume-skills-section">
                <div className="resume-skills-section-title">Backend Tech:</div>
                <div className="resume-skills-section-skills-holder">
                  <div className="resume-skills-section-skill">Node.js</div>
                  <div className="resume-skills-section-skill">Express.js</div>
                  <div className="resume-skills-section-skill">MongoDB</div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-projects-container">
            <div className="resume-projects-header">Projects</div>
            <div className="resume-project-header">
              Real Estate Report Extraction
              <LinkIcon />
            </div>
            <ul className="resume-list-container">
              <li>
                Commissioned to automate the data extraction process from real estate reports, converting hours long
                manual operations into an instant task within 25 hours of development time
              </li>
              <li>
                Using Node.js, meticulously extracted data from PDFs using pixel positioning and referenced text data,
                leading to a reliable aggregation of real estate data
              </li>
              <li>
                Following data extraction, refined and standardized the data format for user-friendly interpretation,
                converting into a universally accessible CSV format
              </li>
              <li>
                Collaborated closely with contractors to innovate unique solutions for handling scenarios involving
                missing and outdated data
              </li>
              <li>
                Designed with scalability and versatility in mind, allowing future avenues for data aggregation of
                multiple real estate reports across different markets
              </li>
            </ul>
            <div className="resume-project-header">
              Jobs Data Web Scraper
              <LinkIcon />
            </div>
            <ul className="resume-list-container">
              <li>
                Led a web automation project for a multi-million dollar real estate firm to gather job postings across
                Greater Vancouver.
              </li>
              <li>
                Limited by available APIs, developed custom scraping scripts to extract and categorize postings by
                industry, salary, and remote options
              </li>
              <li>
                Optimized scraping algorithms by analyzing job board data retrieval methods, reducing runtime by 50%
                from 1.5 hours to 45 minutes by eliminating unnecessary page navigations
              </li>
              <li>
                Implemented a modular code structure to facilitate easy expansion for future use cases, ensuring
                scalability for different locations or job criteria with minimal development effort
              </li>
              <li>
                Coordinated with project stakeholders, incorporating continuous improvements to refine project
                requirements and enhance overall effectiveness for organizational objectives
              </li>
            </ul>
            <div className="resume-project-header">
              Data Dashboard/Media Hub <LinkIcon />
            </div>
            <ul className="resume-list-container">
              <li>Solely developed a full-stack MERN (MongoDB, Express.js, React, Node.js) B2B application.</li>
              <li>Embraced a mobile-first perspective, ensuring visual responsiveness to all devices.</li>
              <li>
                Utilized Redux and followed Atomic Design for efficient state management and component/file organization
              </li>
              <li>Employed React Router for seamless page management and private route handling</li>
              <li>
                Designed RESTful APIs protected with JWT Tokens for utmost security, tested thoroughly using Postman
              </li>
              <li>Translated client Figma designs into pixel-perfect, visually stunning front-end visuals.</li>
              <li>Ensured an exceptional user experience through rigorous error handling and usage feedback.</li>
            </ul>
          </div>
        </div>
        <div className="resume-right">
          <div className="resume-experience">
            <div className="resume-experience-header">Experience</div>
            <div className="resume-experience-employer">
              Freelance Developer
              <div className="resume-experience-details">
                [ December 2023 - Present | <LocationOnIcon className="resume-location-icon" /> Remote ]
              </div>
            </div>
            <ul className="resume-list-container">
              <li>
                Specialized in freelance development projects focusing on data extraction, compilation, visualization,
                and web scraping solutions.
              </li>
              <li>
                Collaborated with clients to understand project requirements and deliver tailored solutions within
                agreed timelines, leveraging effective communication and project management skills.
              </li>
              <li>
                Successfully automated the data extraction process from real estate reports and the manual recording of
                job postings data, effectively reducing manual workload and improving efficiency.
              </li>
              <li>
                Implemented innovative solutions for handling missing and outdated data, demonstrating problem-solving
                skills and adaptability.
              </li>
              <li>
                Worked closely with project stakeholders to refine requirements and ensure alignment with organizational
                objectives.
              </li>
            </ul>
            <div className="resume-experience-employer">
              Dozr
              <div className="resume-experience-details">
                [ Developer | May - September 2021 | {<LocationOnIcon className="resume-location-icon" />} Kitchener,
                Canada ]
              </div>
            </div>
            <ul className="resume-list-container">
              <li>
                Solely accomplished overhaul of the Node.js backend and EJS email infrastructure, connecting central
                backend and email generation microservices. Resulting in consolidation of follow-up emails for purchases
                across all Front-end platforms, accelerated completion to under 1 month for shareholder presentation.{" "}
              </li>
              <li>
                Took ownership of re-implementing user purchase tracking by creating backend connected order summary
                pages, accomplishing a production ready Front-End within 2 weeks.
              </li>
              <li>
                Implemented user analytics through tools such as Google Analytics and Bing Ad Conversion, providing
                granular insights into user interactions and guiding improvements in customer engagement and website
                functionality.
              </li>
            </ul>
            <div className="resume-experience-employer">
              BenQ{" "}
              <div className="resume-experience-details">
                [ Developer | May - August 2019 & January - April 2020 |{" "}
                {<LocationOnIcon className="resume-location-icon" />} Taipei, Taiwan ]
              </div>
            </div>
            <ul className="resume-list-container">
              <li>
                Increased Quality Assurance velocity by developing a Chrome extension to optimize error reporting from
                Mantis bug tracking. Included features such as screenshot integration and automated error
                categorization, the solution achieved a 10% reduction in daily time spent per employee, equivalent to
                saving 48 minutes per day.
              </li>
              <li>
                Prototyped stream broadcasting systems using experimental technologies (WebRTC, Socket.io, etc.) to test
                the feasibility of content broadcasting products for its current line of televisions. Completed the
                proof of concept within 1 month for presentation to multiple Product Team Leads
              </li>
            </ul>
            <div className="resume-experience-employer">
              Newtopia{" "}
              <div className="resume-experience-details">
                [ Developer | September - December 2018 | {<LocationOnIcon className="resume-location-icon" />} Toronto,
                Canada ]
              </div>
            </div>
            <ul className="resume-list-container">
              <li>
                Achieved improved error handling and user engagement by designing, creating, and implementing a
                Redux-based log for developer observation.
              </li>
              <li>
                Increased efficiency and compatibility of the mobile app's endpoint by refactoring it and adding JSDoc
                documentation to all code written
              </li>
              <li>
                Enhanced code coverage from 80% to 90% of the entire code base by writing nearly 100 unit tests using
                Jest.
              </li>
              <li>
                Implemented comprehensive accessibility enhancements across 20 web pages to ensure WCAG compliance and
                optimal user navigation.
              </li>
              <li>
                Conducted meticulous testing with NVDA and JAWS screen readers, tracked and managed live issues in an
                Excel sheet for team resolution, and efficiently completed the project, including contractor feedback,
                within 3 weeks.
              </li>
              <li>
                Routinely fixed critical bugs, including forking third-party open source dependencies and
                editing/contributing to their code.
              </li>
            </ul>
          </div>
          <div className="resume-education">
            <div className="resume-education-header">Education</div>
            <div className="resume-education-school">
              University of Waterloo | Mechatronics Honours | Bachelors of Engineering
            </div>
            <div>Relevant Courses:</div>
            <div className="resume-education-courses-container">
              <div>SYDE 522: Foundations of Artificial Intelligience</div>
              <div>SYDE 548: User Centered Design Methods</div>
              <div>SYDE 543: Cognitive Ergonomics</div>
              <div>ECE 484: Digital Control Applications</div>
              <div>MTE 262: Microprocessors and Digital Logic</div>
              <div>MTE 140: Data Structures and Algorithms</div>
              <div>MTE 325: Microprocessor Systems and Interfacing for Mechatronics Engineering</div>
              <div>GENE 121: Digital Computation</div>
            </div>
            <div className="resume-education-school">Meta Marketing Analytics Professional Certificate Course</div>
            <div>Courses:</div>
            <div className="resume-education-courses-container">
              <div>Introduction to Data Analytics</div>
              <div>Data Analysis with Spreadsheets and SQL</div>
              <div>Data Analytics Methods for Marketing</div>
              <div>Marketing Analytics Foundation</div>
              <div>Marketing Analytics with Meta</div>
              <div>Python Data Analytics</div>
              <div>Statistics for Marketing</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
