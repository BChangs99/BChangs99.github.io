import React, { useRef, Fragment } from 'react'
import "./Experience.css"
import ExperienceCard from '../molecules/ExperienceCard'
import MobileExperienceCard from '../molecules/MobileExperienceCard'

function Experience() {
  const experienceRef = React.useRef()
  // We use useRef cause we only get the window size once 
  // Ignoring the use case of someone's screen resizing during use
  const windowSize = useRef({width: window.innerWidth, height: window.innerHeight});
  const experiences = [
    {
      position: "left",
      date: "May 2021 - August 2021",
      company: "Dozr",
      jobTitle: "Jr. Developer",
      summary: "In my role, I maintained and improved a high-traffic React web interface, deploying bug fixes and implementing new features. I also led the overhaul of the email system, enhancing backend infrastructure and redesigning the format. Additionally, I played a key role in re-implementing a customer's order tracking page with reusable React components. Collaboration with cross-functional teams ensured seamless integration and alignment with project goals."
    },
    {
      position: "right",
      date: "January 2020 - May 2020",
      company: "BenQ",
      jobTitle: "Developer",
      summary:"In my role, I prototyped streaming broadcast systems using experimental technologies like WebRTC and socket.io to explore real-time streaming possibilities. I also implemented China-compliant web analytics tools, ensuring accurate user tracking within the Chinese market. With technical expertise and collaboration, I drove innovation, met regulatory requirements, and delivered high-quality solutions."
    },
    {
      position: "left",
      date: "May 2019 - August 2019",
      company: "BenQ",
      jobTitle: "Developer",
      summary: "In my role, I improved QA department velocity by developing a streamlined Chrome extension for error reporting in the Mantis bug tracking tool.  This simplified bug capture, accelerating issue identification and resolution.  Additionally, I enhanced the Mention social media marketing tool, empowering the team to address user feedback effectively by analyzing and categorizing it for quick response and strategy adaptation.  I also automated the transfer and integration of user data from Eloqua to Salesforce, enhancing efficiency and accuracy in analyzing campaign performance. Throughout these initiatives, I utilized my technical expertise to collaborate with cross-functional teams, driving productivity, enhancing user experiences, and optimizing marketing efforts."
    },
    {
      position: "right",
      date: "September 2018 - December 2018",
      company: "Newtopia",
      jobTitle: "Developer",
      summary: "In my role, I made significant contributions to code quality and user experience. I designed and implemented a Redux-based logging system for powerful error handling and user engagement insights. Additionally, I refactored the mobile app's endpoint, added JSDoc documentation, and improved efficiency. I also wrote comprehensive Jest unit tests, increasing code coverage to 90%. Furthermore, I actively addressed critical bugs, contributing to third-party open-source dependencies. These efforts enhanced software reliability, stability, and user satisfaction."
    },
    {
      position: "left",
      date: "January 2018 - May 2018",
      company: "Pixelbot",
      jobTitle: "Jr. Developer",
      summary: "I collaborated on developing React functionality for a globally marketed website commissioned by WWF. The website aimed to promote environmental awareness through aggregated social media content.  Leveraging React, I helped create engaging features and a user-friendly platform for displaying social media content. This collaborative project had a powerful impact on raising environmental consciousness on a global scale."
    }
  ]

  // This is probably so not performant -- need to think of a better way to do this
  const leftExperiences = experiences.filter((experience) => experience.position === "left");
  const rightExperiences = experiences.filter((experience) => experience.position === "right");

  return (
      <Fragment>
        <div className='experience-header' ref={experienceRef}><h1>Experience</h1></div>
        { windowSize.current.width > 1500 ? 
          <div className='experience'>
            <div className="experience-grid-left">
              {leftExperiences.map((experience, index) => {
                return (
                    <ExperienceCard  
                    scrollRef={experienceRef} 
                    side="left" 
                    jobTitle={experience.jobTitle} 
                    company={experience.company} 
                    date={experience.date}
                    summary={experience.summary}
                    />
                    )
                  })}
            </div>
            <div className="experience-border"></div>
            <div className="experience-grid-right">
              {rightExperiences.map((experience, index) => {
                return (
                    <ExperienceCard  
                    scrollRef={experienceRef} 
                    side="right" 
                    jobTitle={experience.jobTitle} 
                    company={experience.company} 
                    date={experience.date}
                    summary={experience.summary}
                    />
                    )
                  })}
            </div>
          </div>
          :
          <div className='mobile-experience'>
            {experiences.map((experience, index) => {
              return (
                <MobileExperienceCard key={index} date={experience.date} company={experience.company} jobTitle={experience.jobTitle} summary={experience.summary} />
              )
            })}
          </div>
        }
      </Fragment>
  )
}

export default Experience
