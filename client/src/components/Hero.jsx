import logoAvatar from '../assets/icons/logotype/Cute Avatar.svg'
import githubIcon from '../assets/icons/social/bxl-github.svg'
import linkedinIcon from '../assets/icons/social/bxl-linkedin.svg' 
// import whatsappIcon from './assets/icons/social/bxl-whatsapp.svg'  
import emailIcon from '../assets/icons/social/bx-envelope.svg' 

function Hero() {

    return (
    <section id="home" className="container-hero max-w-screen-xl">
        <div className="hero">
            {/* <i className="light-btn"><box-icon name='sun' color='#e7e7e7'></box-icon></i>
            <i className="dark-btn"><box-icon name='moon' color='#454545' ></box-icon></i> */}
            <img className="m-5 h-[15rem]" src={logoAvatar} alt="Logo Avata"></img>
            <div className="hero-title flex flex-col w-[500px] m-5"> 
                <h1 className="text-start">¡Hola!, soy </h1> 
                <h1 className="text-start"><span className="D text-primary">Daniel</span></h1>
                <h1 className="text-end"><span className="T text-primary">Tunjano</span></h1>
            </div>
        </div>
    
        <div className="container-footerHero flex items-start justify-between max-xl:w-full">
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
                <h3>Diseñador UX UI, Industrial &<br></br>  Desarrollador Fronted Jr.</h3>
                <h4>| design & code.</h4>
            </div>
        </div>
   </section>
  )
}
export default Hero;