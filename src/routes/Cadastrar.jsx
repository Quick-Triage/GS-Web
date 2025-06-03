import React, { useState } from 'react';

const Cadastrar = () => {
  const [aceito, setAceito] = useState(false);

  const handleCriarConta = () => {
    if (!aceito) {
      alert('Você precisa aceitar o checkbox para continuar.');
      return;
    }
    // Aqui você colocaria o que deve acontecer ao criar a conta
    alert('Conta criada com sucesso!');
  };

  return (
    <>
      <div className='max-w-md mx-auto px-4 mt-30 rounded-2xl shadow-gray-950 shadow-2xl'>
        <h2 className="text-3xl font-bold mb-10 flex justify-center pt-10">Cadastro</h2>
        <div className='flex flex-col gap-4 pt-5'>
          <div className='flex justify-center gap-4 mr-10'>
            <h2 className='text-sm mt-1'>Nome</h2>
            <input type="text" className="border-2 rounded-xl text-center pr-3 mb-6" required />
          </div>
          <div className='flex justify-center gap-4 mr-10'>
            <h2 className='text-sm mt-1'>Senha</h2>
            <input type="password" className="border-2 rounded-xl text-center pr-3 mb-6" required />
          </div>
          <div className='flex justify-center gap-1 mr-25'>
            <h2 className='text-sm mt-1'>Confirmar senha</h2>
            <input type="password" className="border-2 rounded-xl text-center pr-3 mb-6" required />
          </div>
          <div className='flex justify-center gap-4 mr-9'>
            <h2 className='text-sm mt-1'>Email</h2>
            <input type="email" className="border-2 rounded-xl text-center pr-3" required />
          </div>
          <div className="flex justify-center items-center pb-5 ml-2 gap-2">
            <h2 className="text-xs font-medium">Confirmo que darei 10</h2>
            <input
              type="checkbox"
              checked={aceito}
              onChange={(e) => setAceito(e.target.checked)}
              className="w-5 h-5 accent-blue-600 rounded-md transition-all duration-200 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex justify-center pb-10 ml-2">
            <button
              type="button"
              onClick={handleCriarConta}
              className="bg-gray-400 px-8 py-2 rounded-2xl transition duration-300 transform hover:bg-gray-300 hover:scale-105 cursor-pointer"
            >
              Criar conta
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastrar;
