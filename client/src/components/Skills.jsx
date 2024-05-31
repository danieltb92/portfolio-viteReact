// import {skills} from '../../cv.json';
import { useTranslation } from 'react-i18next';
//add const by propertie sections in skills JSON

// const {title} = skills
// const sections = skills.sections[0]
// const sections2 = skills.sections[1]

function Skills() {
    const {t} = useTranslation();
    return (
        <section className="container-skills">
            <div className="title-skills">
                <h2>{t('skills.title')}</h2>
            </div>
            <div className="container-skills-code">
                <h3>{t('skills.sections.0.title1')}</h3>
                <div className="container-tags">
                    <div className="tag">+ HTML</div>
                    <div className="tag">+ CSS</div>
                    <div className="tag">+ JavaScript</div>
                    <div className="tag">+ Java</div>
                    <div className="tag">+ Python</div>
                    <div className="tag">+ Scrum</div>
                    <div className="tag">+ Git</div>
                </div>
            </div>
            <div className="container-skills-design">
                <h3>{t('skills.sections.1.title2')}</h3>
                <div className="container-tags">
                    <div className="tag">+ UX-UI</div>
                    <div className="tag">+ Design System</div>
                    <div className="tag">+ Usability Testing</div>
                    <div className="tag">+ UX Research</div>
                    <div className="tag">+ Wireframing</div>
                    <div className="tag">+ User Analysis</div>
                    <div className="tag">+ Prototyping</div>
                </div>
            </div>
            <div className="container-skills-lenguage">
                {/* <!-- <h3>Software principal</h3> --> */}
                <div className="container-lenguage">
                    <div className="lenguage">
                        <img width="60" height="60" src="https://img.icons8.com/ios/70/FFFFFF/figma--v1.png" alt="figma--v1" />
                        <h4>Figma</h4>
                    </div>
                    <div className="lenguage">
                        <img width="60" height="60" src="https://img.icons8.com/ios/70/FFFFFF/adobe-illustrator--v1.png" alt="adobe-illustrator--v1" />
                        <h4>Illustrator</h4>
                    </div>
                    <div className="lenguage">
                        <img width="60" height="60" src="https://img.icons8.com/ios/70/FFFFFF/adobe-photoshop--v1.png" alt="adobe-photoshop--v1" />
                        <h4>Photoshop</h4>
                    </div>
                    <div className="lenguage">
                        <img width="60" height="60" src="https://img.icons8.com/ios-filled/70/FFFFFF/html-5--v1.png" alt="html-5--v1" />
                        <h4>HTML</h4>
                    </div>
                    <div className="lenguage">
                        <img width="60" height="60" src="https://img.icons8.com/ios-filled/70/FFFFFF/css3.png" alt="css3" />
                        <h4>CSS</h4>
                    </div>
                    <div className="lenguage">
                        <img width="60" height="60" src="https://img.icons8.com/ios-filled/70/FFFFFF/javascript.png" alt="javascript" />
                        <h4>JavaScript</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;