import { Link } from 'react-router-dom';
import githubIcon from '../assets/icons/social/bxl-github.svg'
import logoDT from '../assets/icons/logotype/logoDT.svg'
import { useTranslation } from 'react-i18next';


function Footer() {
    const { t } = useTranslation();
    // Función que desplaza la página a la parte superior
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <footer id="contacto" className="container-footer">
            <section className="footer-contact">
                <h3 className='text-center'>{t('footer.title')}</h3>
            </section>

            <section className="container-footer-links">
                <div className="footer-links">
                    <a href="https://github.com/danieltb92">
                        <img src={githubIcon} alt="Logo github"></img>
                    </a>
                </div>

                <div className="container-whatsapp-email">

                    <a href="https://api.whatsapp.com/send?phone=573202190255&text=Hola!%20Me%20interesa%20saber%20mas%20sobre...%E2%80%A6" target="_blank" rel="noopener">
                        <h4>Whatsapp</h4>
                    </a>

                    <h4>|</h4>

                    <a href="mailto:danieltb92@hotmail.com" target="_blank" rel="noopener">
                        <h4>Email</h4>
                    </a>

                    <h4>|</h4>

                    <a href="https://github.com/danieltb92" target="_blank" rel="noopener">
                        <h4>Linkedin</h4>
                    </a>
                </div>

            </section>

            <Link to="/" onClick={scrollToTop}>
                <img src={logoDT} alt="Logo Daniel Tunjano"></img>
            </Link>
            <h5>© Daniel Tunjano. 2023</h5>
        </footer>
    )
}
export default Footer