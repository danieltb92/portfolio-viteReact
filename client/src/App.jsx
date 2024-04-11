// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// // import { projects } from './services/notion'

// function App() {

//   return (
//     <div className='flex flex-col'>
//       <Routes>
//         <Route path='/'element={<Home />}/>
//         {/* <Route path='/projects' Component={<projects />}/> */}
//       </Routes>
//     </div>
//   )
// }

// export default App





import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MarkdownPage from './components/MarkdownPage'; // Importar el componente

// Función para obtener las páginas desde la fuente de datos (modifique según tu implementación)
const getPages = async () => {
  try {
    // Simulando la obtención de datos del servidor
    const proyectos = await fetch('http://localhost:4000/pages-md');
    const datos = await proyectos.json();

    const paginasMarkdown = datos.map((item) => ({
      path: `/page/${item.slug}`, // Define la ruta basada en el ID
      id: item.id,
      content: item.content,
      title: item.title, // Asumiendo que tienes un título en el JSON
    }));

    return paginasMarkdown;
  } catch (error) {
    console.error('Error al obtener las páginas:', error);
    return [];
  }
};

function App() {
  const [paginas, setPaginas] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      const markdownPages = await getPages();
      setPaginas(markdownPages);
    };

    fetchPages();
  }, []);

  return (
    <BrowserRouter>
      <div className='flex flex-col'>
        <Routes>
          <Route path='/' element={<Home />} />
          {paginas.map((pagina) => (
            <Route
              key={pagina.id}
              exact
              path={pagina.path}
              element={
                <MarkdownPage content={pagina.content} title={pagina.title} // Usa el título si está disponible
                ></MarkdownPage>
              }
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;