// CM - React imports and application setup
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// CM - Stylesheet and main application component
import './index.css'
import App from './App.tsx'

// CM - Render the application inside React Strict Mode and BrowserRouter
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)