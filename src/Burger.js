import React from 'react'
import "./Burger.css"

export const Burger = () => {
   function burgerOnClick() {
      // onclick toggle burger menu to slide from the whole left side of the scree
      let burgerMenuOverlay = document.querySelector(".burger-menu-overlay");
      let burgerMenuHolder = document.querySelector(".burger-menu-holder");
      burgerMenuOverlay.classList.add("open-overlay");
      burgerMenuHolder.classList.add("open");
   }


  return (
    <div 
      className="burger"
      onClick={burgerOnClick}
    >
    </div>
  )
}
