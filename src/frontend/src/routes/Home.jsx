import React from 'react'
import ImagemPredio from '../components/ImagemPredio';
import './Home.css'
import FormHome from '../components/FormHome';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-organizada'>
       <div className="tres-coisas-in">
        <ImagemPredio />
        <div className='ola-mundo'>
          <h1 className='titulo-home'>Encontre imóveis próximos à faculdade</h1>
          <div>
            <FormHome />
          </div>
        </div>
      </div>
      <div>
        <div className='ver-anuncios'>
          <h3>Anúncios Recentes</h3>
          <Link to='/Anuciar'>Ver mais</Link>
        </div>
      </div>
    </div>
  )
}

export default Home