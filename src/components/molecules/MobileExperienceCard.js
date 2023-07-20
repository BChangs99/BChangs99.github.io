import React from 'react'
import "./MobileExperienceCard.css"
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

export default function MobileExperienceCard(props) {
  return (
   <div className="mobile-experience-card">
      <Typography variant="overline">{props.date}</Typography>
      <Typography variant="h6">{props.company}</Typography>
      <Typography variant="caption">{props.jobTitle}</Typography>
      <Typography paragraph align="left">
         {props.summary}
      </Typography>
   </div>
  )
}

MobileExperienceCard.propTypes = {
   date: PropTypes.string.isRequired,
   company: PropTypes.string.isRequired,
   jobTitle: PropTypes.string.isRequired,
   summary: PropTypes.string.isRequired
}
