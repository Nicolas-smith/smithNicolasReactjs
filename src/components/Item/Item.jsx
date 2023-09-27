import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({id, nombre, precio, descripcion, imgUrl}) => {
    return (
        <div className="itemCard">
            <img style={{width:"300px", height:"350px"}} src={imgUrl} />
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <Link to={`/detail/${id}`} className="vinculo">Ver más</Link>
        </div>
    )
}

export default Item;