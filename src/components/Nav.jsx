import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav className='display flex justify-around pt-6' >

      <Link to="/" className='bg-[#0079C1] py-2 px-8 rounded-2xl transition duration-300 transform hover:bg-blue-400 hover:scale-115 cursor-pointer'>
        <button>Inicio</button>
      </Link>

      <Link to="/sobre" className='bg-[#0079C1] py-2 px-8 rounded-2xl transition duration-300 transform hover:bg-blue-400 hover:scale-115 cursor-pointer'>
        <button>Sobre</button>
      </Link>

      <Link to="/solucao" className='bg-[#0079C1] py-2 px-8 rounded-2xl transition duration-300 transform hover:bg-blue-400 hover:scale-115 cursor-pointer'>
        <button>Solução</button>
      </Link>

      <Link to="/login" className='bg-[#0079C1] py-2 px-8 rounded-2xl transition duration-300 transform hover:bg-blue-400 hover:scale-115 cursor-pointer'>
        <button>Login</button>
      </Link>

      <Link to="/cadastrar" className='bg-[#0079C1] py-2 px-8 rounded-2xl transition duration-300 transform hover:bg-blue-400 hover:scale-115 cursor-pointer'>
        <button>Cadastro</button>
      </Link>


    </nav>
  )
}

export default Nav