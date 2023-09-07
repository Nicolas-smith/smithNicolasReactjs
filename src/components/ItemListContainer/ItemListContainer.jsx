import "./styless.css";

const ItemListContainer = (prop) => {
    return(
    <div className="container">
        <h1>
            {prop.greeting}
        </h1>
    </div>
    )
}

export default ItemListContainer;