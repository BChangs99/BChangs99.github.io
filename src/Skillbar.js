import React from 'react'
import PropTypes from 'prop-types'

export const Skillbar = ({ componentRef, componentId, children }) => {
  return (
   <li 
      id={componentId} 
      className="hidden-skills"
      ref={componentRef}
   >
      {children}
      <span className="bar hidden-skills">
         <span className="hidden-skills"></span>
      </span>
   </li>
  )
}

Skillbar.propTypes = {
   componentRef: PropTypes.object.isRequired,
   componentId: PropTypes.string.isRequired,
   children: PropTypes.string,
}
