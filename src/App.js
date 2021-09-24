import './App.css';
import foto from './pages/Error/Errorxd.png'
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './pages/home/Home';
import Portafolio from './pages/portafolio/Portafolio';
import {
  Link
} from "react-router-dom";
function App() {
  return (
    
    <Router>
    <Switch>
    <Route exact path="/">

    </Route>
    <Route path="/portafolio">
    <Portafolio></Portafolio>

    </Route>
    <Route path="/home">
    <Home></Home>

    </Route>
    <Route path="*">
    <Link to="/home"> <button className="seccion__button"><FontAwesomeIcon icon={faHome}/></button></Link>
    <div className="errorxddx">
      <img src={foto} width="1000px" height="550px"></img>
    </div>
    </Route>
    
    </Switch>
  </Router>
  );
}

export default App;
