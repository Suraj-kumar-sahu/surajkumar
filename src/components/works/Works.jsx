import { useState } from 'react'
import './works.scss'

export default function Work() {
  const [currentSlide,setCurrentSlide] = useState(0) ;
  const data =[
    {id:"1",
    icon:"assets/mobile.png",
    title:"FunDose1",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, necessitatibus.",
    img:"assets/pic1.png"
  },
  {id:"2",
    icon:"assets/mobile.png",
    title:"FunDose2",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, necessitatibus.",
    img:"assets/pic1.png"
  },
  {id:"3",
    icon:"assets/mobile.png",
    title:"FunDose3",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, necessitatibus.",
    img:"assets/pic1.png"
  },
  {id:"4",
    icon:"assets/mobile.png",
    title:"FunDose4",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, necessitatibus.",
    img:"assets/pic1.png"
  },
  ] ;

  const handleClick =  (way) => {
    console.log("clicked");
      way === "left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0)  ;
  } ;

  return (
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
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/pic1.png" alt="Loading..." />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/right.png" className='arrow left' onClick={()=> handleClick("left") } alt="l"  />
      <img src="assets/right.png" className='arrow right' onClick={()=>handleClick()} alt="l" />
    </div>
  )
}
