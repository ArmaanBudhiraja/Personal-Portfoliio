import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home_professional from './Home_professional.jsx';
import Home_chaos from './Home_chaos.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_professional />} />
        <Route path="/chaotic" element={<Home_chaos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
