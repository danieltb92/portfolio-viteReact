import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import '../App.css'
import Divider from '../components/Divider'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
function Home() {

  return (
    <div className='flex flex-col'>
      <nav>
        <Navbar showMenuItems={true}></Navbar> 
      </nav>
      <main>
        <Hero></Hero>
        <Divider></Divider>
        <AboutMe></AboutMe>
        <Divider></Divider>
        <Skills></Skills>
        <Divider></Divider>
        <Projects></Projects>
        <Divider></Divider>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default Home