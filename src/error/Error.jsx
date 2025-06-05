import React from 'react'

const Error = () => {
  return (
    <div className='flex flex-col items-center'>

      <img src="error-404.png" alt="imagem erro 404" className="h-auto w-70 pt-60" />

      <p className='text-lg pb-10 mt-10'>Page Not Found</p>

      <p className='mb-20'>Clique <a href="/" className='text-[#0079C1] font-bold'>aqui</a> para voltar a pagina principal</p>

    </div>
  )
}

export default Error