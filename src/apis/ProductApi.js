import axios from 'axios';
import React from 'react';

const getAllProducts = async () =>{
    try {
        const response  = await axios.get("https://dummyjson.com/products")
        console.log(response)
        return Promise.resolve(response)
    } catch (error) {
        return Promise.reject(error)
    }
                                  
}

const addProductApi = async (product) =>{
    console.log("prod",product)
    try {
        const response  = await axios.post(`https://dummyjson.com/products/add`,{title:product.title, price:product.price, image:product.image})
            console.log(response)
            return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error)
    }
}

const updateProductApi = async (productId,prodTitle) =>{
    console.log(prodTitle)
    try {
        const response  = await axios.put(`https://dummyjson.com/products/${productId}`,{"title":prodTitle})
            console.log(response)
            return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error)
    }
}

const removeProductApi = async (productId) =>{
    try {
        const response  = await axios.delete(`https://dummyjson.com/products/${productId}`)
            console.log(response)
            return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error)
    }
}

export default {getAllProducts, addProductApi,updateProductApi,removeProductApi};