import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useProductContext } from '../contexts/ProductContext';
import AddProductModal from '../components/AddProductModal';
import UpdateProductModal from '../components/UpdateProductModal';

function Product() {
    const [productList, setProductList] = useState([]);
    const [productId, setProductId] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [brand, setBrand] = useState();


    const {products = [], deleteProduct} = useProductContext();
    console.log(products)
    const removeHandler = (productId) =>{
        // let product = {};
        // axios
        //     .delete(`https://dummyjson.com/products/${productId}`)
        //     .then(data=>{
        //         product = data ?.data;
        //         setProductList(prev => prev.filter((prod)=>(prod.id!==product.id)
        //         ))
        //     })
        deleteProduct(productId);
    }
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    return ( 

    <>
   <AddProductModal />
   
    <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            color: "blue",
            gap: "3px",
            rowGap: "30px",
            paddingTop: "30px",
          }}
        >
          {products.map((product) => (
             <div
             style={{
               alignSelf: "center",
             }}
           >
             <div>
               <img
                 style={{ height: "200px", width: "200px" }}
                 src={product.images ? product.images[0] :"https://i.dummyjson.com/data/products/11/thumbnail.jpg"}
                 alt="img"
               />
             </div>
             <div>
               <span> {product.id}</span>
             </div>
             <div>
               <h3> {product.title}</h3>
             </div>
             <div>
               <p>Price {product.price}</p>
             </div>
             <div>
               <p>Brand {product.brand}</p>
             </div>
       
             <button onClick={()=>removeHandler(product.id)}>
              remove
             </button>
             <UpdateProductModal productId = {product.id} />
           </div>
          ))}
        </div>

    </>
     );
}

export default Product;