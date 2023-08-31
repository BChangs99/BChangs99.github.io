import React, { useEffect } from 'react'
import { Skillbar } from '../../components/atoms/Skillbar';
import "./skills.css"

export default function Skills() {
   const SkillsSection = [
      {
         classNameAnimation: "javascript-animation",
         componentId: "javascript",
         children: "Javascript"
      },
      {
         classNameAnimation: "react-animation",
         componentId: "react",
         children: "React"
      },
      {
         classNameAnimation: "html-animation",
         componentId: "html",
         children: "HTML"
      },
      {
         classNameAnimation: "css-animation",
         componentId: "css",
         children: "CSS"
      },
      {
         classNameAnimation: "node-animation",
         componentId: "node",
         children: "Node"
      },
      {
         classNameAnimation: "git-animation",
         componentId: "git",
         children: "Git"
      },
      {
         classNameAnimation: "c-animation",
         componentId: "c",
         children: "C"
      }
   ]

   return (
      <div className="main-skills-container">
         <h1>Skills</h1>
         <ul className="main-skills">
            {SkillsSection.map((skill, index) => {
               return (
                  <Skillbar
                     classNameAnimation={skill.classNameAnimation}
                     key={index}
                     children={skill.children}
                  />
               )
            })}
         </ul>
      </div>
   )
}
