import './menu.scss' 

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#intro">HOME</a>
        </li>
      </ul>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#about">ABOUT</a>
        </li>
      </ul>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#portfolio">PORTFOLIO</a>
        </li>
      </ul>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#works">WORKS</a>
        </li>
      </ul>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  )
}
