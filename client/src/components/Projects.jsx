// import { useFetch } from '../services/useFetch'
import { useState, useEffect } from "react";
// import { getProjects } from "../services/notion.js"


function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:4000/projects");
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.log("Error fetching projects:", error);
            }
        }
        fetchData();
    }, []);

    return (

        <div id="proyectos" className="container-projects">
            <h2>Proyectos</h2>

            <section className="grid-projects">
                {projects.map((project) => (
                    (project.status === 'Published') && (
                        <article className="project-card" key={project.id}>
                            <a href={`http://localhost:5173/page/${project.id}`} target="_blank">
                                <img src={project.cover} alt="imagen proyecto" />
                                <h3>{project.title}</h3>
                                <div className="divider-card"></div>
                                <p>{project.type}</p>
                            </a>
                        </article>
                    )
                ))}
            </section>
        </div>


        // projects.forEach((project) => {
        //     if (project.status === 'Published') {

        //       <article className="project-card">
        //         <a href ="views/${project.id}/${project.id}.html" target="_blank"></a>
        //         <a href ="http://localhost:5000/${project.id}" target="_blank">
        //           <img src=" ${project.cover}" alt="imagen proyecto"></img>
        //           <h3> ${project.title}</h3>
        //           <div className="divider-card"></div>
        //           <p>${project.type}</p>
        //         </a>
        //       </article>


        //     }
        //   })





    )
}
export default Projects;

// function Pages() {
//     const [pages, setPages] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await fetch("http://localhost:4000/pages-md");
//                 const data = await response.json();
//                 setPages(data);
//             } catch (error) {
//                 console.log("Error fetching projects:", error);
//             }
//         }
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Pages</h1>
//             <ul>
//                 {pages.map((page) => (
//                     <li key={page.id}>{page.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default Pages;