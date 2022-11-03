import React, { useContext, useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Products } from "./Products";
import { getProduct } from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";
import { AuthContext } from "../../context/auth";



export function MainPage() {
  const {user} = useContext(AuthContext)
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [products, setProducts] = useState([]);

  const loadData = async () => {
      try {
        
        const response = await getProduct(user?.id);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoadingError(true);
      }
    };
  

  useEffect(() => {
    (async () => loadData())();
  }, []);



  if(loadingError){
    return(
      <div className="loadinError">Error ao carregar os dados. <Link to="/login">Voltar</Link></div>
    )
  }

  if(loading) {
    return(
      <div className="loading"> Carregando dados...</div>
      
    )
  }
 
  return (
    <>
      <div className="main">
        <Nav />
        
        <Products
          products={products}
        />
      </div>
    </>
  );
}
