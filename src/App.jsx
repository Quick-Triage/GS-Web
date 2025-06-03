import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Home from './routes/Home'
import Sobre from './routes/Sobre'
import Login from './routes/Login'
import Cadastrar from './routes/Cadastrar'
import Solucao from './routes/Solucao'
import Error from './error/Error'


function App() {

  return (
    <BrowserRouter>

      <Logo/>
      <Nav/>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/solucao' element={<Solucao/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastrar' element={<Cadastrar/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
