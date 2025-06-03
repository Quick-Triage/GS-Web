import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  return (
    <div className='max-w-md mx-auto px-4 rounded-2xl shadow-gray-950 shadow-2xl pb-20 mb-100 mt-50'>
      <h2 className="text-3xl font-bold mb-10 text-center">Login</h2>

      {/* Input usuário */}
      <div className="flex items-center border rounded-2xl mb-6 px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 max-w-xs mx-auto">
        <FaUser className="text-gray-400 mr-3" size={20} />
        <input
          type="text"
          placeholder="Usuário"
          className="w-full outline-none text-gray-700"
        />
      </div>

      {/* Input senha */}
      <div className="flex items-center border rounded-2xl mb-6 px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 max-w-xs mx-auto">
        <FaLock className="text-gray-400 mr-3" size={20} />
        <input
          type="password"
          placeholder="Senha"
          className="w-full outline-none text-gray-700"
        />
      </div>

      <button className="flex justify-center max-w-xs mx-auto w-full bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition">
        Entrar
      </button>

    </div>
  );
};

export default Login;
