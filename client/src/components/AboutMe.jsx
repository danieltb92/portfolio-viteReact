import Button from './Button'
// import {about} from '../../cv.json'
import { useTranslation } from 'react-i18next'

// const {title, description1, description2, description3, description4, description5, buttonCV} = about

function AboutMe () {
    const {t} = useTranslation()
    return (
        <>
            <article id="sobreMi" className="container-aboutme">
                <h2 >{t('about.title')}</h2>
                <p className="p-1"> 
                    {t('about.description1')}
                    <br></br>
                    <br></br>
                    {t('about.description2')}
                    <br></br>
                    <br></br>
                    {t('about.description3')}
                </p>  
                <p className="p-2">
                {t('about.description4')}
                    <br></br>
                    <br></br>
                    {t('about.description5')}
                    <span><b>{t('basics.email')}</b></span>
                </p>
                <Button text={t('about.buttonCV')}></Button>
            </article>
        </>
    )
}
export default AboutMe;