// import logoAvatar from '../assets/icons/logotype/Cute Avatar.svg'
import logoAvatar from '../assets/icons/logotype/Cute Avatar2.svg'
import githubIcon from '../assets/icons/social/bxl-github.svg'
import linkedinIcon from '../assets/icons/social/bxl-linkedin.svg' 
// import whatsappIcon from './assets/icons/social/bxl-whatsapp.svg'  
import emailIcon from '../assets/icons/social/bx-envelope.svg' 
import { basics, hero } from '../../cv.json'

const { firstname, lastname, label, label2 } = basics
const { titleHero } = hero

function Hero() {

    return (
    <section id="home" className="container-hero max-w-screen-xl">
        <div className="hero px-5 ">
            {/* <i className="light-btn"><box-icon name='sun' color='#e7e7e7'></box-icon></i>
            <i className="dark-btn"><box-icon name='moon' color='#454545' ></box-icon></i> */}
            <img className="" src={logoAvatar} alt="Logo Avata"></img>
            <div className="hero-title w-[500px] m-5 max-md:w-full"> 
                <h1 className="text-start">{titleHero}</h1> 
                <h1 className="text-start"><span className="D text-primary">{firstname}</span></h1>
                <h1 className="text-end"><span className="T text-primary">{lastname}</span></h1>
            </div>
        </div>
    
        <div className="container-footerHero ">
            <div className="footerHero-links flex items-center gap-4">
                <a href="https://github.com/danieltb92" target="_blank" rel="noopener"> 
                <img src={githubIcon} alt="icono Github"></img>
                </a>                    
                <a href="https://www.linkedin.com/in/daniel-tunjano" target="_blank" rel="noopener">
                    <img src={linkedinIcon} alt="icono Linkedin"></img>
                </a>
                <a href="mailto:danieltb92@hotmail.com" target="_blank" rel="noopener">
                    <img src={emailIcon} alt="icono Email"></img>
                </a>
            </div>
    
            <div className="footerHero-description">
                <h3>{label}<br></br>{label2}</h3>
                <h4>| design & code.</h4>
            </div>
        </div>
   </section>
  )
}
export default Hero;
