import resume from '../../assets/BrianChang_Resume08292022.jpg'
import downloadButton from '../../assets/download.webp'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Resume.css'
import ReactGA from 'react-ga';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LaptopIcon from '@mui/icons-material/Laptop';

export default function Resume() {
   function handleDownloadOnClick () {
      // Log the click event to GA
      ReactGA.event({
         category: 'Resume',
         action: 'Clicked',
         label: 'Download',
      });
   }
   return (
      <div className='resume-container'>
         <div className='resume-header'>
            <div className='resume-header-name'>Brian Chang</div>
            <div className='resume-header-links'>
               <a href="https://github.com/BChangs99" target="_blank"> <GitHubIcon />github.com/bchangs99</a>
               <a href="https://www.linkedin.com/in/brianchangtron/" target="_blank"> <LinkedInIcon />linkedin.com/in/brianchangtron</a>
               <a> <EmailIcon />bchangs778@gmail.com</a>
               <NavLink to="/"><LaptopIcon />bchangs99.github.io</NavLink>
            </div>
         </div>
         <div className='resume-left'>
            <div className='resume-skills-container'>
               <div className='resume-skills-header'>Skills</div>
                  <div className='resume-skills-holder'>
                     <div>Languages:</div>
                     <div>React, HTML/CSS, Javscript, Node.js, MongoDB, C++</div>
                     <div>Tools:</div>
                     <div>React-Router, React-Redux, Jest, Postman, Git </div>
                  </div>
            </div>
            <div className="resume-projects-container">
               <div className="resume-projects-header">Projects</div>
               <div className="resume-project-header">B2B Data Dashboard/Media Hub</div>
               <ul className='resume-list-container'>
                  <li>
                     Developed a cutting-edge full-stack MERN (MongoDB, Express.js, React, Node.js) B2B application.
                  </li>
                  <li>
                     Commissioned for multiple multimillion-dollar corporations, requiring swift adaptation to TypeScript for strict typed requirements.
                  </li>
                  <li>
                     Embraced a mobile-first perspective, making numerous components responsive to various devices.
                  </li>
                  <li>
                     Utilized Redux and followed Atomic Design for efficient state management and component organization.
                  </li>
                  <li>
                     Employed React Router for seamless page management and private route handling.
                  </li>
                  <li>
                     Designed RESTful APIs, all protected with JWT Tokens for utmost security -- tested thoroughly using Postman.
                  </li>
                  <li>
                     Translated client Figma designs into pixel-perfect, visually stunning front-end visuals.
                  </li>
                  <li>
                     Ensured an exceptional user experience through rigorous error handling and usage feedback.
                  </li>
               </ul>
               <div className="resume-project-header">Venti</div>
               <ul className='resume-list-container'>
                  <li>
                     Collaboratively designed an automated temperature management system using smart vents and vent fin controls to non-intrusively enhance home air flow and comfort.
                  </li>
                  <li>
                     Created and implemented control of vent fins to accordingly angle themselves safely to avoid back-pressure dangers.
                  </li>
                  <li>
                     Used two-way LoRa communication (Arduino, C++) to exchange data packets between the centralized thermostat hub and individual smart vents.
                  </li>
                  <li>
                     Programmed vent software to contain sleep functionality to assist in battery life longevity.
                  </li>
                  <li>
                     Designed and implemented user interfaces with traditional HTML and CSS for configuring temperature goals and monitoring live humidity, pressure, and air quality statistics.
                  </li>
               </ul>
               <div className="resume-project-header">Connect2Earth</div>
               <ul className='resume-list-container'>
                  <li>
                     My inaugural web development project at Pixelbot - Collaborated with the World Wildlife Fund (WWF) to create an eco-friendly React-based social media hub, promoting global environmental awareness.
                  </li>
                  <li>
                     Employed sophisticated IP detection mechanisms to dynamically customize links and site language, catering to the diverse country origins of users.
                  </li>
                  <li>
                     Integrated social media functionality seamlessly into the website using APIs from top platforms like Facebook and Twitter, amplifying user engagement and the dissemination of WWF's critical environmental message.
                  </li>
               </ul>
            </div>
         </div>
         <div className='resume-right'>
            <div className='resume-experience'>
            <div className='resume-experience-header'>Experience</div>
               <div className='resume-experience-employer'>Dozr<div className='resume-experience-details'>[Developer | May - September 2021 | {<LocationOnIcon className="resume-location-icon"/>} Kitchener On, Canada]</div></div>
               <ul className="resume-list-container">
                  <li>
                     Maintained a high-traffic React-Redux site with consistent bug fixes and feature development, leading to fewer reported issues and increased user satisfaction.
                  </li>
                  <li>
                     Spearheaded an overhaul of the backend and email infrastructure, enhancing user communication and receiving positive feedback from management and users.
                  </li>
                  <li>
                     Took ownership of re-implementing user purchase tracking by creating an API-connected customer order page, resulting in high employer satisfaction.
                  </li>
                  <li>
                     Implemented user analytics through tools like Google Analytics and Bing Ad Conversion, providing granular insights into user interactions and guiding improvements in customer engagement and website functionality.
                  </li>
               </ul>
               <div className='resume-experience-employer'>BenQ <div className='resume-experience-details'>[Developer | May - August 2019 & January - April 2020 | {<LocationOnIcon className="resume-location-icon"/>} Taipei, Taiwan]</div></div>
               <ul className="resume-list-container">
                  <li>
                     Boosted Quality Assurance department velocity by developing a Chrome extension to streamline error reports from Mantis bug tracking, resulting in faster issue resolution.
                  </li>
                  <li>
                     Streamlined user feedback handling for the marketing team by enhancing Mention, a social media marketing tool, to retrieve, analyze, and categorize user feedback on BenQ products, resulting in improved product insights.
                  </li>
                  <li>
                     Improved marketing campaign analysis by automating user data transfer from Eloqua Marketing Campaigns to integrate with Salesforce data, resulting in enhanced campaign effectiveness.
                  </li>
                  <li>
                     Prototyped stream broadcasting systems using experimental technologies (WebRTC, Socket.io, etc.) to test the feasibility of content broadcasting products for its current line of televisions, measured by the viability of new product ideas.
                  </li>
                  <li>
                     Implemented China-compliant web analytics tools, enabling successful user tracking of consumers located in China, measured by improved data accuracy and compliance.
                  </li>
               </ul>
               <div className='resume-experience-employer'>Newtopia <div className='resume-experience-details'>[Developer | September - December 2018 | {<LocationOnIcon className="resume-location-icon"/>} Toronto On, Canada]</div></div>
               <ul className="resume-list-container">
                  <li>
                     Achieved improved error handling and user engagement by designing, creating, and implementing a Redux-based log, measured by enhanced error reporting.
                  </li>
                  <li>
                     Increased efficiency and compatibility of the mobile app's endpoint by refactoring it and adding JSDoc documentation, measured by improved app performance.
                  </li>
                  <li>
                     Enhanced code coverage from 80% to 90% of the entire code base by writing unit tests using Jest, measured by improved code quality.
                  </li>
                  <li>
                     Routinely fixed critical bugs, including forking third-party open source dependencies and editing/contributing to their code, measured by improved software reliability.
                  </li>
               </ul>
            </div>
            <div className='resume-education'>
               <div className="resume-education-header">Education</div>
               <div className="resume-education-school">University of Waterloo | Mechatronics Honours | Bachelors of Engineering</div>
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
            </div>
         </div>
      </div>
   )
}