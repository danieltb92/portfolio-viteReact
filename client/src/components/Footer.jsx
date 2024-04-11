import githubIcon from '../assets/icons/social/bxl-github.svg'
import logoDT from '../assets/icons/logotype/logoDT.svg'

function Footer() {
    return (
        <footer id="contacto" className="container-footer">
            <section className="footer-contact">
                <h3 className='text-center'>Contactame</h3>
                {/* <!-- <input type="email" name="Email" id="email" placeholder="Poner email"> --> */}
            </section>

            <section className="container-footer-links">
                <div className  ="footer-links">
                    <a href="https://github.com/danieltb92">
                        <img src={githubIcon} alt="Logo github"></img>
                    </a>
                    {/* <!-- <a href="https://www.linkedin.com/in/daniel-tunjano/">
                        <img src="/assets/icons/bxl-linkedin.svg" alt="Logo Github">
                    </a> --> */}
                </div>

                <div className="container-whatsapp-email">
                    {/* <!-- <div className="whatsapp-container">
                        <img src="assets/icons/bxl-whatsapp.svg" alt="">
                            <h6> Whatsapp</h6>
                    </div>
                    <div className="email-container">
                        <img src="assets/icons/bx-envelope.svg" alt="">
                            <h6>Email</h6>
                    </div> --> */}

                    <a href="https://api.whatsapp.com/send?phone=573202190255&text=Hola!%20Me%20interesa%20saber%20mas%20sobre...%E2%80%A6" target="_blank" rel="noopener">
                        <h6>Whatsapp</h6>
                    </a>

                    <h6>|</h6>

                    <a href="mailto:danieltb92@hotmail.com" target="_blank" rel="noopener">
                        <h6>Email</h6>
                        {/* <!-- <h6>danieltb92@hotmail.com</h6> --> */}
                    </a>

                    <h6>|</h6>

                    <a href="https://github.com/danieltb92" target="_blank" rel="noopener">
                        <h6>Linkedin</h6>
                    </a>
                </div>

            </section>

            <a href="https://daniel-tunjano.onrender.com"><img src={logoDT} alt="Logo Daniel Tunjano"></img></a>
            <h5>© Daniel Tunjano. 2023</h5>
        </footer>
    )
}
export default Footer