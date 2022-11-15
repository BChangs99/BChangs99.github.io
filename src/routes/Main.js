import "./Main.css"
import { useEffect, useRef } from "react"
import { NavLink } from 'react-router-dom';
import { handleResumeOnClick } from "../shared"
import Skills from '../Skills.js'
import Projects from "./Projects"

export default function Main() {
   const howdyContainerRef = useRef(null);
   const introSpielRef1 = useRef(null);
   const introSpielRef2 = useRef(null);
   const introSpielRef3 = useRef(null);
   const aboutRef = useRef(null);
   const skillsRef = useRef(null);

   const options = {
      root: null, // relative to document viewport
      rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.5 // visible amount of item shown in relation to root
   }

   // Move keyframe animations into this file to attach on scroll
   // Use state to control animation state
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add("show-main")
         } else {
            entry.target.classList.remove("show-main")
         }
      })
   }, options);

   useEffect(() => {
      if (howdyContainerRef.current) observer.observe(howdyContainerRef.current)     
      if (aboutRef.current) observer.observe(aboutRef.current)      
      if (skillsRef.current) observer.observe(skillsRef.current)      
      if (introSpielRef1.current) observer.observe(introSpielRef1.current)
      if (introSpielRef2.current) observer.observe(introSpielRef2.current)
      if (introSpielRef3.current) observer.observe(introSpielRef3.current)

      return () => {
         observer.disconnect();
      }
   }, [howdyContainerRef, aboutRef, skillsRef, introSpielRef1, introSpielRef2, introSpielRef3, options])
  
   // **Todo
   // 1. Add a link to the resume (Done)
   // 2. Refactor projects, skills into its own component
   // 3. Add icons/links for contact info (Done)
   // 4. Decide if repo can stay private (for mantis)
   return (
      <div className="main">
         <div ref={howdyContainerRef} className="main-section-one hidden-main">
            <div className="main-text-intro-left">
               <h1>Howdy!</h1>
               <h2>I'm Brian Chang</h2>
            </div>
            <div className="main-img">
               <div className='headshot'></div>
            </div>
            <div className="main-text-intro">
               <h2 ref={introSpielRef1} className="hidden-main">Web Developer</h2>
               <h2 ref={introSpielRef2} className="hidden-main">Mechatronics Engineer</h2>
               <h2 ref={introSpielRef3} className="hidden-main">Based in Vancouver</h2>
            </div>
         </div>
         <div className="main-intro-container">
            <Skills />
            <div className="main-bio-container">
               <h1 className="hidden-main" ref={aboutRef}>About Me</h1>
               <div className="main-bio">
                  <span>Howdy Y'all &#129312;!</span> 
                  <p>
                     I'm Brian Chang, and I'm a recent Mechatronics graduate from the University of Waterloo.
                  </p>
                  <p>
                     I started off as a self-taught web developer, but have since accrued professional work experience over the last 5 years in Co-Op positions.
                  </p>
                  <p>
                  I've worked both with and without a team, and have been able to excel in many types of environments. Over the years I've worked as a developer for small startups in Canada to large corporations in Taiwan. I'm looking for an opportunity
                  to further cultivate my current MERN (Mongo Express React Node) skillset and also to learn exciting new technologies to add to my repertoire!
                  </p>
                  <p>
                     Check out some of the projects I've worked on below in detail, or if you want to skip straight to the short and good stuff, take a look at my &nbsp;
                     <NavLink 
                        to="/resume" 
                        className='burger-menu-resume'
                        onClick={handleResumeOnClick}
                     >
                        resume!
                     </NavLink>
                  </p>
               </div>
            </div>
         </div>
         <Projects />
      </div>
   )
}