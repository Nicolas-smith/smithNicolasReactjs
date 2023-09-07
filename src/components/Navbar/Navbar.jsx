import "./styles.css";
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../../assets/images/banner.jpg"

const Navbar = (prop) => {
    return (
        <header>
        <div className="navbar">
        <h1 className="Titulo">
            {prop.brand}
        </h1>
        <nav>
            <ul>
                <a href=""><img src={Logo} className="Logo"></img></a>
                <a href=""><li>Editorial</li></a>
                <a href=""><li>Novedades</li></a>
                <a href=""><li>Contacto</li></a>
                <CartWidget count="0"/> 
            </ul>
        </nav>

        </div>
        </header>
    );
};

export default Navbar;