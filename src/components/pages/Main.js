import "./Main.css"
import { useEffect, useRef } from "react"
import Skills from '../organisms/Skills.js'
import Projects from "../organisms/Projects"
import { AboutMe } from "../organisms/AboutMe";

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
      threshold: 0.4 // visible amount of item shown in relation to root
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
            <AboutMe />
            <div className="main-intro-divider"></div>
            <Skills />
         </div>
         <Projects />
      </div>
   )
}