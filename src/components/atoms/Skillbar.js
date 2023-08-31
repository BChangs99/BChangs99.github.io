import React from 'react'
import PropTypes from 'prop-types'

export const Skillbar = ({ classNameAnimation, children }) => {
  return (
   <li 
   >
      {children}
      <span className='bar'>
         <span className={classNameAnimation}></span>
      </span>
   </li>
  )
}

Skillbar.propTypes = {
   classNameAnimation: PropTypes.string.isRequired,
   children: PropTypes.string,
}
