const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const getProjects = require('./api/notion');
const getPagesMd = require('./api/notion-to-md');
const path = require('path');

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';

const app = express();
app.use(express.static('public'))
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

app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Redirigir todas las rutas no reconocidas al index.html de React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log("Server running on port http://" + HOST + ":" + PORT);
});