import React, { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { destroyProduct, getProduct } from "../../services/api";
import BasicModal from "../../components/Modal/Modal";




export function Products({ products}) {

 const refreshPage = () => {
    window.location.reload()
 } 

  const handleDeleteProduct= async (product)=> {
    await destroyProduct(product?.userId, product?._id);
    alert(`Produto ${product?.name} DELETADO !`)
    refreshPage()
  }

  return (
    <div className="Products">
    
      <div className="modal">
       
      <BasicModal/>
      
      </div>
      <ul className="list">
        <h2>Seus Produtos cadastrados: </h2>
        <div className="card">
        {products?.map((product) => (
          <li className="item" key={product._id}>
            <div className="info">
              <div className="name">
                Nome: {product.name}
              </div>
              <div className="description">
                <p>Descrição: {product.description}</p>
                
              </div>
              <div className="amount">
                <p>Preço: R$ {product.amount}</p>
                
              </div>
              <div className="quantity">
                <p>Quantidade em estoque: {product.quantity}</p>
                
              </div>
            </div>
            
            <button  onClick={() => handleDeleteProduct(product)}><HighlightOffIcon className="trash-icon"/></button>
          </li>
        ))}
        </div>
      </ul>
      
    </div>
  );
}
