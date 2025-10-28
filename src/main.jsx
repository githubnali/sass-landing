import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App'
import './styles/globals.css'
import { ModalProvider } from './context/ModalContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
)