import { Link } from "react-router-dom";
import './menu.css'
function Menu() {
    return (
        <>
            <div className="container">
                <nav className="Menu">
                    <ul className="sub-menu">
                        <Link className="li" to={'/'}>Home</Link>
                        <Link className="li" to={'/contactos'}>Contacto</Link>
                        <Link className="li" to={'/blog'}>Blog</Link>
                        <Link className="li" to={'/sobre'}>Sobre</Link>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Menu;
