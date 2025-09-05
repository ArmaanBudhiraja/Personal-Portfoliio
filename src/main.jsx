import { createRoot } from 'react-dom/client'
import Home_professional from './Home_professional.jsx' 
import Home_chaos from './Home_chaos.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home_professional />} />
      <Route path="/Home_chaos" element={<Home_chaos />} />
    </Routes>
  </BrowserRouter>
)
