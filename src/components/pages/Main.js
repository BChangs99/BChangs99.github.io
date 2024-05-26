import "./Main.css"
import { useEffect, useRef } from "react"
import Skills from '../organisms/Skills.js'
import Projects from "../organisms/Projects"
import { AboutMe } from "../organisms/AboutMe";
import Experience from "../organisms/Experience";
import { HackerText } from "../atoms/HackerText";

export default function Main() {
   const howdyContainerRef = useRef(null);
   const introSpielRef1 = useRef(null);
   const introSpielRef2 = useRef(null);
   const introSpielRef3 = useRef(null);

   const options = {
      root: null, // relative to document viewport
      rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.4 // visible amount of item shown in relation to root
   }

   // Move keyframe animations into this file to attach on scroll
   // Use state to control animation state
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         console.log(entry, "entry")
         if (entry.isIntersecting) {
            entry.target.classList.add("show")

         } else {
            entry.target.classList.remove("show")
         }
      })
   }, options);
  
   useEffect(() => {
      if (howdyContainerRef.current) observer.observe(howdyContainerRef.current)
      if (introSpielRef1.current) observer.observe(introSpielRef1.current)
      if (introSpielRef2.current) observer.observe(introSpielRef2.current)
      if (introSpielRef3.current) observer.observe(introSpielRef3.current)

      return () => {
         observer.disconnect();
      }
   }, [])

   return (
      <div className="main">
         <div ref={howdyContainerRef} className="main-section-one hidden">
            <div className="main-text-intro-left">
               <div className="main-text-howdy-holder">
                  <HackerText originalText={"Howdy!"} />
               </div>
            </div>
            <div className="main-text-intro">
               <h2>I'm Brian Chang</h2>
               <h2 ref={introSpielRef1} className="hidden">Web Developer</h2>
               <h2 ref={introSpielRef2} className="hidden">Mechatronics Engineer</h2>
               <h2 ref={introSpielRef3} className="hidden">Based in Vancouver</h2>
            </div>
         </div>
         <div className="main-intro-container">
            <AboutMe />
            <div className="main-intro-divider"></div>
            <Skills />
         </div>
         <Experience />
         <Projects />
      </div>
   )
}