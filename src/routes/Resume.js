import resume from '../BrianChang_Resume082022.jpg'
import './Resume.css'

export default function Resume() {
   return (
      <div className='resume-container'>
         <img src={resume} alt="resume" className='resume' />
      </div>
   )
}