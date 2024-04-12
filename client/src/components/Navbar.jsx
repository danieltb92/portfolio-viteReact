import PropTypes from 'prop-types';
import '../App.css'
import logoDT from '../assets/icons/logotype/logoDT.svg'

function Navbar({ showMenuItems }) {

    return (
        <nav className='w-full'>
            <header className="container-navbar max-w-screen-xl">
                <div className="container-navbar-logo">
                    <img className="navbar-logo" src={logoDT} alt="Logotipo Daniel Tunjano"></img>
                    <span className="navbar-name"> {">"} Daniel Tunjano</span>
                </div>
                <i className="btn-menu">
                    <box-icon name='menu' animation='noe' color='#6d6d6d' size='md'></box-icon>
                </i>

                <nav className="navbar">
                    {showMenuItems && (
                        <>
                            <a className=" btn-nav" href="#home">Home</a>
                            <h3>|</h3>
                            <a className=" btn-nav" href="#proyectos">Proyectos</a>
                            <h3>|</h3>
                            <a className=" btn-nav" href="#sobreMi">Sobre mi</a>
                            <h3>|</h3>
                            <a className=" btn-nav" href="#contacto">Contacto</a>
                        </>
                    )}
                </nav>
            </header>

            <nav className="sidebar">
                <header className="sidebar-header">
                    <i className="btn-close button"><box-icon name='x' color='#FFFFFF' size='sm'></box-icon></i>
                </header>
                <ul className="sidebar-list">
                    <li> <a href="#home">Home</a></li>
                    <li> <a href="#proyectos">Proyectos</a></li>
                    <li> <a href="#sobreMi">Sobre mi</a></li>
                    <li> <a href="#contacto">Contacto</a></li>
                </ul>
                <img src="assets/Logotype/icon-white.svg" alt=""></img>
            </nav>
        </nav>
    )
}
Navbar.propTypes = {
    showMenuItems: PropTypes.bool.isRequired,
  };

export default Navbar;