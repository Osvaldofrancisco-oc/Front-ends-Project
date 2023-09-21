import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Contacto from "./pages/Contacto"

import Navbar from "./layouts/NavBar"
import Footer from "./layouts/Footer"
import Container from './layouts/Container'



function App(){

  return(
    <>
    <Navbar/>´
    <Container customClass='min_height'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/sobre" element ={<Sobre/>} />
          <Route path="/contacto" element ={<Contacto/>} />
        </Routes>
      </BrowserRouter>
      </Container>
    <Footer/>  
    </>
  )
}

export default App