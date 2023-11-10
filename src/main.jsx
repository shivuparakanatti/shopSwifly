import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { CartProvider, useCart } from "react-use-cart";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <CartProvider>

    <App />
    </CartProvider>
    </BrowserRouter>

    </Provider>
    
      
  </React.StrictMode>,
)
