import './Acerca.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserGraduate, faBrain} from '@fortawesome/free-solid-svg-icons'
function Acerca(){
    return(
        <div className="acerca">
            <div className="infolab">
            <h2 className="titlab"><FontAwesomeIcon icon={faUserGraduate}/> FORMACIÓN </h2>

            <div className="estudio">
                <h4>AÑO 2019-2020 </h4>
                <p> En aquel tiempo estuve en el colegio Alberto lleras Camargo haciendo
                    el grado once y a la vez haciendo el técnico en programación de software 
                    en aquel obtuve varios conocimientos en aquel entonces, realice un sistema
                    de información para un conjunto residencial en donde se podía hacer la CRUD
                    en los diferente módulos.
                </p>
            </div>

             <div className="estudio">
                <h4>PRESETE AÑO </h4>
                <p>En el presente año estoy realizando el tecnólogo en ADSI, cada vez aprendiendo nuevos conocimientos</p>
            </div>

             <h2 className="titlab"><FontAwesomeIcon icon={faBrain}/> HABILIDADES </h2>

             <div className="habilidades"> PHP <progress max="100" value="90">90%</progress></div>
             <div className="habilidades"> JavaScript <progress max="100" value="60">60%</progress></div>
             <div className="habilidades"> HTML y CSS <progress max="100" value="70">70%</progress></div>
             <div className="habilidades"> Java <progress max="100" value="50">50%</progress></div>



        </div>

            

        </div>
    );
}

export default Acerca;