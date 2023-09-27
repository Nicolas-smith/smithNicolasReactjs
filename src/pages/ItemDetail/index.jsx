import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Layout from "../../components/Layout/index";
import "./itemDetail.css"


const ItemDetail = () => {
    const { idProduct } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await fetch('/Products.json');
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              const filteredProduct = data.find((prod) => parseInt(prod.id) == idProduct);
              
              setProduct(filteredProduct);
          } catch (error) {
              console.error('Error:', error);
          }
      };

      fetchProducts();
  }, [idProduct]);
   
  return (
      <Layout>
        {product ? (
          <div className="detailCard">
            <h1 >{product.nombre}</h1>
            <img style={{width:"300px", height:"350px"}} src={product.imgUrl} alt={product.nombre} />
            <p>{product.descripcion}</p> <br />
          
          </div>
          ) : (
            <p>Cargando ...</p>
          )}
      </Layout>
    );
  };
  
  export default ItemDetail;

