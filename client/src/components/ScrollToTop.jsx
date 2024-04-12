import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Desplaza la página a la parte superior cada vez que cambie la ruta
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;