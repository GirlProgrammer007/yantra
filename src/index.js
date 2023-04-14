import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Menu from './components/Menu';
import Press from './components/Press';
import Reservesions from './components/Reservesions';
import Trunk from './components/Trunk';
import Vaucher from './components/Vaucher';
import Contact from './components/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/press' element={<Press />} />
        <Route path='/reservations' element={<Reservesions />} />
        <Route path='/trunk' element={<Trunk />} />
        <Route path='/vaucher' element={<Vaucher />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


