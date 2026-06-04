import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApplicationsContextProvider } from './context/ApplicationsContext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ApplicationsContextProvider>
        <App />
      </ApplicationsContextProvider>
    </BrowserRouter>
  </StrictMode>
)
