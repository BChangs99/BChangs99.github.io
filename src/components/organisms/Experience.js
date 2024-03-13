import React, { Fragment } from 'react'
import "./Experience.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

function Experience() {
  return (
      <Fragment>
        <div className='experience-header'><h1>Experience</h1></div>
          <VerticalTimeline
          animate={true}
          >
            <VerticalTimelineElement
              date="January 2024 -  Present"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<WorkOutlineOutlinedIcon />}
            >
              <h3>HungerFord Properties</h3>
              <h4>Freelance Contractor | Vancouver, BC</h4>
              <p>
                I worked with HungerFord Properties to develop a web automation script to gather, clean, and present jobs data from various job boards online. For this project I created the scraper using JavaScript and Puppeteer.js. With quality feedback and iterative development, I delivered a robust solution to meet my client's needs
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="October 2023 - Dec 2023"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SchoolOutlinedIcon />}
            >
              <h3>Meta Marketing Analytics Professional Certificate</h3>
              <h4>Student | Coursera</h4>
              <p>
                Introduction to Data Analytics,
                Data Analysis with Spreadsheets and SQL,
                Data Analytics Methods for Marketing,
                Marketing Analytics Foundation
                Marketing Analytics with Meta
                Python Data Analytics,
                Statistics for Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Jan 2022 - May 2022"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SchoolOutlinedIcon />}
            >
              <h3>University of Waterloo</h3>
              <h4>Student | Waterloo, Ontario</h4>
              <p>
                Production and Service Operations Management,
                Mechatronics Engineering Project,
                Foundations of Artificial Intelligience,
                User Centred Design Methods
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Sep 2021 - Dec 2021"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SchoolOutlinedIcon />}
            >
              <h3>University of Waterloo</h3>
              <h4>Student | Waterloo, Ontario</h4>
              <p>
                Digital Control Applications, 
                Introduction to Optimization,
                Mechatronics Engineering Design Project,
                Cognitive Ergonomics, 
                Classical Mythology
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="May 2021 - August 2021"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<WorkOutlineOutlinedIcon />}
            >
              <h3>Dozr</h3>
              <h4>Developer | Kitchener, Waterloo</h4>
              <p>
                While working at Dozr, I maintained and improved a high-traffic React web interface, deploying bug fixes and implementing new features. I also led the overhaul of the email system, enhancing backend infrastructure and redesigning the format. Additionally, I played a key role in re-implementing a customer's order tracking page with reusable React components. Collaboration with cross-functional teams ensured seamless integration and alignment with project goals.
              </p>
              <div>---Add pills here---</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Jan 2021 - May 2021"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SchoolOutlinedIcon />}
            >
              <h3>University of Waterloo</h3>
              <h4>Student | Waterloo, Ontario</h4>
              <p>
                Fluid Mechanics 1, 
                Engineering Economics,
                Electromechanical Machine Design,
                Automatic Control Systems, 
                Mechatronics Engineering Design Workshop
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Sep 2020 - Dec 2020"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SchoolOutlinedIcon />}
            >
              <h3>University of Waterloo</h3>
              <h4>Student | Waterloo, Ontario</h4>
              <p>
                Society, Technology, and Values,
                History and Film,
                Research in the Workplace
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="May 2020 - Sep 2020"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SchoolOutlinedIcon />}
            >
              <h3>University of Waterloo</h3>
              <h4>Student | Waterloo, Ontario</h4>
              <p>
                Kinematics and Dynamics of Machines,
                Introduction to Thermodynamics and Heat Transfer,
                Actuators and Power Electronics,
                Microprocessor Systems and Interfacing for Mechatronics Engineering,
                Systems Models 1
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Jan 2020 - May 2020"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<WorkOutlineOutlinedIcon />}
            >
              <h3>BenQ</h3>
              <h4>Developer | Taipei, Taiwan</h4>
              <p>
              For my second Co-op at Benq, I prototyped streaming broadcast systems using experimental technologies like WebRTC and socket.io to explore real-time streaming possibilities. I also implemented China-compliant web analytics tools, ensuring accurate user tracking within the Chinese market. With technical expertise and collaboration, I drove innovation, met regulatory requirements, and delivered high-quality solutions.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Sep 2019 - Dec 2019"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SchoolOutlinedIcon />}
            >
              <h3>University of Waterloo</h3>
              <h4>Student | Waterloo, Ontario</h4>
              <p>
                Advanced Calculus,
                Numerical Methods,
                Sensors and Instrumentation,
                Introduction to Computer Structures and Real-Time Systems,
                Linear Systems and Signals
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="May 2019 - Sep 2019"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<WorkOutlineOutlinedIcon />}
            >
              <h3>BenQ</h3>
              <h4>Developer | Taipei, Taiwan</h4>
              <p>
              Working at BenQ, I improved QA department velocity by developing a streamlined Chrome extension for error reporting in the Mantis bug tracking tool.  This simplified bug capture, accelerating issue identification and resolution.  Additionally, I enhanced the Mention social media marketing tool, empowering the team to address user feedback effectively by analyzing and categorizing it for quick response and strategy adaptation.  I also automated the transfer and integration of user data from Eloqua to Salesforce, enhancing efficiency and accuracy in analyzing campaign performance. Throughout these initiatives, I utilized my technical expertise to collaborate with cross-functional teams, driving productivity, enhancing user experiences, and optimizing marketing efforts.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Sep 2019 - Dec 2019"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SchoolOutlinedIcon />}
            >
              <h3>University of Waterloo</h3>
              <h4>Student | Waterloo, Ontario</h4>
              <p>
                Experimental Measurements and Statistical Analysis,
                Ordinary Differential Equations,
                Mechanics of Deformable Solids,
                Introduction to Microprocessors and Digital Logic,
                Physics 2 (Dynamics)
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Sep 2018 - Dec 2018"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<WorkOutlineOutlinedIcon />}
            >
              <h3>Newtopia</h3>
              <h4>Developer | Toronto, Canada</h4>
              <p>
              In my role, I made significant contributions to code quality and user experience. I designed and implemented a Redux-based logging system for powerful error handling and user engagement insights. Additionally, I refactored the mobile app's endpoint, added JSDoc documentation, and improved efficiency. I also wrote comprehensive Jest unit tests, increasing code coverage to 90%. Furthermore, I actively addressed critical bugs, contributing to third-party open-source dependencies. These efforts enhanced software reliability, stability, and user satisfaction.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="May 2018 - September 2018"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SchoolOutlinedIcon />}
            >
              <h3>University of Waterloo</h3>
              <h4>Student | Waterloo, Ontario</h4>
              <p>
                Calculus 2 for Engineering,
                Structure and Properties of Materials,
                Statics,
                Circuits,
                Algorithms and Data Structures
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Jan 2018 - May 2018"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<WorkOutlineOutlinedIcon />}
            >
              <h3>Developer | Toronto, Canada</h3>
              <h4>Jan 2018 - May 2018</h4>
              <p>
              I collaborated on developing React functionality for a globally marketed website commissioned by WWF. The website aimed to promote environmental awareness through aggregated social media content.  Leveraging React, I helped create engaging features and a user-friendly platform for displaying social media content. This collaborative project had a powerful impact on raising environmental consciousness on a global scale.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Sep 2017 - Dec 2017"
              contentStyle={{ borderRadius: '1em' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SchoolOutlinedIcon />}
            >
              <h3>University of Waterloo</h3>
              <h4>Student | Waterloo, Ontario</h4>
              <p>
                Chemistry for Engineers,
                Digital Computation,
                Linear Algebra for Engineering,
                Calculus 1 for Engineering,
                Mechatronics Engineering
              </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
      </Fragment>
  )
}

export default Experience
