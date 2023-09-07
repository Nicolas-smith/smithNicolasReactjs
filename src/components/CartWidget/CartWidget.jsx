import carrito from '../../assets/images/carrito.png'
import "./style.css"

const CartWidget = (prop) => {
    return (
        <div>
            <img src={carrito} />
            <span>{prop.count} </span>
        </div>
    )
}

export default CartWidget