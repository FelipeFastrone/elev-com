import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';

import Home from './components/pages/Home.jsx';
import EletricaResi from './components/pages/EletricaResi.jsx';
import EnergiaSol from './components/pages/EnergiaSol.jsx';
import Elevadores from './components/pages/Elevadores.jsx';
import ArCondicionado from './components/pages/Arcondicionado.jsx';

import Navbar from "./components/layout/Navbar";
import Container from './components/layout/Container.jsx';


import './index.css';
import Footer from './components/layout/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Container customClass="min-height">
    <Routes
    element={<App />}>
      <Route
         path='/'
         element={<Home/>}>
      </Route>
      <Route
         path='/EletricaResi'
         element={<EletricaResi/>}>
      </Route>
       <Route
         path='/EnergiaSol'
         element={<EnergiaSol/>}>
       </Route>
       <Route
         path='/Elevadores'
         element={<Elevadores/>}>
       </Route>
       <Route
         path='/Arcondicionado'
         element={<ArCondicionado/>}>
       </Route>
      </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
