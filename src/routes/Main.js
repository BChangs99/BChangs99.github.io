import "./Main.css"
import headshot from '../IMG_8920.JPG'
import ventiLogo from '../ventilogo.jpg'
import ventiPhysical from '../ventiphysical.png'

export default function Main() {
   // **Todo
   // 1. Add a link to the resume
   // 2. Refactor projects, skills into its own component
   // 3. Add icons/links for contact info
   return (
      <div className="main">
         <div className="main-section-one">
            <div className="main-text-intro-left">
               <h1>Howdy!</h1>
               <h2>I'm Brian Chang</h2>
            </div>
            <div className="main-img">
               <img src={headshot} alt="headshot" className='headshot' />
            </div>
            <div className="main-text-intro-right">
               <h2>Web Developer</h2>
               <h2>Mechatronics Engineer</h2>
               <h2>Based in Vancouver</h2>
            </div>
         </div>
         <h1>About Me</h1>
         <p className="main-bio">
            Howdy Y'all &#129312;! I'm Brian Chang, and I'm a recent Mechatronics graduate from the University of Waterloo. I started off as a self-taught web developer,
            but have since accrued professional work experience over the last 5 years in Co-Op positions. I've worked both with and without a team, and have been
            able to excel in many types of environments. Over the years I've worked as a developer for small startups in Canada to large corporations in Taiwan. I'm looking for an opportunity
            to further cultivate my current MERN (Mongo Express React Node) skillset and also to learn exciting new technologies to add to my repertoire!
            Check out some of my projects below, and feel free to reach out if you'd like to chat!
         </p>
         <h1>Projects</h1>
         <img src={ventiLogo} alt="ventiLogo" className='venti-logo' />
         <p className="main-projects-venti">
            Venti is a smart thermostat and vent controller designed to offer users a convenient way to control their home's heating and ventilation systems. 
            The system automatically adjusts its vent fin angles to increase or decrease airflow in an effort to drive temperatures to the user's set goals.
            Theoreticallly, the system also supports actual temperature control of a home's existing thermostat. The device's objective is to limit actual thermostat 
            changes, and to maximize its airflow angles to achieve the user's desired temperature.
            This project was co-founded with three other members of my cohort at the University of Waterloo to serve as our Capstone project. The inspiration for
            this project came from the fact that space heating largely dominates the Canadian residential energy consumption and the lack of minute control HVAC systems
            can offer in multi-person homes. As such, the system's competitive edge are its relatively inexpensiveness, airflow recycling, and device-agnostic platform.
         </p>
         <img src={ventiPhysical} alt="ventiphysical" className='venti-physical' />
         <p>
            My responsibilities in this project were software-based, for example designing and developing the two-way LoRa communication protocol between the central
            vent hub and the vents themselves. More specifically, this involved structuring the data packets that the devices would communicate to each other. This required
            a consideration of the data packet size limits due to the volume of information that needed to be communicated. For example, a data packet from the vent sent to 
            the hub would include its id number, current temperature, current vent angle, and sensory information such as humidity, pressure, and air quality. For the most up-to 
            date information while preserving battery life, I also assisted in writing sleep software to keep the vent in low-power idling mode when not sending/receiving data packets
            (60 seconds). Aside from device communication, I also assisted with the user interface design, which involved the creation of a live-updating dashboard written in HTML & CSS.
         </p>
         <h2>Mantis Bug Reporter Extension</h2>
         <h2>Broadcasting Prototype</h2>
         <h2>Connect2Earth</h2>
         <h2>Camera Gimbal</h2>
         <h2>Video Game Reviewer</h2>
      </div>
   )
}