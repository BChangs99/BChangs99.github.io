import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { CardHeader, CardContent, Card, Collapse, CardActions, Chip} from '@mui/material';
import "./Experience.css"
import ExperienceCard from '../molecules/ExperienceCard'
import { Typography } from '@mui/material'

function Experience(props) {
  // We have 1 column for mobile view and have the cards stack on top of each other
  // Will still have extending line but shorter

  const experienceRef = React.useRef()

  // We use useRef cause we only get the window size once 
  // Ignoring the use case of someone's screen resizing during use
  const windowSize = useRef({width: window.innerWidth, height: window.innerHeight});
  console.log(windowSize)
  // Make typographies reusable -- e.g. store in an object or array



  return (
    <div ref={experienceRef} className="experience-header">
      <h1>Experience</h1>
      { windowSize.current.width > 1500 ? 
        <div className='experience'>
          <div className="experience-grid-left">
            <ExperienceCard  scrollRef={experienceRef} side="left" jobTitle='Jr. Developer' company="Dozr" date="May 2021 - August 2021">
              <Typography paragraph align="left">
                In my role, I maintained and improved a high-traffic React web interface, deploying bug fixes and implementing new features. 
                I also led the overhaul of the email system, enhancing backend infrastructure and redesigning the format. 
                Additionally, I played a key role in re-implementing a customer's order tracking page with reusable React components. 
                Collaboration with cross-functional teams ensured seamless integration and alignment with project goals.
              </Typography>
            </ExperienceCard>
            <ExperienceCard  scrollRef={experienceRef} side="left" jobTitle='Developer' company="BenQ" date="May 2019 - August 2019">
              <Typography paragraph align="left">
                In my role, I improved QA department velocity by developing a streamlined Chrome extension for error reporting in the Mantis bug tracking tool. 
                This simplified bug capture, accelerating issue identification and resolution. 
                Additionally, I enhanced the Mention social media marketing tool, empowering the team to address user feedback effectively by analyzing and categorizing it for quick response and strategy adaptation. 
                I also automated the transfer and integration of user data from Eloqua to Salesforce, enhancing efficiency and accuracy in analyzing campaign performance. 
                Throughout these initiatives, I utilized my technical expertise to collaborate with cross-functional teams, driving productivity, enhancing user experiences, and optimizing marketing efforts.
              </Typography>
            </ExperienceCard>
            <ExperienceCard  scrollRef={experienceRef} side="left" jobTitle='Jr. Developer' company="Pixelbot" date="January 2018 - May 2018">
              <Typography paragraph align="left">
                I collaborated on developing React functionality for a globally marketed website commissioned by WWF. 
                The website aimed to promote environmental awareness through aggregated social media content. 
                Leveraging React, I helped create engaging features and a user-friendly platform for displaying social media content. 
                This collaborative project had a powerful impact on raising environmental consciousness on a global scale.
              </Typography>
            </ExperienceCard>
          </div>
          <div className="experience-border"></div>
          <div className='experience-grid-right'>
            <ExperienceCard  scrollRef={experienceRef} side="right" jobTitle='Developer' company="BenQ" date="January 2020 - May 2020">
              <Typography paragraph align="left">
                In my role, I prototyped streaming broadcast systems using experimental technologies like WebRTC and socket.io to explore real-time streaming possibilities. 
                I also implemented China-compliant web analytics tools, ensuring accurate user tracking within the Chinese market. 
                With technical expertise and collaboration, I drove innovation, met regulatory requirements, and delivered high-quality solutions.
              </Typography>
            </ExperienceCard>
            <ExperienceCard  scrollRef={experienceRef} side="right" jobTitle='Developer' company="Newtopia" date="September 2018 - December 2018">
              <Typography paragraph align="left">
                In my role, I made significant contributions to code quality and user experience. 
                I designed and implemented a Redux-based logging system for powerful error handling and user engagement insights. 
                Additionally, I refactored the mobile app's endpoint, added JSDoc documentation, and improved efficiency. 
                I also wrote comprehensive Jest unit tests, increasing code coverage to 90%. Furthermore, I actively addressed critical bugs, contributing to third-party open-source dependencies. 
                These efforts enhanced software reliability, stability, and user satisfaction.
              </Typography>
            </ExperienceCard>
          </div>
        </div>
        :
        <div className='mobile-experience'>
          {/* Big ToDO: 1. Move below into own component 2. rehaul experiencecard to support mobile and regular view in a good 1 component soln */}
          <div className="mobile-experience-card">
            <Typography variant="overline">May 2021 - August 2021</Typography>
            <Typography variant="h6">Dozr</Typography>
            <Typography variant="caption">Jr. Developer</Typography>
              <Typography paragraph align="left">
                In my role, I maintained and improved a high-traffic React web interface, deploying bug fixes and implementing new features. 
                I also led the overhaul of the email system, enhancing backend infrastructure and redesigning the format. 
                Additionally, I played a key role in re-implementing a customer's order tracking page with reusable React components. 
                Collaboration with cross-functional teams ensured seamless integration and alignment with project goals.
              </Typography>
          </div>
          <div className="mobile-experience-card">
            <Typography variant="overline">January 2020 - May 2020</Typography>
            <Typography variant="h6">BenQ</Typography>
            <Typography variant="caption">Developer</Typography>
              <Typography paragraph align="left">
                In my role, I prototyped streaming broadcast systems using experimental technologies like WebRTC and socket.io to explore real-time streaming possibilities. 
                I also implemented China-compliant web analytics tools, ensuring accurate user tracking within the Chinese market. 
                With technical expertise and collaboration, I drove innovation, met regulatory requirements, and delivered high-quality solutions.
              </Typography>
          </div>
          <div className="mobile-experience-card">
            <Typography variant="overline">May 2019 - August 2019</Typography>
            <Typography variant="h6">BenQ</Typography>
            <Typography variant="caption">Developer</Typography>
              <Typography paragraph align="left">
                In my role, I improved QA department velocity by developing a streamlined Chrome extension for error reporting in the Mantis bug tracking tool. 
                This simplified bug capture, accelerating issue identification and resolution. 
                Additionally, I enhanced the Mention social media marketing tool, empowering the team to address user feedback effectively by analyzing and categorizing it for quick response and strategy adaptation. 
                I also automated the transfer and integration of user data from Eloqua to Salesforce, enhancing efficiency and accuracy in analyzing campaign performance. 
                Throughout these initiatives, I utilized my technical expertise to collaborate with cross-functional teams, driving productivity, enhancing user experiences, and optimizing marketing efforts.
              </Typography>
          </div>
          <div className="mobile-experience-card">
            <Typography variant="overline">September 2018 - December 2018</Typography>
            <Typography variant="h6">Newtopia</Typography>
            <Typography variant="caption">Developer</Typography>
              <Typography paragraph align="left">
                In my role, I made significant contributions to code quality and user experience. 
                I designed and implemented a Redux-based logging system for powerful error handling and user engagement insights. 
                Additionally, I refactored the mobile app's endpoint, added JSDoc documentation, and improved efficiency. 
                I also wrote comprehensive Jest unit tests, increasing code coverage to 90%. Furthermore, I actively addressed critical bugs, contributing to third-party open-source dependencies. 
                These efforts enhanced software reliability, stability, and user satisfaction.
              </Typography>
          </div>
          <div className="mobile-experience-card">
            <Typography variant="overline">January 2018 - May 2018</Typography>
            <Typography variant="h6">Pixelbot</Typography>
            <Typography variant="caption">Jr. Developer</Typography>
              <Typography paragraph align="left">
                I collaborated on developing React functionality for a globally marketed website commissioned by WWF. 
                The website aimed to promote environmental awareness through aggregated social media content. 
                Leveraging React, I helped create engaging features and a user-friendly platform for displaying social media content. 
                This collaborative project had a powerful impact on raising environmental consciousness on a global scale.
              </Typography>
          </div>
        </div>

      }
    </div>
  )
}

Experience.propTypes = {}

export default Experience
