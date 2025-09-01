import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home_professional from './Home_professional.jsx' 
import Home_chaos from './Home_chaos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home_chaos />
  </StrictMode>,
)
