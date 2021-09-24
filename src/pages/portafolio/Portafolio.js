import './Portafolio.css';
import Header from '../../componentes/header/Header'
import Contact from '../../componentes/contact/Contact'
import Acerca from '../../componentes/acerca/Acerca'
import Footer from '../../componentes/footer/Footer'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {
    Link
 } from "react-router-dom";

function Portafolio(){
    return(
        
        <>
        <Link to="/home"> <button className="seccion__button"><FontAwesomeIcon icon={faHome}/></button></Link>
        <div className="container"> 
        <Header></Header>
        <Contact></Contact>
        <Acerca></Acerca>
        </div>
        <Footer></Footer>
    </>
    
    );
}

export default Portafolio;