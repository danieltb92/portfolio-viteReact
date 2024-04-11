import Button from './Button'

function AboutMe () {
    return (
        <>
            <article id="sobreMi" className="container-aboutme">
                <h2 >Sobre mi</h2>
                <p className="p-1"> 
                    ¡Hola soy Daniel!, profesional en Diseño Industrial de la UAN, actualmente resido en la ciudad de Bogotá DC.
                    <br></br>
                    <br></br>
                    Mi campo productivo esta en el diseño y desarrollo de producto, tanto objetual como producto digital. En la actualidad mi enfoque esta en el diseño y desarrollo Web.
                    <br></br>
                    <br></br>
                    Me he especializado en diseño UI/UX. Me apasiona la forma en la que el diseño puede transformar y mejorar nuestras vidas atraves de objetos, interfaces, servicios etc.. Ademas tengo conocimientos en desarrollador web,
                    en la parte fronted y en el backend, en la actualidad estoy ampliando mis habilidades en esta area. 
                </p>  
                <p className="p-2">
                    Tener la prespectiva de los dos mundos tanto del diseño como del desarrollo me permite crear soluciones digitales funcionales, usables, efectivas y centradas en el usuario.
                    <br></br>
                    <br></br>
                    Si quieres contactarme enviame un email a 
                    <span><b>danieltb92@hotmail.com</b></span>
                </p>
                <Button text="Descarga mi CV"></Button>
            </article>
        </>
    )
}
export default AboutMe;