import './about.scss'

export default function About() {
  return (
    <div className='about' id='about'>
      <img src="assets/texture.jpg" alt="" />
      <div className="container">
        <div className="left">
          <h2>Who Am I?</h2>
          <span>I am a pre-final year undergrad at NIT, Rourkela, persuing my B.Tech in Biomedical Engineering.I develop Web Apps in <b> ReactJS⚛</b>, Code in C++ , Javascript and Python. Learning my way to become a 
          <b> Fullstack Web Dev.</b> 
          I'm also very much interested in <b>Blockchain Development</b>  and develop Smart Contracts using <b>Solidity</b>  programming language .
          </span>

          <div className="socialTray">
              <div className="resume">
              <a href="https://drive.google.com/file/d/1YRzbyd6JGW3bvzGYtYKga-VFXYT1ZNjk/view?usp=sharing" target="blank">
              <button>View Resume</button>
              </a>
            </div>
          </div>
        </div>

        <div className="right">
            <img src="assets/hero.png" alt="" />
        </div>
      </div>
    </div>
  )
}
