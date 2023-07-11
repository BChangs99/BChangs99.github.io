import React from 'react'
import PropTypes from 'prop-types'
import ExpandMore from '../atoms/ExpandMore';
import { Card, CardContent, CardHeader } from '@mui/material'
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./ProjectCard.css"

export default function ProjectCard(props) {
   const [expanded, setExpanded] = React.useState(false);

   const handleExpandClick = () => {
      setExpanded(!expanded);
   };

  return (
   <Card className="main-projects-card">
      <CardHeader title={props.title} subheader={props.subHeading} />
      <ExpandMore
         expand={expanded}
         onClick={handleExpandClick}
         aria-expanded={expanded}
         aria-label="show more"
      >
         <ExpandMoreIcon/>
      </ExpandMore>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
         <CardContent>
            {props.children}
         </CardContent>
      </Collapse>
   </Card>
  )
}

ProjectCard.propTypes = {
   children: PropTypes.node.isRequired,
   title: PropTypes.string.isRequired,
   subHeading: PropTypes.string.isRequired,
}
