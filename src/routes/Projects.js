import React, { useEffect } from 'react'
import ventiLogo from '../assets/ventilogo.webp'
import ventiPhysical from '../assets/ventiphysical.webp'
import webIcon from '../assets/internet.webp'
import mantis from '../assets/Mantis.webp'
import { useRef } from 'react'
import "./Projects.css"

export default function Projects() {
   const projectsRef = useRef(null);
   const ventiRef = useRef(null);
   const mantisRef = useRef(null);
   const broadcastingPrototypeRef = useRef(null);
   const connect2earthRef = useRef(null);
   const videoGameReviewerRef = useRef(null);
   const mte220CalculatorRef = useRef(null);

   const options = {
      root: null, // relative to document viewport
      rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.1 // visible amount of item shown in relation to root
   }

   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add("show-projects");
         } else {
            entry.target.classList.remove("show-projects");
         }
      })
   }, options);

   useEffect(() => {
      if (projectsRef.current) observer.observe(projectsRef.current)
      if (ventiRef.current) observer.observe(ventiRef.current)
      if (mantisRef.current) observer.observe(mantisRef.current)
      if (broadcastingPrototypeRef.current) observer.observe(broadcastingPrototypeRef.current)
      if (connect2earthRef.current) observer.observe(connect2earthRef.current)
      if (videoGameReviewerRef.current) observer.observe(videoGameReviewerRef.current)
      if (mte220CalculatorRef.current) observer.observe(mte220CalculatorRef.current)

      return () => {
         observer.disconnect();
      }
   }, [projectsRef, ventiRef, mantisRef, broadcastingPrototypeRef, connect2earthRef, videoGameReviewerRef, mte220CalculatorRef, options])


   // ToDo
   // Make projects section look better -- too big rn
  return (
   <div className="main-projects">
      <h1 ref={projectsRef} className="hidden-projects">Projects</h1>
         <div ref={ventiRef} className="hidden-projects projects">
            <img src={ventiLogo} alt="ventiLogo" className='venti-logo' />
            <p className="main-projects-venti">
               Venti is a smart thermostat and vent controller designed to offer users a convenient way to control their home's heating and ventilation systems. 
               The system automatically adjusts its vent fin angles to increase or decrease airflow in an effort to drive temperatures to the user's set goals.
               Theoreticallly, the system also supports actual temperature control of a home's existing thermostat. The device's objective is to limit actual thermostat 
               changes, and to maximize its airflow angles to achieve the user's desired temperature.
               This project was co-founded with three other members of my cohort at the University of Waterloo to serve as our Capstone project. The inspiration for
               this project came from the fact that space heating largely dominates the Canadian residential energy consumption and the lack of minute control HVAC systems
               can offer in multi-person homes. As such, the system's competitive edge are its relatively inexpensiveness, airflow recycling, and device-agnostic platform.
            </p>
            <img src={ventiPhysical} alt="ventiphysical" className='venti-physical' />
            <p>
               My responsibilities in this project were software-based, for example designing and developing the two-way LoRa communication protocol between the central
               vent hub and the vents themselves. More specifically, this involved structuring the data packets that the devices would communicate to each other. This required
               a consideration of the data packet size limits due to the volume of information that needed to be communicated. For example, a data packet from the vent sent to 
               the hub would include its id number, current temperature, current vent angle, and sensory information such as humidity, pressure, and air quality. For the most up-to 
               date information while preserving battery life, I also assisted in writing sleep software to keep the vent in low-power idling mode when not sending/receiving data packets
               (60 seconds). Aside from device communication, I also assisted with the user interface design, which involved the creation of a live-updating dashboard written in HTML & CSS.
            </p>
         </div>
         <div ref={mantisRef} className="hidden-projects projects">
            <div className="main-projects-mantis">
               <h2>Mantis Bug Reporter Extension</h2>
               <a href="https://github.com/BChangs99/MantisExtension"><img src={webIcon} alt="Web Link" className="mantis-web-icon"/></a>
            </div>
            <p>
               This was a project I worked on during my Co-Op at BenQ in Taiwan. This project involved the acceleration of the quality assurance team's bug tracking capabilities.
               Right from the beginning with the initial design stage, planning, and design mockups, I had full authority and responsibility of the entire project. The final product was a Chrome extension
               that allowed users to immediately report bugs to their internal bug tracking system Mantis. I utilized secure APIs offered by Mantis to authenticate users through the extension,
               then after authentication, the users were presented with the extension's full capabilities. These included the ability to select which project/folder the bug ticket would be delivered to,
               form information that was required for bug submittals (as dictated by Mantis), and a modal window that allowed users to use Chrome's inherent screenshot and image annotation functionality.
               This project was built using React and was a purely Front-End application as it resided within Chrome's extensions.
            </p>
            <img src={mantis} alt="Mantis Bug Tracker" className="mantis-example"/>
         </div>
         <div ref={broadcastingPrototypeRef} className="hidden-projects projects">
            <h2>Broadcasting Prototype</h2>
            <p>
               This project was conducted during my second Co-Op at BenQ in Taiwan. This involved the prototyping of broadcasting capabilities to be used in BenQ's televisions. In my personal prototyping,
               I opted to create the project using a website instead of using the native operating system of the television due to my own efficiencies with web development. In the initial stage, research
               into possible viable solutions were conducted, ultimately deciding between Socket.io and Amazon Kinesis. Ultimately, a minimum viable product was established using Socket.io as using Amazon Kinesis 
               would have involved a steeper development time, hindering the project's prototyping time. As well, Kinesis did not offer Javascript capabilities on server side functionality. This project was ultimately
               fully implemented within a month and demonstrations of its capabilities to higher management were successful. 
            </p>
         </div>
         <div ref={connect2earthRef} className="hidden-projects projects">
            <h2>Connect2Earth</h2>
            <p>
               This was my first ever project working as a web developer in my first co-op at Pixelbot. This project involved the implemention of a React-based social media hub dedicated to scraping Twitter, Instagram, and Facebook
               posts related to a list of environmental tags. For example, if a user wanted to see all posts related to "Rainforests" in "Japan", then the website would scrape the three social media websites with 
               their APIs to retrieve these results. For this project, I was responsible for the implementation of the front-end based on designs and wireframes provided by the client (WWF). I was also responsible for
               the ip detection of users to offer translations of the website (offered by a third party company that provided expert translations), as well as customizing links to match the user's country origin. Unfortunately,
               the connect2earth event I helped develop has ended and I'm unable to share the project's code or visuals.
            </p>
         </div>
         <div ref={videoGameReviewerRef} className="hidden-projects projects">
            <h2>Video Game Reviewer</h2>
            <p>
               This was less so a project and more so an exercise and practice for me to learn the full stack requirements of a web application. I worked on this project with a friend of mine <a href="https://github.com/LinsamuelATM">Samuel Lin</a>.
               For this task, I took on the role of back-end development, creating routes and endpoint protection for validated users (using JWT). The back-end was developed using Express, Node.js, and MongoDB for data storage.
               I also made sure to extensively test my APIs using Postman. As well, I had a hand in the front-end implementation with setting up and collaborating with the other developer on what parts of the application state would
               be managed by Redux.
            </p>
         </div>
         <div ref={mte220CalculatorRef} className="hidden-projects projects">
            <div className="main-projects-mte220">
               <h2>MTE 220 Mark Calculator</h2>
            <a href="https://github.com/BChangs99/MTE220_Calculator"><img src={webIcon} alt="Web Link" className="mte220-web-icon"/></a>
            </div>
            <p>
               This was just a quick little project for calculating your mark for students who took MTE 220 (Sensors and Instrumentaton) with James Barby. For some reason, the marking scheme was extremely complicated,
               so to save myself and everyone the time, I wrote a little script to calculate your mark.
            </p>
         </div>
    </div>
  )
}
