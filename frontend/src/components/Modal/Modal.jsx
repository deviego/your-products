
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal';
import './style.css'
import { createProduct } from '../../services/api';
import { AuthContext } from "../../context/auth";


const style = {
  
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {

  const {user} = useContext(AuthContext)


  
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [amount, setAmount] = React.useState('')
  const [quantity, setQuantity] = React.useState(0)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const sendInfo = async (e) => {
    e.preventDefault()
   
    if(name == undefined | '' || description ==  undefined | "" || amount == undefined |""  ||  quantity == 0 | undefined) {

      alert("Por favor preencha todos os campos")
      return
    }
    
    try {
      await createProduct(user?.id, name, description, amount, quantity);
      console.log("product cirado");
    } catch (error) {
      console.error(error);
    }
  
  }



  return (
    <div>
      <button color='secondary' onClick={handleOpen} className="buttonModal"><AddIcon className="icon-add"/>Cadastrar Produto </button>
      <Modal
        open={open}

       
      >
        <Box className='box' sx={style}>
         <h2>Produto</h2>

         <form action="submit" onSubmit={sendInfo}>
          
            <input  
            type="text" 
            name='name' 
            placeholder='Digite o nome do produto'
            value={name}
            onChange={(e) => setName(e.target.value)} />
          
          
           
            <input  
            type="text"
            name='description'
            placeholder='Digite o nome do produto' 
            value={description}
            onChange={(e) => setDescription(e.target.value)} />

          
        
           
            <input 
            placeholder='Digite o valor do produto ex:100,00' 
            type="text" 
            step="0.01" 
            name="quantity" 
            min="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} />

        
            
            <input  
            min={1} type=
            "number" 
            name='quantity' 
            placeholder='Digite a quantidade do estoque'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            />

          
          <input
          className='button send' 
          type="submit" 
          value="cadastrar"/>
          <input className='button cancel' type="button" value="cancelar"  onClick={handleClose}/>
          
         </form>
      
          
        </Box>
      </Modal>
    </div>
  );
}
