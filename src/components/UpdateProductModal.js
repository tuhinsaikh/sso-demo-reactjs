import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useProductContext } from '../contexts/ProductContext';


export default function UpdateProductModal({productId, updateAlert}){

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const {updateProduct} = useProductContext();
    const [title, setTitle] = useState("");
  
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      
      
    };
    
    const titleOnChangeHandler  = (e) =>{
      setTitle(e.target.value)
    }
    const updateProductHandler = ()=>{
        updateProduct(productId,title);
        handleClose();
        updateAlert();
    }
      return (
          <div>
            <Button onClick={handleOpen} variant="outlined">Update Name</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          
              <Grid container spacing={0} columns={0}>
                  <Grid item xs={16}>
                  <TextField style={{width:"90%", marginLeft:"20px"}} onChange={titleOnChangeHandler} id="filled-basic" label="Title" variant="filled" />
                  </Grid>
                  <Button onClick={updateProductHandler} style={{marginTop:"30px", position:"relative",left: '30%'}} variant="contained">Update Title</Button>
              </Grid>
          </Box>
        </Modal>
          </div>
        );

}