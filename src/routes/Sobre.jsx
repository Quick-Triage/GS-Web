import React from 'react'


const Sobre = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-20">

      <h2 className="text-3xl font-bold mb-10 flex justify-center">Quem somos</h2>

      <p className='text-lg pb-20 pt-7'>Somos um grupo comprometido em promover soluções digitais para ajudar a reduzir os impactos das enchentes na cidade de São Paulo. Unimos tecnologia, informação e
        conscientização para oferecer dados úteis, orientações e iniciativas que buscam minimizar os danos causados pelas chuvas. Acreditamos que a prevenção começa
        com o acesso à informação e à mobilização da população.</p>

      <h2 className="text-3xl font-bold mb-10 flex justify-center">Nosso Objetivo</h2>

      <p className='text-lg pb-10 pt-10'>Nosso principal objetivo é oferecer soluções de infraestrutura que façam com que a cidade de São Paulo sofra menos com as enchentes. Por meio da nossa plataforma,
        buscamos apresentar projetos, tecnologias e estratégias eficazes para melhorar o sistema de drenagem, prevenir alagamentos e minimizar os danos causados pelas chuvas.</p>

      <p className='text-lg pb-20'>Trabalhamos para apoiar o desenvolvimento urbano sustentável e a implementação de medidas que garantam mais segurança e qualidade de vida para toda a população.</p>

      <img src="enchente-viaduto.png" alt="imagem de enchentes para pagina sobre" className="rounded-2xl my-10"/>

      <h2 className="text-3xl font-bold mb-10 mt-25 flex justify-center">Prejuízos das enchentes</h2>

      <p className='text-lg pb-10'>As enchentes em São Paulo causam enormes prejuízos à população e ao poder público. Além das perdas materiais, como móveis, carros e moradias, a cidade enfrenta danos 
        estruturais graves, interrupções no transporte e impactos diretos na economia local, especialmente para comerciantes e trabalhadores informais.</p>

      <p className='text-lg pb-20'>Os custos para os cofres públicos são altíssimos, somando bilhões de reais entre obras emergenciais, manutenção e programas de assistência. Mais do que números, esses 
        prejuízos afetam vidas, destroem sonhos e mostram que a cidade ainda tem muito a evoluir em planejamento urbano e gestão de risco.</p>

      <img src="prejuizo-foto.png" alt="foto pra demonstrar prejuizo" className="rounded-2xl my-10"/>

    </div>
  )
}

export default Sobre