import React,{createContext,useContext} from 'react';

export const ProductsContext = createContext({
    products :
                [
                    {   id: 1,
                        title: "product1",
                        price: 100.0,
                        image: "img_src"
                    }
                ],

    addProduct : (product) => {},
    updateProduct : (product, productId) => {},
    deleteProduct : (productId) => {},
})

export const ProductsContexProvider = ProductsContext.Provider;

export const useProductContext = () =>{
    return useContext(ProductsContext);
}