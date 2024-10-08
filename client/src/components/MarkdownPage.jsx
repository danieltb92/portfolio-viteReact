import '../styles/markdownPage.css'
import { useEffect, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import rehypeRaw from 'rehype-raw';
// import remarkGfm from 'remark-gfm';
// import ReactMarkdown from 'react-markdown';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Divider from '../components/Divider';

const Navbar = lazy(() => import('./Navbar'));
const Footer = lazy(() => import('./Footer'));
const ReactMarkdown = lazy(() => import('react-markdown'));
const Divider = lazy(() => import('./Divider'));

// Componente para renderizar pagina en markdown a react
const MarkdownPage = ({ content, title }) => {
   // useEffect para modificar el título de la pestaña del navegador.
   useEffect(() => {
    // Cambia el título del documento al título proporcionado.
    document.title = title;
  }, [title]);

  return (
          <div className='markdown-page max-w-screen-md'>
            <Suspense fallback={<div></div>}>
              <Navbar className='w-full' showMenuItems={false}></Navbar>
              <h1>{title}</h1>
              <ReactMarkdown 
                // remarkPlugins={[remarkGfm]} // Soporte para sintaxis extendida de GitHub Markdown
                rehypePlugins={[rehypeRaw]} // Permite renderizar etiquetas HTML como <iframe> o <video>
                >
                {content}
              </ReactMarkdown>
              <Divider></Divider>
              <Footer></Footer>
            </Suspense>
            <style>
              {`
              .markdown-page {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;
                margin: 0 auto;
                width: 100%;
              }
              h1, h2, h3 {
                width: 100%;
                text-aling:start
              }
              h1 {
                margin: 30px 0;
              }
              h2 {
                font-size: 2.5em;
                margin: 15px;
              }
              h3 {
                font-size: 2em;
                margin: 10px; 
              }
              ol, ul, menu {
                 list-style: disc ;
                 width: 100%;
              }
              ul {
                padding : 0 40px;
                margin : 16px 0 16px 0;
              }
              p {
                margin: 10px;
                text-align: start;
                width: 100%;
                img{
                  margin: 0 auto
                }
              }	
            `}
            </style>
          </div>
  );
};
MarkdownPage.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MarkdownPage;