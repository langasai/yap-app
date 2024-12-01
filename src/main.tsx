import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Header from './Header.tsx';
import NavBar from './NavBar.tsx';
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <Header />
    <App />
  </StrictMode>,
)
