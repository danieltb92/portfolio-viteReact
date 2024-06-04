import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Esta función desplaza la página al top
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    // Manejador de evento de desplazamiento
    const handleScroll = () => {
        // Aquí definimos la altura (en píxeles) que representa el final de la sección principal.
        const threshold = 300; // Ajusta este valor según la altura de la sección principal
        if (window.scrollY > threshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Añadimos el evento de desplazamiento al cargar el componente
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Solo muestra el botón si isVisible es true */}
            {isVisible && (
                <button className='z-[9999] fixed bottom-[2rem] right-[1rem] p-[15px] rounded-[50%] cursor-pointer border-2 
                    [backdropFilter:blur(5px)] [WebkitBackdropFilter:blur(5px)] border-white hover:bg-black'
                    onClick={scrollToTop}
                    // style={{
                    //     zIndex: '9999', // Ajustar el orden de las cosas
                    //     position: 'fixed', // Fijar el botón
                    //     bottom: '2rem', // Posicionar 20px desde el borde inferior
                    //     right: '1rem', // Posicionar 20px desde el borde derecho
                    //     padding: '15px 15px',
                    //     backgroundColor: 'rgba(255, 255, 255, 0.3)', // Fondo traslúcido
                    //     color: '#000',
                    //     borderRadius: '50%', // Botón redondo
                    //     border: '1px solid #000',
                    //     cursor: 'pointer',
                    //     backdropFilter: 'blur(5px)', // Aplica desenfoque al fondo
                    //     WebkitBackdropFilter: 'blur(5px)', // Compatibilidad con navegadores webkit
                    // }}

                >
                    <svg
                        aria-label="Subir al inicio de la página"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 -rotate-45 hover:-rotate-90 hover:text-white motion-safe:transition"
                        width="20px"
                    >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;