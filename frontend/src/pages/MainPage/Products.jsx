import React, { useContext, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { destroyProduct } from "../../services/api";




export function Products({ products, onNewProduct, onUpdateProduct }) {
  const [newProduct, setNewProduct] = useState();

  const handleDeleteProduct= async (product)=> {
    console.log("seus dados", product?.userId, product?._id)
    await destroyProduct(product?.userId, product?._id);
  }

  return (
    <div className="Products">
      <h2 className="title">Produtos</h2>
      <ul className="new">
       
        <input
          type="url"
          name="new-product"
          id="new-product"
          value={setNewProduct}
          placeholder='
          Criar novo produto produto'
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button className="add-button" onClick={() => onNewProduct(newProduct)}><AddIcon className="icon-add"/></button>
      </ul>
      <ul className="list">
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
