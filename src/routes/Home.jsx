import React from 'react'


const Home = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-20">

      <h2 className="text-3xl font-bold mb-4">Chuva causa alagamentos na cidade de São Paulo e região metropolitana</h2>

      <div className="pb-10">
        <div className="flex justify-start pt-5">
          <p className="pr-1 text-xs">Por </p>
          <p className="pr-1 text-xs text-[#0079C1] font-bold"> Rede Tv Globo</p>
        </div>
        <p className="pr-1 text-xs">04/04/2025 06h39 - Atualizado há um mês</p>
      </div>

      <img src="alagamento-carro-submerso.png" alt="foto inicio de carros alagados" className="rounded-2xl my-10"/>

      <p className='text-lg pb-10' >A chuva forte que atingiu pontos da cidade de São Paulo e da região metropolitana durante a madrugada desta sexta-feira
        (4) causou alguns alagamentos.</p>

      <p className='text-lg pb-10'>O Centro de Gerenciamento de Emergências (CGE), da Prefeitura de São Paulo, chegou a colocar as zonas Leste e Sudoeste da cidade em estado de
        atenção entre as 6h08 e as 6h55, mas a chuva que começou no fim da madrugada na região perdeu força.</p>

      <p className='text-lg pb-10'>Na capital, houve registro de enchente no bairro de Piraporinha, na região de Santo Amaro, na Zona Sul. Imagens gravadas por moradores mostram uma rua totalmente
        submersa e um ônibus parado no alagamento.</p>

      <img src="rio-tamanduatei-em-santo-andre.avif" alt="Rio Tamanduatei alagado" className="rounded-2xl my-10"/>

      <p className='text-lg pb-10 font-bold'>O Corredor ABD chegou a ter alguns pontos alagados, o que tem ainda refletido no trânsito, que está bastante carregado.</p>

      <p className='text-lg pb-10'>Na quinta-feira (3), crianças ficaram presas dentro de uma van escolar em um alagamento em uma avenida de Guarulhos. Elas foram resgatadas por moradores. Vídeos do resgate que foram compartilhados nas redes sociais mostram que o nível da água estava elevado.</p>

      <p className='text-lg pb-5'>Apesar dos bilhões investidos em obras contra enchentes, São Paulo continua alagando. A cada chuva mais forte, ruas viram rios, ônibus param no meio da água e moradores 
        perdem móveis, carros e até acesso ao trabalho. Só em um único dia, como foi o caso em abril de 2025, o comércio da capital pode ter perdido mais de R$ 100 milhões, 
          segundo estimativas da Fecomércio-SP.</p>

        

    </div>
  )
}

export default Home