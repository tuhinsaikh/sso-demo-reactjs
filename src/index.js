import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {PublicClientApplication, EventType} from '@azure/msal-browser';

const pca = new PublicClientApplication({
  auth:{
    clientId:'b4aef742-75b6-472e-a6e9-d4d66e570f56',
    authority:'https://login.microsoftonline.com/420fe8d6-bf12-4b0d-b544-2d446b8609de',
    redirectUri:"/"
  }
})

pca.addEventCallback((event)=>{
  if(event.eventType===EventType.LOGIN_SUCCESS){
    console.log(event);
    pca.setActiveAccount(event.payload.account)
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App msalInstance = {pca}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
