import { useEffect, useRef } from "react"
import { NavLink } from 'react-router-dom';
import { handleResumeOnClick } from "../../shared"
import "./AboutMe.css"

export const AboutMe = () => {
   const aboutRef = useRef(null);
   const howdyRef = useRef(null);
   const pOneRef = useRef(null);
   const pTwoRef = useRef(null);
   const pThreeRef = useRef(null);
   const pFourRef = useRef(null);

   const options = {
      root: null, // relative to document viewport
      rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.5 // visible amount of item shown in relation to root
   }

   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add("show-about-me")
         } else {
            entry.target.classList.remove("show-about-me")
         }
      })
   }, options);

   useEffect(() => {
      if (aboutRef.current) observer.observe(aboutRef.current)
      if (howdyRef.current) observer.observe(howdyRef.current)
      if (pOneRef.current) observer.observe(pOneRef.current)
      if (pTwoRef.current) observer.observe(pTwoRef.current)
      if (pThreeRef.current) observer.observe(pThreeRef.current)
      if (pFourRef.current) observer.observe(pFourRef.current)

      return () => {
         observer.disconnect();
      }
   }, [])

   return (
      <div className="about-me-container">
         <h1 className="hidden-about-me" ref={aboutRef}>About Me</h1>
            <div>
               <span className="hidden-about-me" ref={howdyRef}>Howdy Y'all &#129312;!</span> 
               <p className="hidden-about-me" ref={pOneRef}>
                  I'm Brian Chang, and I'm a recent Mechatronics graduate from the University of Waterloo.
               </p>
               <p className="hidden-about-me" ref={pTwoRef}>
                  I started off as a self-taught web developer, but have since accrued professional work experience over the last 5 years in Co-Op positions.
               </p>
               <p className="hidden-about-me" ref={pThreeRef}>
               I've worked both with and without a team, and have been able to excel in many types of environments. Over the years I've worked as a developer for small startups in Canada to large corporations in Taiwan. I'm looking for an opportunity
               to further cultivate my current MERN (Mongo Express React Node) skillset and also to learn exciting new technologies to add to my repertoire!
               </p>
               <p className="hidden-about-me" ref={pFourRef}>
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
   )
}
