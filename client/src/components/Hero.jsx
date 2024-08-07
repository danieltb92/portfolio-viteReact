import logoAvatar from '../assets/icons/logotype/Cute Avatar.svg'
import githubIcon from '../assets/icons/social/bxl-github.svg'
import linkedinIcon from '../assets/icons/social/bxl-linkedin.svg' 
import emailIcon from '../assets/icons/social/bx-envelope.svg' 
import { useTranslation } from 'react-i18next'


function Hero() {
    const { t } = useTranslation();
    return (
    <section id="home" className="container-hero max-w-screen-xl">
        <div className="hero px-5 ">
            <img className="" src={logoAvatar} alt="Logo Avata"></img>
            <div className="hero-title w-[500px] m-5 max-md:w-full"> 
                <h1 className="text-start">{t('hero.titleHero')}</h1> 
                <h1 className="text-start"><span className="D text-primary">{t('basics.firstname')}</span></h1>
                <h1 className="text-end"><span className="T text-primary">{t('basics.lastname')}</span></h1>
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
                <h3>{t('hero.label')}<br></br>{t('hero.label2')}</h3>
                <h4>{t('hero.sublabel')}</h4>
            </div>
        </div>
   </section>
  )
}
export default Hero;
