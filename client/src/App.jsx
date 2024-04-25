import './styles/App.css';
import './styles/mobile.css';
import './styles/tablet.css';
import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MarkdownPage from './components/MarkdownPage';
import ScrollToTop from './components/ScrollToTop';


// Función para obtener las páginas desde la fuente de datos URL 
const getPages = async () => {
  try {
    // Simulando la obtención de datos del servidor
    const projects = await fetch('https://portfolio-vitereact.onrender.com/pages-md');
    const data = await projects.json();

    // Obteniendo datos de cada una de las paginas provenientes de la URL
    // Y uniendolo a un valor
    const paginasMarkdown = data.map((item) => ({
      path: `/page/${item.slug}`, // Define la ruta basada en el ID
      id: item.id,
      content: item.content, // Define el contenido de la pagina
      title: item.title, // Define el titulo de la pagina
    }));

    return paginasMarkdown; // Retorna los datos anteriores de cada una de las paginas de la URL 
  } catch (error) {
    console.error('Error al obtener las páginas:', error);
    return [];
  }
};


// Funcion que genera las rutas de las paginas de la URL
// Y las rutas de las paginas standard
function App() {


  const [paginas, setPaginas] = useState([]);
  // UseEffect para obtener los datos de la funcion anterior getPages de manera asincrona 
  useEffect(() => {
    const fetchPages = async () => {
      const markdownPages = await getPages();
      setPaginas(markdownPages);
    };

    fetchPages();
  }, []);


  return (  // Retorna las rutas generales y las generadas con automatizacion
    <>
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#00b2ff_100%)]"></div>
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />   {/* // Ruta de la pagina principal */}
          {paginas.map((pagina) => (   // funcion que mapea cada pagina y genera una ruta para cada una con los datos

            <Route
              key={pagina.id}
              exact
              path={pagina.path}
              element={
                <MarkdownPage content={pagina.content} title={pagina.title}></MarkdownPage>
              }
            />

          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;