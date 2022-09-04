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
          <img src="assets/pic1.png" alt="Loading..." />
          <h3>FunDose Extension</h3>
        </div>
        <div className="item">
          <img src="assets/pic1.png" alt="Loading..." />
          <h3>FunDose Extension</h3>
        </div>
        <div className="item">
          <img src="assets/pic1.png" alt="Loading..." />
          <h3>FunDose Extension</h3>
        </div>
        <div className="item">
          <img src="assets/pic1.png" alt="Loading..." />
          <h3>FunDose Extension</h3>
        </div>
        <div className="item">
          <img src="assets/pic1.png" alt="Loading..." />
          <h3>FunDose Extension</h3>
        </div>
        <div className="item">
          <img src="assets/pic1.png" alt="Loading..." />
          <h3>FunDose Extension</h3>
        </div>
      </div>
    </div>
  )
}
