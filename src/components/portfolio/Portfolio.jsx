import { useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'

export default function Portfolio() {
  const[selected,setSelected] = useState("featured") ;
  const list =[
    {
      id:"featured",
      title:"featured",
    },
    {
      id:"react",
      title:"React App",
    },
    {
      id:"javascript",
      title:"Javascript App",
    },
    {
      id:"decentralised",
      title:"Decentralised App",
    },
    {
      id:"chrome",
      title:"Chrome Extension",
    }
  ]

  return (
    
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList 
          title={item.title}
          active ={selected===item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="screenshots/chatapp1.png" alt="Loading..." />
          <h3>WassUp:Chat App</h3>
        </div>
        <div className="item">
          <img src="screenshots/newsmonk.png" alt="Loading..." />
          <h3>NewsMonk</h3>
        </div>
        <div className="item">
          <img src="screenshots/recipe.png" alt="Loading..." />
          <h3>Recipe App</h3>
        </div>
        <div className="item">
          <img src="screenshots/countdown-timer.png" alt="Loading..." />
          <h3>Countdown-Timer</h3>
        </div>
        <div className="item">
          <img src="screenshots/textutils.png" alt="Loading..." />
          <h3>TextUtils</h3>
        </div>
        <div className="item">
          <img src="screenshots/quiz.png" alt="Loading..." />
          <h3>Quiz App</h3>
        </div>
        
      </div>
    </div>
  )
}
