const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
const getProjects = require('./api/notion');
const getPagesMd = require('./api/notion-to-md');
const path = require('path');

const PORT = process.env.VITE_PORT || 4000; ;
const HOST = process.env.VITE_HOST || 'localhost';

const app = express();
app.use(express.static('dist'))
app.use(cors());

// Ruta URL del json de los proyectos de la API en Notion  //

app.get('/projects', async (req, res) => {
    const projects = await getProjects()
    res.json(projects)
  })

app.get('/pages-md', async (req, res) => {
  const pagesMd = await getPagesMd()
  // console.log(pagesMd)
  res.json(pagesMd)
});

// Ruta imagen Open Graph
app.get('/images/meta-img-portfolio.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public/images/meta-img-portfolio.png'))
})

// Ruta URL del Sitemap //
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/sitemap.xml'))
})

// Ruta URL del Robots //
app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/robots.txt'))
})

app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Redirigir todas las rutas no reconocidas al index.html de React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// app.listen(PORT, () => {
//   console.log("Server running on port http://" + HOST + ":" + PORT);
// });

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on http://${HOST}:${PORT}`);
});