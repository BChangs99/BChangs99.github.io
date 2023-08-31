import React, { useEffect, useState } from 'react'
import "./HackerText.css"

export const HackerText = ({ originalText }) => {
   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

   const [text, setText] = useState(originalText);

   const scrambleText = () => {
      let iteration = 0;
      const interval = setInterval(() => {
         if (iteration <= originalText.length) {
            setText(text.split("").map((letter, index) => {
               if (index < iteration) {
                  return originalText.split("")[index];
               }
               
               return letters[Math.floor(Math.random() * 26)]
               }
               ).join(""));
         
            iteration += 1/5;
         }

         if (iteration >= originalText.length){ 
            clearInterval(interval);
         }
      }, 50);
   }

   useEffect(() => {
      scrambleText();
   }, [])

  return (
    <h1 onMouseEnter={scrambleText}>{text}</h1>
  )
}
