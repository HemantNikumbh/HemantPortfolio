import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authprovider } from './store/auth.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <Authprovider>
  <StrictMode>
    <App />
  <ToastContainer/>
  </StrictMode>,
  </Authprovider>
);
