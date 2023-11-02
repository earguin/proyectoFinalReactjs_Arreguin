import {Link} from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";

const Navbar =  () => {

    return (
        <nav className="navbar">            
            <div className="logo">
            <Link to="/">
                Xilitla <span>Store</span></Link>
            </div>
            <ul className="nav-ul">
                <Link className="li" to="/">Inicio</Link>
                <Link className="li" to="about">Acerca de</Link>
                <Link className="li" to="contact">Contacto</Link>
                <Link className="li" to="/category/libro">Libros</Link>
                <Link className="li" to="/category/revista">Revistas</Link>
                <Link className="li" to="/category/gaceta">Gaceta</Link>
                <Link className="li" to="/category/jornada">Jornadas</Link>
                
            </ul>
            <Link  to="shop"> <CartWidget /></Link>
        </nav>
    );
}

//exportaciones por fefecto, no hay diferencia entre una y otra
export default Navbar;

//los componentes siempre los exportamos por defecto
//crear un componente para footer se crea carpeta para cada uno