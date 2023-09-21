import React from 'react'
import ventiPhysical from '../../assets/ventiphysical.webp'
import webIcon from '../../assets/internet.webp'
import mantis from '../../assets/Mantis.webp'
import "./Projects.css"
import { CardMedia } from '@mui/material'
import Typography from '@mui/material/Typography';
import ProjectCard from '../molecules/ProjectCard'

import unsplash1 from '../../assets/project_images/unsplash1.jpg'
import unsplash2 from '../../assets/project_images/unsplash2.jpg'
import unsplash3 from '../../assets/project_images/unsplash3.jpg'
import unsplash4 from '../../assets/project_images/unsplash4.jpg'
import unsplash5 from '../../assets/project_images/unsplash5.jpg'
import unsplash6 from '../../assets/project_images/unsplash6.jpg'

export default function Projects() {
   // ToDO: refactor this
  return (
   <div className="main-projects">
      <h1>Projects</h1>
         <div className='main-projects-container'>
            <div className="projects">
               <ProjectCard title="Venti" subHeading="An IoT Vent and Thermostat Controller" backgroundIMG={unsplash1}>
                  <Typography paragraph>
                     Venti is a smart thermostat and vent controller designed to offer users a convenient way to control their home's heating and ventilation systems. 
                     The system automatically adjusts its vent fin angles to increase or decrease airflow in an effort to drive temperatures to the user's set goals.
                     Theoreticallly, the system also supports actual temperature control of a home's existing thermostat. The device's objective is to limit actual thermostat 
                     changes, and to maximize its airflow angles to achieve the user's desired temperature.
                     This project was co-founded with three other members of my cohort at the University of Waterloo to serve as our Capstone project. The inspiration for
                     this project came from the fact that space heating largely dominates the Canadian residential energy consumption and the lack of minute control HVAC systems
                     can offer in multi-person homes. As such, the system's competitive edge are its relatively inexpensiveness, airflow recycling, and device-agnostic platform.
                  </Typography>
                  <CardMedia component="img" image={ventiPhysical} alt="Venti Physical" className="venti-physical"/>
                  <Typography paragraph>
                     My responsibilities in this project were software-based, for example designing and developing the two-way LoRa communication protocol between the central
                     vent hub and the vents themselves. More specifically, this involved structuring the data packets that the devices would communicate to each other. This required
                     a consideration of the data packet size limits due to the volume of information that needed to be communicated. For example, a data packet from the vent sent to 
                     the hub would include its id number, current temperature, current vent angle, and sensory information such as humidity, pressure, and air quality. For the most up-to 
                     date information while preserving battery life, I also assisted in writing sleep software to keep the vent in low-power idling mode when not sending/receiving data packets
                     (60 seconds). Aside from device communication, I also assisted with the user interface design, which involved the creation of a live-updating dashboard written in HTML & CSS.
                  </Typography>
               </ProjectCard>
            </div>
            <div className="projects">
               <ProjectCard title="Mantis Bug Tracker" subHeading="Expedited QA Bug Tracking Extension" backgroundIMG={unsplash2}>
                  <Typography paragraph>
                     During my Co-Op experience at BenQ in Taiwan, I spearheaded an exciting project aimed at enhancing the bug tracking capabilities of the quality assurance team. 
                     From the very outset, starting with the initial design stage, planning, and design mockups, I was entrusted with complete authority and accountability for the entire project.
                     The culmination of my efforts was the development of a cutting-edge Chrome extension that revolutionized the process of reporting bugs to our internal bug tracking system, Mantis. 
                     Leveraging the secure APIs provided by Mantis, I implemented a seamless authentication mechanism within the extension. Once authenticated, users gained access to a plethora of powerful features and functionalities.
                  </Typography>
                  <Typography paragraph>
                     The Chrome extension empowered users with the flexibility to select the specific project or folder to which the bug ticket should be directed, ensuring streamlined organization and efficient workflow management. 
                     To comply with Mantis's requirements for bug submission, I designed an intuitive form within the extension, capturing all the necessary information needed for comprehensive bug reports.
                     Furthermore, I integrated a sleek modal window into the extension, leveraging Chrome's inherent capabilities for capturing screenshots and enabling image annotation. 
                     This feature allowed users to provide visual context and annotations directly within the bug reports, aiding the quality assurance team in precisely identifying and resolving issues.
                  </Typography>
                  <Typography paragraph>
                     To realize this project, I employed React, a powerful and popular JavaScript library, enabling the development of a highly responsive and dynamic user interface. 
                     The extension itself was a pure front-end application, seamlessly integrating with Chrome's extensions ecosystem to deliver a seamless user experience.
                     Overall, my Co-Op project at BenQ enabled me to take charge of the entire development process, from conception to deployment, resulting in a sophisticated Chrome extension that significantly accelerated the quality assurance team's bug tracking capabilities.
                  </Typography>
                  <CardMedia component="img" image={mantis} alt="Mantis Extension" className="mantis-example"/>
               </ProjectCard>
                  {/* <a href="https://github.com/BChangs99/MantisExtension"><img src={webIcon} alt="Web Link" className="mantis-web-icon"/></a> */}
            </div>
            <div className="projects">
               <ProjectCard title="Broadcasting Prototype" subHeading="A Web-Based Broadcasting Prototype" backgroundIMG={unsplash3}>
                  <Typography paragraph>
                     During my second Co-Op experience at BenQ in Taiwan, I embarked on an exciting project focused on prototyping broadcasting capabilities for BenQ's televisions.
                     Recognizing my proficiency in web development, I made the strategic decision to create the project as a website, rather than relying on the native operating system of the television.
                  </Typography>
                  <Typography paragraph>
                     The project kicked off with an extensive research phase, aimed at identifying the most viable solutions for achieving our broadcasting goals. After careful consideration, we narrowed down our options to two prominent technologies: Socket.io and Amazon Kinesis.
                     While both options presented compelling features, we weighed the trade-offs and ultimately selected Socket.io as the foundation for our minimum viable product.
                  </Typography>
                  <Typography paragraph>
                     The decision to go with Socket.io was driven by several factors. Firstly, utilizing Amazon Kinesis would have significantly increased development time, posing a potential hurdle to the project's prototyping phase.
                     Additionally, the lack of server-side code required for Socket.io was a major advantage, as it allowed us to focus on the core functionality of the project. Finally, Socket.io's support for real-time communication was a key factor in our decision, as it was a core requirement for the project.
                  </Typography>
                  <Typography paragraph>
                     The project was developed using React, a powerful JavaScript library, enabling the development of a highly responsive and dynamic user interface. The website itself was a pure front-end application, seamlessly integrating with Socket.io to deliver a seamless user experience.
                     Overall, my Co-Op project at BenQ enabled me to take charge of the entire development process, from conception to deployment, resulting in a sophisticated broadcasting prototype that significantly accelerated the quality assurance team's bug tracking capabilities.
                  </Typography>
               </ProjectCard>
            </div>
            <div className="projects">
               <ProjectCard title="Connect2Earth" subHeading="A Social Media Hub for Environmental Discussions" backgroundIMG={unsplash4}>
                  <Typography paragraph>
                     In my very first Co-Op experience as a web developer at Pixelbot, I had the incredible opportunity to contribute to a groundbreaking project.
                     This particular undertaking involved the implementation of a React-based social media hub, specifically designed for scraping and aggregating posts from popular platforms such as Twitter, Instagram, and Facebook.
                     The goal was to curate content related to a comprehensive list of environmental tags, providing users with a centralized platform to explore and engage with environmentally conscious discussions.
                  </Typography>
                  <Typography paragraph>
                     Imagine a user being able to effortlessly access posts about "Rainforests" in "Japan" with just a few clicks.
                     That's precisely what this project aimed to achieve. By harnessing the power of APIs offered by the three major social media platforms, the website dynamically scraped and compiled posts aligned with the chosen environmental tags.
                  </Typography>
                  <Typography paragraph>
                     As a key contributor to this groundbreaking initiative, my primary responsibility lay in implementing the captivating front-end design envisioned by our esteemed client, Earth Hour.
                     The website was developed using React, a powerful JavaScript library, enabling the development of a highly responsive and dynamic user interface.
                  </Typography>
                  <Typography paragraph>
                     Additionally, I took on the challenge of integrating IP detection functionality into the website. This feature allowed us to provide personalized experiences for users by automatically detecting their geographical location. 
                     Leveraging the services of a reputable third-party translation company, we seamlessly incorporated expert translations to cater to users in their preferred language. 
                     Moreover, I ensured that the website dynamically customized links to match the user's country of origin, enhancing the overall user experience and navigation.
                  </Typography>
                  <Typography paragraph>
                     Regrettably, due to the conclusion of the Connect2Earth event, which I played a significant role in developing, I am unable to share the project's code or visuals. 
                     However, I can confidently say that the final product served as an innovative and impactful tool in promoting environmental awareness and engagement on social media platforms.
                  </Typography>
                  <Typography paragraph>
                     This first co-op experience not only allowed me to hone my web development skills but also provided me with invaluable insights into project collaboration, client interactions, and the importance of delivering a user-centric experience. 
                     It laid a solid foundation for my career as a web developer, igniting my passion for creating meaningful digital solutions.
                  </Typography>
               </ProjectCard>
            </div>
            <div className="projects">
               <ProjectCard title="Video Game Reviewer" subHeading="A Full-Stack Web Application" backgroundIMG={unsplash5}>
                  <Typography paragraph>
                     During my journey to acquire full-stack web development skills, I embarked on an enriching exercise and collaborative practice with my talented friend, Samuel Lin, whose contributions elevated the project to new heights.
                     Together, we delved into the intricacies of building a web application from scratch, acquiring valuable experience in every aspect of its development.
                  </Typography>
                  <Typography paragraph>
                     In this endeavor, I assumed the role of back-end developer, taking charge of creating robust routes and implementing essential endpoint protection for validated users using JSON Web Tokens (JWT).
                     Leveraging the power of Express, Node.js, and MongoDB, I crafted a secure and efficient back-end infrastructure capable of handling data storage and retrieval seamlessly.
                     By employing industry best practices and adhering to the principles of clean code, I ensured the stability and scalability of our application's foundation.
                  </Typography>
                  <Typography paragraph>
                     To guarantee the reliability and functionality of our APIs, I conducted comprehensive testing using Postman, meticulously validating their behavior and performance.
                     This rigorous testing process served as a crucial step in delivering a high-quality product that met our users' expectations.
                  </Typography>
                  <Typography paragraph>
                     In addition to my back-end responsibilities, I also actively participated in the front-end implementation, collaborating closely with Samuel to determine the optimal distribution of application state management using Redux. 
                     Through effective communication and synchronized efforts, we ensured that the front-end seamlessly interacted with the back-end, providing a cohesive and delightful user experience.
                  </Typography>
                  <Typography paragraph>
                     This collaborative exercise not only honed my technical skills in back-end development, but it also fortified my ability to work effectively within a team. By collaborating with Samuel, I gained a deeper understanding of the importance of clear communication, efficient code integration, and shared project ownership. 
                     Together, we tackled challenges, explored innovative solutions, and delivered an application that surpassed our initial goals.
                  </Typography>
                  <Typography paragraph>
                     This immersive experience further solidified my passion for full-stack web development, exposing me to the intricacies of both front-end and back-end technologies. 
                     It instilled in me a sense of pride and accomplishment, paving the way for future endeavors where I can leverage my skills to create impactful web applications.
                  </Typography>
               </ProjectCard>
            </div>
            <div className="projects">
               <ProjectCard title="MTE 220 Mark Calculator" subHeading="A Quick Script to Automate a Ridiculous Marking Scheme" backgroundIMG={unsplash6}>
                  <a href="https://github.com/BChangs99/MTE220_Calculator"><img src={webIcon} alt="Web Link" className="mte220-web-icon"/></a>
                  <Typography paragraph>
                     In my pursuit of academic excellence during MTE 220 (Sensors and Instrumentation) under the guidance of James Barby, I encountered a notable challenge posed by the intricate and time-consuming marking scheme.
                     Driven by a desire to alleviate the burden for myself and fellow students, I took it upon myself to develop a script that would simplify the calculation process.
                     By leveraging my programming expertise, I crafted a comprehensive solution that seamlessly integrated with the course's grading structure.
                     This script automated the complex calculations, offering an efficient and accurate method for determining our final marks.
                     This endeavor not only showcased my problem-solving abilities but also demonstrated my commitment to enhancing the academic experience by simplifying complex tasks through technology.
                  </Typography>
               </ProjectCard>
            </div>
         </div>
    </div>
  )
}
