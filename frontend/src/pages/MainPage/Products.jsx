import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';




export function Products({ products, onDeleteRepo, onNewRepo, onUpdateProduct }) {
  const [newProduct, setNewProduct] = useState();

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
        <button className="add-button" onClick={() => onNewRepo(newProduct)}><AddIcon className="icon-add"/></button>
      </ul>
      <ul className="list">
        <div className="card">
        {products?.map((product) => (
          <li className="item" key={product._id}>
            <div className="info">
              <div className="name">
                {product.name}
              </div>
              <div className="description">
                <p>{product.description}</p>
                
              </div>
              <div className="amount">
                <p>{product.amount}</p>
                
              </div>
              <div className="quantity">
                <p>{product.quantity}</p>
                
              </div>
            </div>
            
            <button  onClick={() => onDeleteRepo(product)}><HighlightOffIcon className="trash-icon"/></button>
          </li>
        ))}
        </div>
      </ul>

      
    </div>
  );
}
