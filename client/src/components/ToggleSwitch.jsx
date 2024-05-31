import { useTranslation } from 'react-i18next';
import '../styles/toggleSwitch.css';

function ToggleSwitch() {

    const { i18n } = useTranslation();

    // Función para manejar el cambio de idioma
    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="toggle-switch max-w-screen-xl m-auto">
            <label className="switch">
                <input 
                    type="checkbox" 
                    onChange={toggleLanguage} 
                    checked={i18n.language === 'es'} 
                />
                <span className="slider round"></span>
            </label>
            <span>{i18n.language === 'en' ? 'ES' : 'EN'}</span>
        </div>
    );
}
export default ToggleSwitch;