import './intro.scss'
import {init} from 'ityped' //for animation of span
import { useEffect,useRef } from 'react'

export default function Intro() {
  const textRef = useRef() ;

  useEffect(()=>{
    init(textRef.current,{
      showCursor:true ,
      backDelay:1500 ,
      backSpeed:60,
      strings:["WebDeveloper", "Programmer", "BlockChain Explorer", "CyberSecurity Enthusiast"]
    })
  },[]) 

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imageContainer">
          <img src="assets/me-removebg.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Suraj Kumar Sahu</h1>
          <h3>A <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
