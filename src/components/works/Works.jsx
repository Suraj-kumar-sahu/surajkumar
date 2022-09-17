import { useState } from 'react'
import './works.scss'

export default function Work() {
  const [currentSlide,setCurrentSlide] = useState(0) ;
  const data =[
    {id:"1",
      icon:"assets/mobile.png",
      title:"NewsMonk",
      desc:"It serves Realtime news of different categories ,Made by React Js using newsAPI .",
      img:"screenshots/newsmonk.png"
    },
    {id:"2",
    icon:"assets/mobile.png",
    title:"WassUp",
    desc:"It's a private chat application made using React Js. User can made it's personal account and log in to it's profile to chat .",
    img:"screenshots/chatapp1.png"
  },
  {id:"3",
    icon:"assets/mobile.png",
    title:"Recipe App",
    desc:"It's a Recipe app made using Vanilla Js ,It will serve you random recipes and you can search for different recipes and add them to your favourites list .",
    img:"screenshots/recipe.png"
  },
  {id:"4",
    icon:"assets/mobile.png",
    title:"Countdown-Timer",
    desc:"It is a simple Count-down Timer app made using Vanilla Js .",
    img:"screenshots/countdown-timer.png"
  },
  {id:"5",
    icon:"assets/mobile.png",
    title:"TextUtils",
    desc:"It is a Text Utility app made using React js.You can make simple operation like upper/lower/remove space etc. to your Texts .  ",
    img:"screenshots/textutils.png"
  },
  {id:"6",
    icon:"assets/mobile.png",
    title:"Quiz App",
    desc:"It is a simple quiz app . you can choose any one answer among given four options .",
    img:"screenshots/quiz.png"
  },
  ] ;

  const handleClick =  (way) => {
    console.log("clicked");
      way === "left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : data.length-1) : setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0)  ;
  } ;

  return (
    <>

    <div className='works' id='works'>
      <div className="slider" style={{transform: `translateX( -${currentSlide * 100}vw)` }}> 
      
        {data.map((d) =>(
          <div className="container">
            
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>GitHub</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="Loading..." />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/right.png" className='arrow left' onClick={()=> handleClick("left") } alt="l"  />
      <img src="assets/right.png" className='arrow right' onClick={()=>handleClick()} alt="l" />
    </div>
    </>
  )
}
