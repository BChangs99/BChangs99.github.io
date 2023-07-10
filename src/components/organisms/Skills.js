import React, { useEffect } from 'react'
import { Skillbar } from '../../components/atoms/Skillbar';
import "./skills.css"

export default function Skills() {
   const skillsRef = React.useRef(null);
   const javascriptBarRef = React.useRef(null);
   const reactBarRef = React.useRef(null);
   const htmlBarRef = React.useRef(null);
   const cssBarRef = React.useRef(null);
   const nodeBarRef = React.useRef(null);
   const gitBarRef = React.useRef(null);
   const cBarRef = React.useRef(null);

   const options = {
      root: null, // relative to document viewport
      rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
      // 0.36 is the most threshold can take because we slide the actual element off the screen
      // so any more and it's not enough threshold
      threshold: 0 // visible amount of item shown in relation to root
   }

   const SkillsSection = [
      {
         componentRef: javascriptBarRef,
         componentId: "javascript",
         children: "Javascript"
      },
      {
         componentRef: reactBarRef,
         componentId: "react",
         children: "React"
      },
      {
         componentRef: htmlBarRef,
         componentId: "html",
         children: "HTML"
      },
      {
         componentRef: cssBarRef,
         componentId: "css",
         children: "CSS"
      },
      {
         componentRef: nodeBarRef,
         componentId: "node",
         children: "Node"
      },
      {
         componentRef: gitBarRef,
         componentId: "git",
         children: "Git"
      },
      {
         componentRef: cBarRef,
         componentId: "c",
         children: "C"
      }
   ]

   function handleAnimations(ref, refCase, add) {
      let showSkills = "show-skills"
      let child  = ref.current.children[0]
      
      if (add) {
         ref.current.classList.add(showSkills);
         child.classList.add(showSkills);
         child.children[0].classList.add(`${refCase}-animation`)
         child.children[0].classList.add(showSkills)
      } else {
         ref.current.classList.remove(showSkills);
         child.classList.remove(showSkills);
         child.children[0].classList.remove(`${refCase}-animation`)
         child.children[0].classList.remove(showSkills)
      }
   }

   // Kind of want to do something like have them slide in in alternating style (1,3,5 from left and 2,4,6 from right)
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            switch (entry.target.id) {
               case "javascript":
                  handleAnimations(javascriptBarRef, "javascript", true)
                  break;
               case "react":
                  handleAnimations(reactBarRef, "react", true)
                  break;
               case "html":
                  handleAnimations(htmlBarRef, "html", true)
                  break;
               case "css":
                  handleAnimations(cssBarRef, "css", true)
                  break;
               case "node":
                  handleAnimations(nodeBarRef, "node", true)
                  break;
               case "git":
                  handleAnimations(gitBarRef, "git", true)
                  break;
               case "c":
                  handleAnimations(cBarRef, "c", true)
                  break;
               default:
                  entry.target.classList.add("show-skills")
            }
         } else {
            switch (entry.target.id) {
               case "javascript":
                  handleAnimations(javascriptBarRef, "javascript", false)
                  break;
               case "react":
                  handleAnimations(reactBarRef, "react", false)
                  break;
               case "html":
                  handleAnimations(htmlBarRef, "html", false)
                  break;
               case "css":
                  handleAnimations(cssBarRef, "css", false)
                  break;
               case "node":
                  handleAnimations(nodeBarRef, "node", false)
                  break;
               case "git":
                  handleAnimations(gitBarRef, "git", false)
                  break;
               case "c":
                  handleAnimations(cBarRef, "c", false)
                  break;
               default:
                  entry.target.classList.remove("show-skills")
            }
         }
      })
   }, options);

   useEffect(() => {
      if (skillsRef.current) observer.observe(skillsRef.current);
      if (javascriptBarRef.current) observer.observe(javascriptBarRef.current);
      if (reactBarRef.current) observer.observe(reactBarRef.current);
      if (htmlBarRef.current) observer.observe(htmlBarRef.current);
      if (cssBarRef.current) observer.observe(cssBarRef.current);
      if (nodeBarRef.current) observer.observe(nodeBarRef.current);
      if (gitBarRef.current) observer.observe(gitBarRef.current);
      if (cBarRef.current) observer.observe(cBarRef.current);

     return () => {
       observer.disconnect();
     }
   }, [skillsRef, javascriptBarRef, reactBarRef, htmlBarRef, cssBarRef, nodeBarRef, gitBarRef, cBarRef]);
   
   return (
      <div className="main-skills-container">
         <h1 className="hidden" ref={skillsRef}>Skills</h1>
         <ul className="main-skills">
            {SkillsSection.map((skill, index) => {
               return (
                  <Skillbar
                     key={index}
                     componentRef={skill.componentRef}
                     componentId={skill.componentId}
                     children={skill.children}
                  />
               )
            })}
         </ul>
      </div>
   )
}
