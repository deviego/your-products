import React, { useContext, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { destroyProduct } from "../../services/api";
import BasicModal from "../../components/Modal/Modal";




export function Products({ products, onNewProduct, onUpdateProduct }) {
  const [newProduct, setNewProduct] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(true)

  const handleDeleteProduct= async (product)=> {
    console.log("seus dados", product?.userId, product?._id)
    await destroyProduct(product?.userId, product?._id);
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
