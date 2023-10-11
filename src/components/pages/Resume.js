import resume from '../../assets/BrianChang_Resume08292022.jpg'
import downloadButton from '../../assets/download.webp'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Resume.css'
import ReactGA from 'react-ga';
import { Fragment } from 'react';


// We gonna make a code version of this shit -- then we can turn into pdf for uploading -- but also this just the best way to make what i need rn
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
      <Fragment>
         <div className='resume-background-gradient'></div>
         <div className='resume-container'>
            <div className='resume-header'>
               <div className='resume-header-name'>Brian Chang</div>
               <div className='resume-header-links'>
                  <a>github.com/bchangs99</a>
                  <a>linkedin.com/in/brianchangtron</a>
                  <a>bchangs778@gmail.com</a>
                  <a>bchang99s.github.io</a>
               </div>
            </div>
            <div className='resume-left'>
               <div className='resume-skills-container'>
                  <div className='resume-skills-header'>Skills</div>
                     <div className='resume-skills-holder'>
                        <div>React</div>
                        <div>React-Router</div>
                        <div>React-Redux</div>
                        <div>HTML + CSS</div>
                        <div>Javscript + Node.js</div>
                        <div>MongoDB</div>
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
                        Collaboratively created an automated temperature management system using smart vents and vent fin controls to non-intrusively improve air flow and temperatures within homes.
                     </li>
                     <li>
                        Created and implemented control of vent fins to accordingly angle themselves safely to avoid back-pressure dangers.
                     </li>
                     <li>
                        Utilized two-way LoRa communication (Arduino, C++) for the delivery and reception of data packets between the centralized thermostat hub and the inliidual smart vents.
                     </li>
                     <li>
                        Programmed vent software to contain sleep functionality to assist in battery life longevity.
                     </li>
                     <li>
                        Designed and implemented user interfaces using traditional HTML and CSS for personal configuration of temperature goals and live monitoring of humidity, pressure, and air quality statistics.
                     </li>
                  </ul>
                  <div className="resume-project-header">Connect2Earth</div>
                  <ul className='resume-list-container'>
                     <li>
                        My first project in web development at Pixelbot -- created a transformative project in partnership with the World Wildlife Fund (WWF) to create an environmentally conscious React-based social media hub, fostering global environmental awareness.
                     </li>
                     <li>
                        Employed sophisticated IP detection mechanisms to dynamically customize links and site language, catering to the diverse country origins of users.
                     </li>
                     <li>
                        Seamlessly integrated social media capabilities into the website by harnessing the power of APIs from leading platforms such as Facebook and Twitter, enhancing user engagement and sharing of the WWF's vital environmental message.
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
                        Maintained a high-traffic React-Redux website by timely and consistently fixing bugs and developing new features, measured by the reduced number of reported issues and increased user satisfaction.
                     </li>
                     <li>
                        Achieved enhanced user communication efficiency by spearheading an overhaul of the backend system and emailing infrastructure, quantified by management satisfaction and user feedback.
                     </li>
                     <li>
                        Took project ownership in re-implementing user purchase tracking by creating a customer order’s page connected through APIs to display most up to date tracking information, measured by high employer satisfaction.
                     </li>
                     <li>
                        Took the initiative to ensure the seamless implementation of user analytics, leveraging tools like Google Analytics and Bing Ad Conversion tracking. Implemented event tracking for granular insights, tracking button clicks, link clicks, and more. The success was measured by the valuable data acquired, shedding light on user interactions and pinpointing areas for enhancing customer engagement and website improvements.
                     </li>
                  </ul>
                  <div className='resume-experience-employer'>BenQ <div className='resume-experience-details'>[Developer | May - August 2019 & January - April 2020 | {<LocationOnIcon className="resume-location-icon"/>} Taipei, Taiwan]</div></div>
                  <ul className="resume-list-container">
                     <li>
                        Achieved a significant increase in the Quality Assurance department’s velocity by creating a Chrome extension to streamline error reports from the Mantis bug tracking tool, measured by faster issue resolution.
                     </li>
                     <li>
                        Enabled the marketing team to address user feedback swiftly by enhancing the social media marketing tool, Mention, to retrieve, analyze, and categorize user feedback on BenQ products, measured by improved product insights.
                     </li>
                     <li>
                        Facilitated analysis of marketing campaign success by automating user data transfer from Eloqua Marketing Campaigns for integration with Salesforce data, measured by improved campaign effectiveness.
                     </li>
                     <li>
                        Prototyped stream broadcasting systems using experimental technologies (WebRTC, Socket.io, etc.) to test the feasibility of content broadcasting products, measured by the viability of new product ideas.
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
      </Fragment>
      // <div className='main-resume'>
      //    <h3>
      //       <div className='main-resume-download-container'>
      //          <img src={downloadButton} alt="download button" className="main-resume-download-icon" />
      //          <a 
      //             href="/static/media/BrianChang_Resume08292022.6d2649c3eab9f5ac0ec1.webp" 
      //             className='main-resume-download' 
      //             download 
      //             onClick={handleDownloadOnClick}>
      //                Click to download and zoom in!
      //          </a>
      //       </div>
      //    </h3>
      //    <div className='resume-container'>
      //       <img src={resume} alt="resume" className='resume' />
      //    </div>
      // </div>
   )
}