
import * as React from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './style.css'

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
  const [name, setName] = React.useState()
  const [description, setDescription] = React.useState()
  const [amount, setAmount] = React.useState()
  const [quantity, setQuantity] = React.useState()

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const sendInfo = (e) => {
    e.preventDefault()
  }


  if(name === "", description === "", amount === 0,  quantity === 0) {
    alert("Por favor preencha todos os campos")
    return
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
            placeholder='Digite o nome do produto' />
      
          
           
            <input  
            type="text"
            name='description'
            placeholder='Digite o nome do produto' />
          
        
           
            <input 
            placeholder='Digite o valor do produto' 
            type="number" 
            step="0.01" 
            name="quantity" 
            min="0.01"/>
        
            
            <input  
            min={1} type=
            "number" 
            name='quantity' 
            placeholder='Digite a quantidade do estoque' />

          
          <input
          className='button send' 
          type="submit" 
          value="cadastrar"/>
          <input className='button cancel' type="button" value="cancelar" />
          
         </form>
      
          
        </Box>
      </Modal>
    </div>
  );
}
