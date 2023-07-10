import React, { useEffect } from 'react'
import ventiLogo from '../assets/ventilogo.webp'
import ventiPhysical from '../assets/ventiphysical.webp'
import webIcon from '../assets/internet.webp'
import mantis from '../assets/Mantis.webp'
import { useRef } from 'react'
import "./Projects.css"

export default function Projects() {
   const projectsRef = useRef(null);
   const ventiRef = useRef(null);
   const mantisRef = useRef(null);
   const broadcastingPrototypeRef = useRef(null);
   const connect2earthRef = useRef(null);
   const videoGameReviewerRef = useRef(null);
   const mte220CalculatorRef = useRef(null);

   const options = {
      root: null, // relative to document viewport
      rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.1 // visible amount of item shown in relation to root
   }

   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add("show-projects");
         } else {
            entry.target.classList.remove("show-projects");
         }
      })
   }, options);

   useEffect(() => {
      if (projectsRef.current) observer.observe(projectsRef.current)
      if (ventiRef.current) observer.observe(ventiRef.current)
      if (mantisRef.current) observer.observe(mantisRef.current)
      if (broadcastingPrototypeRef.current) observer.observe(broadcastingPrototypeRef.current)
      if (connect2earthRef.current) observer.observe(connect2earthRef.current)
      if (videoGameReviewerRef.current) observer.observe(videoGameReviewerRef.current)
      if (mte220CalculatorRef.current) observer.observe(mte220CalculatorRef.current)

      return () => {
         observer.disconnect();
      }
   }, [projectsRef, ventiRef, mantisRef, broadcastingPrototypeRef, connect2earthRef, videoGameReviewerRef, mte220CalculatorRef, options])


   // ToDo
   // Make projects section look better -- too big rn
  return (
   <div className="main-projects">
      <h1 ref={projectsRef} className="hidden-projects">Projects</h1>
         <div className='main-projects-container'>
            <div ref={ventiRef} className="hidden-projects projects">
               <h2>Venti</h2>
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
            </div>
            <div ref={mantisRef} className="hidden-projects projects">
                  <h2>Mantis Bug Reporter Extension</h2>
                  {/* <a href="https://github.com/BChangs99/MantisExtension"><img src={webIcon} alt="Web Link" className="mantis-web-icon"/></a> */}
               <p>
               <p>
                  During my Co-Op experience at BenQ in Taiwan, I spearheaded an exciting project aimed at enhancing the bug tracking capabilities of the quality assurance team. 
                  From the very outset, starting with the initial design stage, planning, and design mockups, I was entrusted with complete authority and accountability for the entire project.
                  The culmination of my efforts was the development of a cutting-edge Chrome extension that revolutionized the process of reporting bugs to our internal bug tracking system, Mantis. 
                  Leveraging the secure APIs provided by Mantis, I implemented a seamless authentication mechanism within the extension. Once authenticated, users gained access to a plethora of powerful features and functionalities.
               </p>
               <p>
                  The Chrome extension empowered users with the flexibility to select the specific project or folder to which the bug ticket should be directed, ensuring streamlined organization and efficient workflow management. 
                  To comply with Mantis's requirements for bug submission, I designed an intuitive form within the extension, capturing all the necessary information needed for comprehensive bug reports.
                  Furthermore, I integrated a sleek modal window into the extension, leveraging Chrome's inherent capabilities for capturing screenshots and enabling image annotation. 
                  This feature allowed users to provide visual context and annotations directly within the bug reports, aiding the quality assurance team in precisely identifying and resolving issues.
               </p>
               <p>
                  To realize this project, I employed React, a powerful and popular JavaScript library, enabling the development of a highly responsive and dynamic user interface. 
                  The extension itself was a pure front-end application, seamlessly integrating with Chrome's extensions ecosystem to deliver a seamless user experience.
                  Overall, my Co-Op project at BenQ enabled me to take charge of the entire development process, from conception to deployment, resulting in a sophisticated Chrome extension that significantly accelerated the quality assurance team's bug tracking capabilities.
               </p>
               </p>
               <img src={mantis} alt="Mantis Bug Tracker" className="mantis-example"/>
            </div>
            <div ref={broadcastingPrototypeRef} className="hidden-projects projects">
               <h2>Broadcasting Prototype</h2>
               <p>
                  During my second Co-Op experience at BenQ in Taiwan, I embarked on an exciting project focused on prototyping broadcasting capabilities for BenQ's televisions. 
                  Recognizing my proficiency in web development, I made the strategic decision to create the project as a website, rather than relying on the native operating system of the television.
               </p>
               <p>
                  The project kicked off with an extensive research phase, aimed at identifying the most viable solutions for achieving our broadcasting goals. After careful consideration, we narrowed down our options to two prominent technologies: Socket.io and Amazon Kinesis. 
                  While both options presented compelling features, we weighed the trade-offs and ultimately selected Socket.io as the foundation for our minimum viable product.
               </p>
               <p>
                  The decision to go with Socket.io was driven by several factors. Firstly, utilizing Amazon Kinesis would have significantly increased development time, posing a potential hurdle to the project's prototyping phase. 
                  Additionally, the lack of server-side JavaScript capabilities in Kinesis further influenced our choice, as it would have required additional resources and dependencies to overcome this limitation.
               </p>
               <p>
                  With the technology stack in place, I devoted myself to swiftly implementing the prototype. Leveraging the power and flexibility of Socket.io, I rapidly developed the broadcasting capabilities within a tight timeline of just one month. 
                  The result was a fully functional system that showcased its remarkable capabilities during successful demonstrations to higher management.
               </p>
               <p>
                  Throughout the implementation process, I ensured that the prototype adhered to industry best practices and demonstrated robustness, scalability, and security. 
                  By leveraging my expertise in web development, I seamlessly integrated the broadcasting functionalities into a user-friendly website interface, enabling effortless communication and control of BenQ televisions.
               </p>
               <p>
                  The successful completion of this project not only showcased my abilities in web development and prototyping but also highlighted my strategic decision-making skills. 
                  By selecting Socket.io and utilizing my knowledge in the field, I expedited the development process, achieving remarkable results within a short timeframe.
               </p>
            </div>
            <div ref={connect2earthRef} className="hidden-projects projects">
               <h2>Connect2Earth</h2>
               <p>
                  In my very first co-op experience as a web developer at Pixelbot, I had the incredible opportunity to contribute to a groundbreaking project. 
                  This particular undertaking involved the implementation of a React-based social media hub, specifically designed for scraping and aggregating posts from popular platforms such as Twitter, Instagram, and Facebook. 
                  The goal was to curate content related to a comprehensive list of environmental tags, providing users with a centralized platform to explore and engage with environmentally conscious discussions.
               </p>
               <p>
                  Imagine a user being able to effortlessly access posts about "Rainforests" in "Japan" with just a few clicks. 
                  That's precisely what this project aimed to achieve. By harnessing the power of APIs offered by the three major social media platforms, the website dynamically scraped and compiled posts aligned with the chosen environmental tags.
               </p>
               <p>
                  As a key contributor to this groundbreaking initiative, my primary responsibility lay in implementing the captivating front-end design envisioned by our esteemed client, the World Wildlife Fund (WWF). 
                  Armed with designs and wireframes provided by the WWF, I meticulously translated their creative vision into an engaging user interface, leveraging the versatility and power of React.
               </p>
               <p>
                  Additionally, I took on the challenge of integrating IP detection functionality into the website. This feature allowed us to provide personalized experiences for users by automatically detecting their geographical location. 
                  Leveraging the services of a reputable third-party translation company, we seamlessly incorporated expert translations to cater to users in their preferred language. 
                  Moreover, I ensured that the website dynamically customized links to match the user's country of origin, enhancing the overall user experience and navigation.
               </p>
               <p>
                  Regrettably, due to the conclusion of the Connect2Earth event, which I played a significant role in developing, I am unable to share the project's code or visuals. 
                  However, I can confidently say that the final product served as an innovative and impactful tool in promoting environmental awareness and engagement on social media platforms.
               </p>
               <p>
                  This first co-op experience not only allowed me to hone my web development skills but also provided me with invaluable insights into project collaboration, client interactions, and the importance of delivering a user-centric experience. 
                  It laid a solid foundation for my career as a web developer, igniting my passion for creating meaningful digital solutions.
               </p>
            </div>
            <div ref={videoGameReviewerRef} className="hidden-projects projects">
               <h2>Video Game Reviewer</h2>
               <p>
                  During my journey to acquire full-stack web development skills, I embarked on an enriching exercise and collaborative practice with my talented friend, Samuel Lin, whose contributions elevated the project to new heights. 
                  Together, we delved into the intricacies of building a web application from scratch, acquiring valuable experience in every aspect of its development.
               </p>
               <p>
                  In this endeavor, I assumed the role of back-end developer, taking charge of creating robust routes and implementing essential endpoint protection for validated users using JSON Web Tokens (JWT). 
                  Leveraging the power of Express, Node.js, and MongoDB, I crafted a secure and efficient back-end infrastructure capable of handling data storage and retrieval seamlessly. 
                  By employing industry best practices and adhering to the principles of clean code, I ensured the stability and scalability of our application's foundation.
               </p>
               <p>
                  To guarantee the reliability and functionality of our APIs, I conducted comprehensive testing using Postman, meticulously validating their behavior and responsiveness under various scenarios. 
                  This rigorous testing process served as a crucial step in delivering a high-quality product that met our users' expectations.
               </p>
               <p>
                  In addition to my back-end responsibilities, I also actively participated in the front-end implementation, collaborating closely with Samuel to determine the optimal distribution of application state management using Redux. 
                  Through effective communication and synchronized efforts, we ensured that the front-end seamlessly interacted with the back-end, providing a cohesive and delightful user experience.
               </p>
               <p>
                  This collaborative exercise not only honed my technical skills in back-end development, but it also fortified my ability to work effectively within a team. By collaborating with Samuel, I gained a deeper understanding of the importance of clear communication, efficient code integration, and shared project ownership. 
                  Together, we tackled challenges, explored innovative solutions, and delivered an application that surpassed our initial goals.
               </p>
               <p>
                  This immersive experience further solidified my passion for full-stack web development, exposing me to the intricacies of both front-end and back-end technologies. 
                  It instilled in me a sense of pride and accomplishment, paving the way for future endeavors where I can leverage my skills to create impactful web applications.
               </p>
            </div>
            <div ref={mte220CalculatorRef} className="hidden-projects projects">
               <div className="main-projects-mte220">
                  <h2>MTE 220 Mark Calculator</h2>
               <a href="https://github.com/BChangs99/MTE220_Calculator"><img src={webIcon} alt="Web Link" className="mte220-web-icon"/></a>
               </div>
               <p>
               In my pursuit of academic excellence during MTE 220 (Sensors and Instrumentation) under the guidance of James Barby, I encountered a notable challenge posed by the intricate and time-consuming marking scheme. 
               Driven by a desire to alleviate the burden for myself and fellow students, I took it upon myself to develop a script that would simplify the calculation process. 
               By leveraging my programming expertise, I crafted a comprehensive solution that seamlessly integrated with the course's grading structure. 
               This script automated the complex calculations, offering an efficient and accurate method for determining our final marks. 
               This endeavor not only showcased my problem-solving abilities but also demonstrated my commitment to enhancing the academic experience by simplifying complex tasks through technology.
               </p>
            </div>
         </div>
    </div>
  )
}
