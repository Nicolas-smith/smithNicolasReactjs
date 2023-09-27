import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import Layout from '../../components/Layout/index';
import Item from "../../components/Item/Item";
import { useParams } from "react-router-dom";
import "./home.css"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { editorialId } = useParams();

    const fetchProducts = async () => {
        try {
            const response = await fetch('/Products.json');
            if (!response.ok) {
                throw new Error ('Sin respuesta');
            }
    const data = await response.json();

    console.log(data)

    setTimeout(() =>{
        const filteredProducts = editorialId === undefined ? data : data.filter((prod) => prod.editorial === editorialId)
        setProducts(filteredProducts);
        setIsLoading(false);
        }, 1000)
      } catch (error) {
      
        setIsLoading(false);
      }
    };

    useEffect(() => {
      setIsLoading(true);
      fetchProducts();
    }, [editorialId]);
   
    return(
        <Layout>
        <ItemList>
            {   
                
                isLoading 
                ? <p >Cargando . . .</p>
                : products.map(prod =>(
                    <div className="containerCard">
                    <div className="homeCard">
                    <Item 
                    id={prod.id}
                    editorial={prod.editorial}
                    nombre={prod.nombre}
                    precio={prod.precio}
                    imgUrl={prod.imgUrl}
                    />
                    </div>
                    </div>
                ))
            }

            </ItemList>
        </Layout>
)} 

export default Home;

