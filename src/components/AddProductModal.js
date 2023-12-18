import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useProductContext } from '../contexts/ProductContext';




export default function AddProductModal(){

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {addProduct} = useProductContext();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("https://i.dummyjson.com/data/products/11/thumbnail.jpg");

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
  const priceOnChangeHandler  = (e) =>{
    setPrice(Number(e.target.value))
  }
  const imageOnChangeHandler  = (e) =>{
    setImage(e.target.value)
  }
  const addProductOnClick = ()=>{
    const prod = {
        title:title,
        price:price,
        image:image
    }
    addProduct(prod);
  }
    return (
        <div>
          <Button onClick={handleOpen} variant="outlined">Add Another Product</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
            <Grid container spacing={2} columns={18}>
                <Grid item xs={6}>
                <TextField onChange={titleOnChangeHandler} id="outlined-basic" label="Title" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                <TextField onChange={priceOnChangeHandler} id="outlined-basic" label="Price" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                <TextField onChange={imageOnChangeHandler} id="outlined-basic" label="Image url" variant="outlined" />
                </Grid>
                
            </Grid>
            <Button onClick={addProductOnClick} style={{marginTop:"30px", position:"relative",left: '40%'}} variant="contained">Add Product</Button>
        </Box>
      </Modal>
        </div>
      );
}