import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; 
import Product from './pages/Product'
import { ProductsContexProvider } from './contexts/ProductContext';
import getAllProducts from './apis/ProductApi';
import { useEffect } from 'react';
import ProductApi from './apis/ProductApi';
import {MsalProvider} from '@azure/msal-react';
import Login from './components/Login';
import {useIsAuthenticated} from '@azure/msal-react'
import {AuthenticatedTemplate, UnauthenticatedTemplate} from '@azure/msal-react';
import Logout from './components/Logout';


function App({msalInstance}) {
  const [products, setProducts] = useState([]);

  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated)

  useEffect(() => {
    fetchdata();
  }, [])

  const fetchdata = async () =>{
    try {
      const res  = await ProductApi.getAllProducts();
      setProducts(res?.data?.products ? res.data.products  : [])
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const addProduct = async (product) =>{
    // const fetchdata = async () =>{
      try {
        const res  = await ProductApi.addProductApi(product);
        product = res ?.data;
        setProducts(prev => [...prev, product])
      } catch (error) {
        console.error('Error fetching products:', error);
      }
  }

  const updateProduct = async (productId, title) =>{
      try {
        const res  = await ProductApi.updateProductApi(productId,title)
        console.log(res)
        setProducts(prev =>  prev.map((prod)=>(
          prod.id===res.data.id ? {...prod, title:res.data.title} : prod
      )))
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    
  }
  
  const deleteProduct = async (productId) =>{
      let product = {};
      try {
        const res  = await ProductApi.removeProductApi(productId)
        product = res ?.data;
        setProducts(prev => prev.filter((prod)=>(prod.id!==product.id)))
      } catch (error) {
        console.error('Error fetching products:', error);
      }
  }
  

  return (
    <MsalProvider instance={msalInstance}>
        <ProductsContexProvider value={{products,addProduct,updateProduct,deleteProduct}}>
          <AuthenticatedTemplate>
            <Logout />
             <Product />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
              <Login />
          </UnauthenticatedTemplate>
          
        </ProductsContexProvider>
  </MsalProvider>
  );
}


export default App;
