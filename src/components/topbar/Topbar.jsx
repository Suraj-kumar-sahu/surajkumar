import './topbar.scss'
import { Person, Mail } from "@mui/icons-material"

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>  {/* if menuOpen true then add "active" */}
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'><h1>Logo</h1></a>
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
