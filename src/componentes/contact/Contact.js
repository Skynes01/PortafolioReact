import './Contact.css';

import github from './github.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faMobile, faMapMarkerAlt, faUser, faIndent, faGrinBeam, faInfo, faUsers} from '@fortawesome/free-solid-svg-icons'


function Contact(){
    return(
        <div className="contacto">
            <h2><FontAwesomeIcon icon={faGrinBeam}/> SOBRE Mi</h2>
            <hr/>
            <p>
            Mi nombre es Juan Sebastián Alarcón Aponte, tengo actualmente 17 años, estoy estudiando programación
            en la área de ADSI en el SENA, me desenvuelvo muy bien en el ámbito laboral y como programador formado 
            para ADSI he sumado experiencia en cuanto al front end y back end
            </p>
            
            <hr/>
            <h2><FontAwesomeIcon icon={faInfo}/> INFORMACIÓN</h2>
            <hr/>
            
            <div className="xd1"><FontAwesomeIcon icon={faEnvelope}/><span> jsalarcon74@misena.edu.co</span></div>
            
            <div className=""><FontAwesomeIcon icon={faMobile}/><span> 318 4712653</span></div>
            
            <div className=""><FontAwesomeIcon icon={faMapMarkerAlt}/><span> Cra 111 B-bis #139-79</span></div>

            <div className=""><FontAwesomeIcon icon={faIndent}/><span> 1001115747</span></div>

            <hr/>
            <p>
            Aquí esta mi repositorio de GitHub donde he realizado algunos proyectos
            </p>
            <div className="enlaces">
                <a href="https://github.com/Skynes01?tab=repositories">
                    <img src={github} alt="Github" />
                </a>
            </div>

        </div>

    );
}

export default Contact;