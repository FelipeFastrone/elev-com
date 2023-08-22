
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import EletricaResi from './components/pages/EletricaResi';
import EnergiaSol from './components/pages/EnergiaSol';
import Elevadores from './components/pages/Elevadores';
import Arcondicionado from './components/pages/Arcondicionado';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
import Container from './components/layout/Container';






export default function App() {
  

  return (
    <div id="App" >
     <Navbar />
    <Container customClass="min-height">
    <Routes>
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
         element={<Arcondicionado/>}>
       </Route>
      </Routes>
      </Container>
      <Footer />
    
    
      
    </div>
  )
}

 
