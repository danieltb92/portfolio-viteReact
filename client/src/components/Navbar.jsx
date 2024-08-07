import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/App.css'
import logoDT from '../assets/icons/logotype/logoDT.svg'
import { useTranslation } from 'react-i18next';


function Navbar({ showMenuItems }) {
    const { t } = useTranslation();

    // Estado para controlar si la barra lateral está activa o no
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    // Estado para manejar si los elementos del menú deben mostrarse
    const [showMenu, setShowMenu] = useState(showMenuItems);

    // Efecto para actualizar el estado showMenu cuando cambia el prop showMenuItems
    useEffect(() => {
        setShowMenu(showMenuItems);
    }, [showMenuItems]);

    // Función para alternar la barra lateral
    const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    // Nombre de la clase para la barra lateral, según el estado isSidebarActive
    const sidebarClassName = isSidebarActive ? 'sidebar active' : 'sidebar';

    return (
        <nav className='w-full'>
            <header className="container-navbar max-w-screen-xl">
                <div className="container-navbar-logo">
                    <Link to="/">
                        <img className="navbar-logo" src={logoDT} alt="Logotipo Daniel Tunjano" />
                    </Link>
                    <span className="navbar-name"> {">"} {t('basics.name')}</span>
                </div>

                {/* Botón de menú de hamburguesa */}
                <i className="btn-menu" onClick={toggleSidebar}>
                    <box-icon name='menu' animation='noe' color='#6d6d6d' size='md'></box-icon>
                </i>

                {/* Menú de navegación normal para pantallas grandes */}
                {showMenu && (
                    <nav className="navbar">
                        <a className="btn-nav" href="#home">{t('navbar.home')}</a>
                        <a className="btn-nav" href="#proyectos">{t('navbar.work')}</a>
                        <a className="btn-nav" href="#sobreMi">{t('navbar.about')}</a>
                        <a className="btn-nav" href="#contacto">{t('navbar.contact')}</a>
                    </nav>
                )}
            </header>

            {/* Barra lateral */}
            <nav className={sidebarClassName}>
                <header className="sidebar-header">
                    {/* Botón para cerrar la barra lateral */}
                    <i className="btn-close" onClick={toggleSidebar}>
                        <box-icon name='x' color='#FFFFFF' size='sm'></box-icon>
                    </i>
                </header>
                <ul className="sidebar-list">
                    <li><a href="#home">{t('navbar.home')}</a></li>
                    <li><a href="#proyectos">{t('navbar.work')}</a></li>
                    <li><a href="#sobreMi">{t('navbar.about')}</a></li>
                    <li><a href="#contacto">{t('navbar.contact')}</a></li>
                </ul>
            </nav>
        </nav>
    );
}

Navbar.propTypes = {
    showMenuItems: PropTypes.bool.isRequired,
};

export default Navbar;