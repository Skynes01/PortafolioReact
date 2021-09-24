import './Home.css';
import foto from './home1.png'
import fotodos from './home2.png'
import fotofolder from './folderimg.png'
import fotohome from './footerhome.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLaughBeam, faUser, faFolder} from '@fortawesome/free-solid-svg-icons'
import {
    Link
 } from "react-router-dom";

function Home(){
    return(

        <div className="home">
            
           
            <header>
                
                <div className="home__menu">
                    
                    <ul className="home_menu_item"> 
                        <li>
                           <h2><FontAwesomeIcon icon={faLaughBeam}/> Bienvenido <FontAwesomeIcon icon={faLaughBeam}/> </h2> 
                        </li>    
                    </ul>
                </div>
            </header>

            <div className="seccion">
                <div className="seccion__img">
                    <img src={foto} width="330px" height="250px"> 
                    </img>
                    <img src={fotodos} width="330px" height="250px"> 
                    </img>
                </div>
                 <div className="seccion_content"> 
                    <div className="foterxd">
                        <img src={fotofolder} width="160px" height="120px"> 
                        </img>
                    </div>
                    <p>
                        <h1>Landing Page</h1>
                        <span><FontAwesomeIcon icon={faUser}/>Juan Alarcón</span>
                        
                    </p>
                   <Link to="/portafolio"><button className="seccion__buttonhome"><FontAwesomeIcon icon={faFolder}/> Portafolio</button></Link>
                </div>
                
            </div>
            <div className="foterxd">
            <img src={fotohome} width="880px" height="185px"> 
            </img>
            </div>
        </div>
    );
}

export default Home;