import './Header.css';
import foto from './foto.jpg';
function Header(){
    return (
        <header>
            <div className="foto">
                <img src={foto} alt="foto juan alarcon" />
            </div>
            <div className="texto">
                <h1><span className="nombre">JUAN</span> ALARCÓN</h1>
                <h4>Tecnologo ADSI</h4>
            </div>
        </header>
    );
}

export default Header;