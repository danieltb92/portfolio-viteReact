import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/App.css'
import logoDT from '../assets/icons/logotype/logoDT.svg'

// function Navbar({ showMenuItems }) {
//     const [ showMenu, setShowMenu] = useState(false);

//     useEffect(() => {
//         setShowMenu(showMenuItems);
//     }, [showMenuItems]);
    
//     return (
//         <nav className='w-full'>
//             <header className="container-navbar max-w-screen-xl">
//                 <div className="container-navbar-logo">
//                     <Link to="/">
//                         <img className="navbar-logo" src={logoDT} alt="Logotipo Daniel Tunjano"></img>
//                     </Link>
//                     <span className="navbar-name"> {">"} Daniel Tunjano</span>
//                 </div>
//                 <i className="btn-menu">
//                     <box-icon name='menu' animation='noe' color='#6d6d6d' size='md'></box-icon>
//                 </i>

//                 <nav className="navbar">
//                     {showMenuItems && (
//                         <>
//                             <a className=" btn-nav" href="#home">Home</a>
//                             <h3>|</h3>
//                             <a className=" btn-nav" href="#proyectos">Proyectos</a>
//                             <h3>|</h3>
//                             <a className=" btn-nav" href="#sobreMi">Sobre mi</a>
//                             <h3>|</h3>
//                             <a className=" btn-nav" href="#contacto">Contacto</a>
//                         </>
//                     )}
//                 </nav>
//             </header>

//             <nav className="sidebar">
//                 <header className="sidebar-header">
//                     <i className="btn-close button"><box-icon name='x' color='#FFFFFF' size='sm'></box-icon></i>
//                 </header>
//                 <ul className="sidebar-list">
//                     <li> <a href="#home">Home</a></li>
//                     <li> <a href="#proyectos">Proyectos</a></li>
//                     <li> <a href="#sobreMi">Sobre mi</a></li>
//                     <li> <a href="#contacto">Contacto</a></li>
//                 </ul>
//                 <img src="assets/Logotype/icon-white.svg" alt=""></img>
//             </nav>
//         </nav>
//     )
// }
// Navbar.propTypes = {
//     showMenuItems: PropTypes.bool.isRequired,
//   };

// export default Navbar;


function Navbar({ showMenuItems }) {
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
                    <span className="navbar-name"> {">"} Daniel Tunjano</span>
                </div>

                {/* Botón de menú de hamburguesa */}
                <i className="btn-menu" onClick={toggleSidebar}>
                    <box-icon name='menu' animation='noe' color='#6d6d6d' size='md'></box-icon>
                </i>

                {/* Menú de navegación normal para pantallas grandes */}
                {showMenu && (
                    <nav className="navbar">
                        <a className="btn-nav" href="#home">Home</a>
                        <a className="btn-nav" href="#proyectos">Proyectos</a>
                        <a className="btn-nav" href="#sobreMi">Sobre mi</a>
                        <a className="btn-nav" href="#contacto">Contacto</a>
                    </nav>
                )}
            </header>

            {/* Barra lateral */}
            <nav className={sidebarClassName}>
                <header className="sidebar-header">
                    {/* Botón para cerrar la barra lateral */}
                    <i className="btn-close button" onClick={toggleSidebar}>
                        <box-icon name='x' color='#FFFFFF' size='sm'></box-icon>
                    </i>
                </header>
                <ul className="sidebar-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#sobreMi">Sobre mi</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                {/* <img src="assets/Logotype/icon-white.svg" alt="Icono" className="mt-4" /> */}
            </nav>
        </nav>
    );
}

Navbar.propTypes = {
    showMenuItems: PropTypes.bool.isRequired,
};

export default Navbar;