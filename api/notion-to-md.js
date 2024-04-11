const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require('fs');
const getProjects = require("./notion");

// Initializing a client
const notion = new Client({ auth: process.env.NOTION_TOKEN, })

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

module.exports = async function getPagesMd(){

    try {
        const projects = await getProjects();
    
        if (projects.length > 0) {
          const markdownData = [];
    
          for (const project of projects) {
            if (project.status === 'Published') {
              const idPageProject = project.idPage;
              const titleProject = project.title;
              const typeProject = project.type;
              const slugProject = project.id;
              const statusProject = project.status;

              console.log('ID de la página del proyecto:', idPageProject);
    
              const mdblocks = await n2m.pageToMarkdown(idPageProject);
              const mdString = n2m.toMarkdownString(mdblocks);
              const mdFile = mdString.parent;
    
              // Convertir a formato original (dependiendo de la estructura)
              const originalFormat = mdFile;
    
              markdownData.push({
                id: idPageProject,
                title: titleProject,
                type: typeProject,
                slug: slugProject,
                status: statusProject,
                content: originalFormat,
              });
            }
          }
    
          return markdownData;
        } else {
          console.log('No se encontraron proyectos.');
          return [];
        }
      } catch (error) {
        console.error('Error obteniendo proyectos:', error);
        throw error;
      }
}