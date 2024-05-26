import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


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
                    project.status === 'Published' && (
                        <article className="project-card" key={project.id}>
                            <Link to={`/page/${project.id}`}>
                                <img src={project.cover} alt="imagen proyecto" />
                                <h3>{project.title}</h3>
                                <div className="divider-card"></div>
                                <p>{project.type}</p>
                                <div className="w-auto flex gap-1" >
                                    {project.tags.map((tag) => (
                                        <div key={tag.id} className="tag">{tag.name}</div>
                                    ))}
                                </div>
                            
                            </Link>
                        </article>
                    )
                ))}
            </section>
        </div>
    )
}
export default Projects;



// */ Funcion que genera en el Link una propiedad target:blank /*
// const CustomLink = ({ to, target, children }) => {
//     if (target === '_blank') {
//         return (
//             <a href={to} target={target}>
//                 {children}
//             </a>
//         );
//     }
//     return <Link to={to}>{children}</Link>;
// };

// function Projects() {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await fetch("http://localhost:4000/projects");
//                 const data = await response.json();
//                 setProjects(data);
//             } catch (error) {
//                 console.log("Error fetching projects:", error);
//             }
//         }
//         fetchData();
//     }, []);

//     return (
//         <div id="proyectos" className="container-projects">
//             <h2>Proyectos</h2>

//             <section className="grid-projects">
//                 {projects.map((project) => (
//                     project.status === 'Published' && (
//                         <article className="project-card" key={project.id}>
//                             <CustomLink to={`/page/${project.id}`} target="_blank">
//                                 <img src={project.cover} alt="imagen proyecto" />
//                                 <h3>{project.title}</h3>
//                                 <div className="divider-card"></div>
//                                 <p>{project.type}</p>
//                             </CustomLink>
//                         </article>
//                     )
//                 ))}
//             </section>
//         </div>
//     );
// }

// export default Projects;