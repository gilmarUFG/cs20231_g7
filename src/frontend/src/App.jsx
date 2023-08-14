import './App.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonAppBar from './components/ButtonAppBar';
import FormEntrar from './components/FormEntrar';
import { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

import FormCadastro from './components/FormCadastro';



Modal.setAppElement('#root');

function App() {

  const [entrarIsOpen, setEntrarIsOpen] = useState(false);
  const [cadastrarIsOpen, setCadastrarIsOpen] = useState(false);
  {/* Fechar os modais*/ }


  const entrarClose = () => {
    setEntrarIsOpen(false);
  }

  const entrarOpen = () => {
    setEntrarIsOpen(true);
    setCadastrarIsOpen(false);
  }

  const cadastrarClose = () => {
    setCadastrarIsOpen(false);
  }

  const cadastrarOpen = () => {
    setCadastrarIsOpen(true);
    setEntrarIsOpen(false);
  }
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='barra-nav' component="nav" color="default">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >

            <Link to='/' onClick={entrarClose}><img className="img-logo" src="./logologo.svg" alt="Logo UniRent" /></Link>

          </Typography>
          <Box >

            <ButtonAppBar setCadastrarIsOpen={setCadastrarIsOpen} setEntrarIsOpen={setEntrarIsOpen} />

            <Modal
              isOpen={entrarIsOpen}
              onRequestClose={entrarClose}
              contentLabel='Alugar'
              overlayClassName='modal-overlay'
              className='modal-content-entrar'
            >
              <div>
                <button className='button-fechar' onClick={entrarClose}> x </button>
              </div>
              <div className='div-modal-entrar'>
                <div>
                  <img className="img-logo" src="./logologo.svg" alt="Logo UniRent" />
                </div>
                <div>
                  <FormEntrar entrarClose={entrarClose}/>
                </div>
                <h5>Ou</h5>
                <div>
                  <Link onClick={cadastrarOpen}>Cadastre-se aqui</Link>
                </div>
              </div>
            </Modal>
            <Modal
              isOpen={cadastrarIsOpen}
              onRequestClose={cadastrarClose}
              contentLabel='Cadastro'
              overlayClassName='modal-overlay'
              className='modal-content-cadastrar'
            >
              <div>
                <button className='button-fechar' onClick={cadastrarClose}> x </button>
              </div>
              <div>
                <div className='div-modal-entrar'>
                  <div>
                    <img className="img-logo" src="./logologo.svg" alt="Logo UniRent" />
                  </div>
                  <div>
                    <FormCadastro entrarOpen={entrarOpen} />
                  </div>
                  <h5>Ou</h5>
                  <div>
                    <Link onClick={entrarOpen}>Entre aqui</Link>
                  </div>
                </div>
              </div>
            </Modal>

          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Toolbar>
          <Outlet />
        </Toolbar>
      </Box>
    </Box>
  );
}


export default App;
