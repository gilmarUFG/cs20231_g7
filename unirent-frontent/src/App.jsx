import './App.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-modal';

import Header from './components/Header'


Modal.setAppElement('#root');

function App() {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  return (
    <>

      
      <div>
        <ul className='ulist'>
          <li className='list'>
        <Header />
        <button className='entrar' onClick={abrirModal}>Entrar</button>
        <Modal isOpen={modalIsOpen} onRequestClose={fecharModal} contentLabel="Modal de exemplo">
          <h2>Olá</h2>
          <button onClick={fecharModal}>Fechar</button>
          <div>Eu sou uma modal</div>
        </Modal>
          </li>
        </ul>
       
      </div>

    </>
  )
}

export default App;
