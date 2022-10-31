import React from 'react'
import "./Burger.css"

export const Burger = () => {
   function burgerOnClick() {
      // onclick toggle burger menu to slide from the whole left side of the screen
      let burgerMenuStyles = document.querySelector(".burger-menu-holder");
      console.log("burgerMenuStyles", burgerMenuStyles)
      burgerMenuStyles.classList.add("open");
   }


  return (
    <div 
      className="burger"
      onClick={burgerOnClick}
    >
    </div>
  )
}
