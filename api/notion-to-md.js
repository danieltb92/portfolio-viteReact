const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require('fs');
const getProjects = require("./notion");

// Inicialización del cliente de Notion
const notion = new Client({ auth: process.env.NOTION_TOKEN, });

// Inicialización de NotionToMarkdown
const n2m = new NotionToMarkdown({ notionClient: notion });

// Personalización de transformadores para bloques específicos
n2m.setCustomTransformer("embed", async (block) => {
    const { embed } = block;
    if (!embed?.url) return "";

    return `<figure>
    <iframe src="${embed.url}" width="100%" height="400"></iframe>
    </figure>`;
});

n2m.setCustomTransformer("video", async (block) => {
    const { video } = block;
    const videoUrl = video.external?.url || video.file?.url || "";
    if (!videoUrl) return "";

    return `<figure>
    <video autoPlay loop muted controlsList="nodownload nofullscreen noremoteplayback" width="100%">
      <source src="${videoUrl}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    </figure>`;
});

n2m.setCustomTransformer("image", async (block) => {
    const { image } = block;
    const imageUrl = image.external?.url || image.file?.url || "";
    if (!imageUrl) return "";

    const caption = image.caption.length ? image.caption.map(c => c.plain_text).join(" ") : "Image";
    return `<figure>
    <img src="${imageUrl}" alt="${caption}" style="max-width: 100%; height: auto;" />
    </figure>`;
});



module.exports = async function getPagesMd() {
    try {
        const projects = await getProjects();

        if (projects.length === 0) {
            console.log('No se encontraron proyectos.');
            return [];
        }

        // Utilizamos Promise.all para realizar solicitudes de manera paralela
        const markdownData = await Promise.all(projects.map(async project => {
            if (project.status === 'Published') {
                const { 
                  idPage: idPageProject, 
                  title: titleProject, 
                  type: typeProject, 
                  id: slugProject, 
                  status: statusProject 
                } = project;

                console.log('ID de la página del proyecto:', idPageProject);

                // Obtenemos los bloques de Markdown de Notion
                const mdblocks = await n2m.pageToMarkdown(idPageProject);
                // Convertimos los bloques a una cadena de Markdown
                const mdString = n2m.toMarkdownString(mdblocks);

                // Retornamos los datos en formato de objeto
                return {
                    id: idPageProject,
                    title: titleProject,
                    type: typeProject,
                    slug: slugProject,
                    status: statusProject,
                    content: mdString.parent,
                };
            }
            // Si el proyecto no está publicado, retornamos null
            return null;
        }));

        // Filtramos los elementos nulos para solo retornar los proyectos publicados
        return markdownData.filter(item => item !== null);
    } catch (error) {
        console.error('Error obteniendo proyectos:', error);
        throw error;
    }
};