import './topbar.scss'
import { Person, Mail } from "@mui/icons-material"

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>  {/* if menuOpen true then add "active" */}
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'><img src="assets/logo.png" alt="logo" /></a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 8260533869</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>surajsahu13sk@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="tray">
            <a href="#intro"> <span>Home</span></a>
            <a href="#about"> <span>About</span></a>
            <a href="#skill"> <span>Skills</span></a>
            <a href="#portfolio"> <span>Portfolio</span></a>
            <a href="#works"> <span>Works</span></a>
            <a href="#contact"> <span>Contact</span></a>
          </div>
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
