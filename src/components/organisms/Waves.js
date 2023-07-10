import React from 'react'
import './Waves.css'
function Waves(props) {
  return (
    <div>
      <section>
        <div class='air air1'></div>
        <div class='air air2'></div>
        <div class='air air3'></div>
        <div class='air air4'></div>
      </section>
      {props.children}
    </div>
  )
}

export default Waves
