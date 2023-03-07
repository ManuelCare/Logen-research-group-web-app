
import { ReactComponent as Logo } from "../../public/media/logo.svg";

import { Link} from "react-router-dom";    
import "./NavbarStyles.css";
export default function Navbar(){
    return(
        <div className="Navbar">
            <Logo id="logo"/>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="projects">Proyectos</Link>
                <Link to="people">Personas</Link>
                <Link to="about">Sobre Nosotros</Link>
                <Link to="contact">Contacto</Link>
            </nav>
        </div>
    );
}