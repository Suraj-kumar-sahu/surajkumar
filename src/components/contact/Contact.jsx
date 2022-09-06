import { useState } from 'react';
import './contact.scss'

export default function Contact() {
  const[message,setMessage] = useState(false) ;

  const handleSubmit=(e)=>{
    e.preventDefault() ;
    setMessage(true) ;
  }

  return (
    
      <div className='contact' id='contact'>
        <div className="left">
          <img src="assets/contact-us.png" alt="" />
          <div className="socialIcons">
            <a href="https://www.linkedin.com/in/suraj-kumar-sahu-1a73401ba" target="blank"><img src="assets/linkedin.png" alt="Loading..." /></a>
            <a href="https://github.com/Suraj-kumar-sahu" target="blank"><img src="assets/github.png" alt="Loading..." /></a>
            <a href="https://www.instagram.com/_surajkumarrr_____/" target="blank"><img src="assets/insta.png" alt="Loading..." /></a>
            <a href="https://www.fb.com" target="blank"><img src="assets/fb.png" alt="Loading..." /></a>
          </div>
          <span>Made with <img src="assets/heart.png" alt="" /> by Suraj Kumar Sahu</span>
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' />
            <textarea placeholder='Message'></textarea>
            <button type='submit'>Send</button>
            {message && <span>Thanks, I'll reply ASAP :) </span> } 
          </form>
        </div>
      </div>

    
  )
}
