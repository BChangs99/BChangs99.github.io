import React, {useEffect} from 'react'
import "./Skills.css"

export default function Skills() {
   const skillsRef = React.useRef(null);
   const javascriptRef = React.useRef(null);
   const reactRef = React.useRef(null);
   const htmlRef = React.useRef(null);
   const cssRef = React.useRef(null);
   const nodeRef = React.useRef(null);
   const gitRef = React.useRef(null);
   const cRef = React.useRef(null);

   const options = {
      root: null, // relative to document viewport
      rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0 // visible amount of item shown in relation to root
   }

   // Still trying to figure out how to include the translate from left 100% skill
   // Kind of want to do something like have them slide in in alternating style (1,3,5 from left and 2,4,6 from right)
   // May have to just attach the animation to the container of the bar

   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add("show-skills")
            switch (entry.target.id) {
               case "javascript":
                  javascriptRef.current.classList.add("javascript-animation");
               case "react":
                  reactRef.current.classList.add("react-animation");
               case "html":
                  htmlRef.current.classList.add("html-animation");
               case "css":
                  cssRef.current.classList.add("css-animation");
               case "node":
                  nodeRef.current.classList.add("node-animation");
               case "git":
                  gitRef.current.classList.add("git-animation");
               case "c":
                  cRef.current.classList.add("c-animation");
            }
         } else {
            entry.target.classList.remove("show-skills")
         }
      })
   }, options);

   useEffect(() => {
      if (skillsRef.current) observer.observe(skillsRef.current);
      if (javascriptRef.current) observer.observe(javascriptRef.current);
      if (reactRef.current) observer.observe(reactRef.current);
      if (htmlRef.current) observer.observe(htmlRef.current);
      if (cssRef.current) observer.observe(cssRef.current);
      if (nodeRef.current) observer.observe(nodeRef.current);
      if (gitRef.current) observer.observe(gitRef.current);
      if (cRef.current) observer.observe(cRef.current);

     return () => {
       observer.disconnect();
     }
   }, [skillsRef, javascriptRef, reactRef, htmlRef, cssRef, nodeRef, gitRef, cRef]);
   
   return (
      <div className="main-skills-container">
         <h1 className="hidden" ref={skillsRef}>Skills</h1>
         <ul className="main-skills">
            <li>Javascript<span className="bar"><span id="javascript" ref={javascriptRef} className="hidden-skills"></span></span></li>
            <li>React.js (incl. React-Redux, React-Router)<span className="bar"><span id="react" ref={reactRef} className="hidden-skills"></span></span></li>
            <li>HTML<span className="bar"><span id="html" ref={htmlRef} className="hidden-skills"></span></span></li>
            <li>CSS<span className="bar"><span id="css" ref={cssRef} className="hidden-skills"></span></span></li>
            <li>Node.js<span className="bar"><span id="node" ref={nodeRef} className="hidden-skills"></span></span></li>
            <li>Git<span className="bar"><span id="git" ref={gitRef} className="hidden-skills"></span></span></li>
            <li>C++<span className="bar"><span id="c" ref={cRef} className="hidden-skills"></span></span></li>
         </ul>
      </div>
   )
}
