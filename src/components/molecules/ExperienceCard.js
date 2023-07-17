import React, { Fragment, useRef } from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card';
import "./ExperienceCard.css"
import { CardHeader, CardContent, Collapse, CardActions, Chip} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from '../atoms/ExpandMore';
function ExperienceCard(props) {
   const [expanded, setExpanded] = React.useState(false);
   const scrollToRef = useRef()

   const handleExpandClick = () => {
      setExpanded(!expanded);
      if (!expanded) {
         scrollToRef.current.scrollIntoView({alignToTop: true, behavior: 'smooth'})
      } else {
         props.scrollRef.current.scrollIntoView({alignToTop: true, behavior: 'smooth'})
      }
   }

  return (
     <Fragment>
        { props.side === "right" ?
         <div className='experience-card-container right-card-container' ref={scrollToRef}>
            <Fragment>
               <div className='experience-line-container right-line-container'>
                  <div className='experience-line'>
                  </div>
                  <div className='experience-line-date right-line-date'>{props.date}</div>
               </div>
               <Card className='experience-card' onClick={handleExpandClick}>
                  <CardContent>
                     <CardHeader title={props.company} subheader={props.jobTitle} />
                     <ExpandMore
                        expand={expanded}
                        aria-expanded={expanded}
                        aria-label="show more"
                     >
                        <ExpandMoreIcon/>
                     </ExpandMore>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                           {props.children}
                        </Collapse>
                  </CardContent>
                  <CardActions>
                     <Chip label="React" />
                     <Chip label="HTML" />
                     <Chip label="CSS" />
                     <Chip label="Redux" />
                  </CardActions>
               </Card>
            </Fragment>
         </div>
            :
            <div className='experience-card-container left-card-container' ref={scrollToRef}>
               <Fragment>
                  <Card className='experience-card' onClick={handleExpandClick}>
                     <CardContent>
                        <CardHeader title={props.company} subheader={props.jobTitle}/>
                        <ExpandMore
                        expand={expanded}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                           <ExpandMoreIcon/>
                        </ExpandMore>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                           {props.children}
                        </Collapse>
                     </CardContent>
                  </Card>
                  <div className='experience-line-container left-line-container'>
                     <div className='experience-line-date left-line-date'>{props.date}</div>
                     <div className='experience-line'>
                     </div>
                  </div>
               </Fragment>
            </div>
         }
     </Fragment>
  )
}

ExperienceCard.propTypes = {
   // From left or right
   side: PropTypes.string.isRequired,
   // Card content
   children: PropTypes.node.isRequired,
   // Company name
   company: PropTypes.string.isRequired,
   // Job title
   jobTitle: PropTypes.string.isRequired,
   // Date
   date: PropTypes.string.isRequired,
   // ScrollRef
   scrollRef: PropTypes.object.isRequired,
}

export default ExperienceCard
