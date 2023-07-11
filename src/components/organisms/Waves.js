import React from 'react'
import './Waves.css'
function Waves(props) {
  return (
    <div>
      <section>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>
      {props.children}
    </div>
  )
}

export default Waves
