import "./Main.css"
import headshot from '../IMG_8920.JPG'
import ventiLogo from '../ventilogo.jpg'

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
            Howdy Y'all &#129312;. I'm Brian Chang, and I'm a recent Mechatronics graduate from the University of Waterloo. I'm a self-taught web developer,
            having accrued professional work experience over 5 years worth of Co-Op positions. I've worked both with and without a team, and have been
            able to excel in many environments. I've worked from small startups in Canada to large corporations in Taiwan. I'm looking for an opportunity
            to further cultivate my current MERN (Mongo Express React Node) skillset and also to learn exciting new technologies to add to my repertoire!
            Check out some of my projects below, and feel free to reach out if you'd like to chat!
         </p>
         <h1>Projects</h1>
         <img src={ventiLogo} alt="ventiLogo" className='venti' />
         <p className="main-projects-venti">
            Venti is a smart thermostat and vent controller designed to offer users a convenient way to control their home's heating and ventilation systems.

         </p>
         <h2>Mantis Bug Reporter Extension</h2>
         <h2>Broadcasting Prototype</h2>
         <h2>Connect2Earth</h2>
         <h2>Camera Gimbal</h2>
         <h2>Video Game Reviewer</h2>
      </div>
   )
}