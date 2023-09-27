import React, { useState } from "react"
import "./styles.css"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../../assets/images/banner.jpg"
import { Link } from "react-router-dom"

const Navbar = (prop) => {
    const [selectedCategory, setSelectedCategory] = useState(true)
    return (
        <header>
        <div className="navbar">
        <h1 className="Titulo">{prop.brand}</h1>
        <nav>
            <ul>
                <Link to="/"><img src={Logo} className="Logo"></img></Link>
                <Link to="/editorial/Ivrea" ><li>Ivrea</li></Link>
                <Link to="/editorial/Panini" ><li>Panini</li></Link>
                <Link to="/editorial/OvniPress"><li>OvniPress</li></Link>
                <CartWidget count="0"/> 
            </ul>
        </nav>

        </div>
        </header>
    );
};

export default Navbar;