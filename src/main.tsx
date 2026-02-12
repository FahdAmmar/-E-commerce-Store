import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCardContext';


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <BrowserRouter>
      <ShoppingCartProvider>
    <App />
    </ShoppingCartProvider>
    </BrowserRouter>
  </StrictMode>,
)
