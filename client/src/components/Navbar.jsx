import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/App.css";
import logoDT from "../assets/icons/logotype/logoDT.svg";
import { useTranslation } from "react-i18next";
// import SideBar from './SideBar';

function Navbar({ showMenuItems }) {
  const { t } = useTranslation();

  // Estado para controlar si la barra lateral está activa o no
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // Estado para manejar si los elementos del menú deben mostrarse
  const [showMenu, setShowMenu] = useState(showMenuItems);

  // Ref para la barra lateral
  const sidebarRef = useRef(null);

  // Efecto para actualizar el estado showMenu cuando cambia el prop showMenuItems
  useEffect(() => {
    setShowMenu(showMenuItems);
  }, [showMenuItems]);

  // Función para alternar la barra lateral
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  // Función para cerrar la barra lateral si se hace clic fuera
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarActive(false);
    }
  };

  // Añadir y eliminar el evento de clic
  useEffect(() => {
    if (isSidebarActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarActive]);

  // Nombre de la clase para la barra lateral, según el estado isSidebarActive
  const sidebarClassName = isSidebarActive ? "sidebar active" : "sidebar";

  // const cssDrawer = "z-[900] w-full h-[100px] mx-auto bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed top-none bottom-0 left-0 right-0"

  return (
    <nav className="w-full">
      <header className="container-navbar max-w-screen-xl">
        <div className="container-navbar-logo">
          <Link to="/">
            <img
              className="navbar-logo"
              src={logoDT}
              alt="Logotipo Daniel Tunjano"
            />
          </Link>
          <span className="navbar-name">
            {" "}
            {">"} {t("basics.name")}
          </span>
        </div>

        {/* Botón de menú de hamburguesa */}
        {showMenu && (
          <i className="btn-menu" onClick={toggleSidebar}>
            <box-icon
              name="menu"
              animation="noe"
              color="#6d6d6d"
              size="md"
            ></box-icon>
          </i>
        )}
        {/* <SideBar onClick={toggleSidebar}/> */}

        {/* Menú de navegación normal para pantallas grandes */}
        {showMenu && (
          <nav className="navbar">
            <a className="btn-nav" href="#home">
              {t("navbar.home")}
            </a>
            <a className="btn-nav" href="#proyectos">
              {t("navbar.work")}
            </a>
            <a className="btn-nav" href="#sobreMi">
              {t("navbar.about")}
            </a>
            <a className="btn-nav" href="#contacto">
              {t("navbar.contact")}
            </a>
          </nav>
        )}
      </header>

      {/* Barra lateral */}
      <nav className={sidebarClassName} ref={sidebarRef}>
        <header className="sidebar-header">
          {/* Botón para cerrar la barra lateral */}
          <i className="btn-close" onClick={toggleSidebar}>
            <box-icon name="x" color="#6d6d6d" size="md"></box-icon>
          </i>
        </header>
        <ul className="sidebar-list">
          <li>
            <a href="#home">{t("navbar.home")}</a>
          </li>
          <li>
            <a href="#proyectos">{t("navbar.work")}</a>
          </li>
          <li>
            <a href="#sobreMi">{t("navbar.about")}</a>
          </li>
          <li>
            <a href="#contacto">{t("navbar.contact")}</a>
          </li>
        </ul>
        <div className="p-4 pb-8 bg-zinc-100 border-t border-zinc-200 mt-auto ">
        <div className="flex gap-6 justify-end max-w-md mx-auto mr-3">
          <a
            className="text-xs text-zinc-600 flex items-center gap-0.25"
            href={t("basics.profiles.2.url")}
            target="_blank"
          >
            GitHub
            <svg
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
              aria-hidden="true"
              className="w-3 h-3 ml-1"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
          </a>
          <a
            className="text-xs text-zinc-600 flex items-center gap-0.25"
            href={t("basics.profiles.1.url")}
            target="_blank"
          >
            Twitter
            <svg
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
              aria-hidden="true"
              className="w-3 h-3 ml-1"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
          </a>
        </div>
      </div>
      </nav>
      
    </nav>
  );
}

Navbar.propTypes = {
  showMenuItems: PropTypes.bool.isRequired,
};

export default Navbar;
