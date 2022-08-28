import resume from '../BrianChang_Resume082022.jpg'
import downloadButton from '../download.png'
import './Resume.css'
import ReactGA from 'react-ga';

export default function Resume() {
   function handleDownloadOnClick () {
      // Log the click event to GA
      ReactGA.event({
         category: 'Resume',
         action: 'Clicked',
         label: 'Download',
      });
   }
   return (
      <div className='main-resume'>
         <h3>
            <div className='main-resume-download-container'>
               <img src={downloadButton} alt="download button" className="main-resume-download-icon" />
               <a 
                  href="/static/media/BrianChang_Resume082022.ca5b4412593d6a9dfbda.jpg" 
                  className='main-resume-download' 
                  download 
                  onClick={handleDownloadOnClick}>
                     Download PDF
               </a>
            </div>
         </h3>
         <div className='resume-container'>
            <img src={resume} alt="resume" className='resume' />
         </div>
      </div>
   )
}