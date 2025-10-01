import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App'
import './styles/globals.css'
import { getTheme, setTheme } from "./lib/theme";
import { ModalProvider } from './context/ModalContext';



// Force dark mode by default
if (!document.documentElement.classList.contains("dark")) {
  document.documentElement.classList.add("dark");
}


// const savedTheme = getTheme();
// console.log(savedTheme);
// setTheme(savedTheme || "dark"); // default dark if nothing is saved

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
)