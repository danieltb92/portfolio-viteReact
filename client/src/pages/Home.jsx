import { useEffect } from 'react'
import '../styles/App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Divider from '../components/Divider'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import ToggleSwitch from '../components/ToggleSwitch';


function Home() {

  useEffect(() => {
    // Establecer el título del documento a un valor predeterminado
    document.title = 'Portafolio | Daniel Tunjano'; // Cambia esto por el título que desees

    // Asegúrate de que el título se restablezca cada vez que se monte el componente
    return () => {
        document.title = 'Portafolio | Daniel Tunjano';
    };
}, []); // Pasa un array vacío para que solo se ejecute al montar y desmontar

  return (
    <>
      <nav>
        <Navbar showMenuItems={true}></Navbar> 
        <ToggleSwitch></ToggleSwitch>
      </nav>
      <main>
        <Hero></Hero>
        <Divider></Divider>
        <ScrollToTopButton></ScrollToTopButton>
        <AboutMe></AboutMe>
        <Divider></Divider>
        <Skills></Skills>
        <Divider></Divider>
        <Projects></Projects>
        <Divider></Divider>
        <Footer></Footer>
      </main>
    </>
  )
}

export default Home