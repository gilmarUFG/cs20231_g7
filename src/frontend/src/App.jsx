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

import {Outlet} from 'react-router-dom'



Modal.setAppElement('#root');

function App() {

  const [alugarIsOpen, setAlugarIsOpen] = useState(false);
  const [anunciarIsOpen, setAnunciarIsOpen] = useState(false);
  const [entrarIsOpen, setEntrarIsOpen] = useState(false);

  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');

  {/* Fechar os modais*/ }

  const alugarClose = () => {
    setAlugarIsOpen(false);
  }

  const anunciarClose = () => {
    setAnunciarIsOpen(false);
  }

  const entrarClose = () => {
    setEntrarIsOpen(false);
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='barra-nav' component="nav" color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/'><img className="img-logo" src="./logologo.svg" alt="Logo UniRent" /></Link>
          </Typography>
          <Box >
            <ButtonAppBar setAlugarIsOpen={setAlugarIsOpen} setAnunciarIsOpen={setAnunciarIsOpen} setEntrarIsOpen={setEntrarIsOpen} />

            <Modal
              isOpen={alugarIsOpen}
              onRequestClose={alugarClose}
              contentLabel='Alugar'
              overlayClassName='modal-overlay'
              className='modal-content-alugar'
            >
              <h2>Alugar</h2>
              <button className='button-fechar' onClick={alugarClose}>x</button>
            </Modal>

            <Modal
              isOpen={anunciarIsOpen}
              onRequestClose={anunciarClose}
              contentLabel='Alugar'
              overlayClassName='modal-overlay'
              className='modal-content-anunciar'
            >
              <h2>Anunciar</h2>
              <button className='button-fechar' onClick={anunciarClose}>x</button>
            </Modal>

            <Modal
              isOpen={entrarIsOpen}
              onRequestClose={entrarClose}
              contentLabel='Alugar'
              overlayClassName='modal-overlay'
              className='modal-content-entrar'
            >
                
                <div>
                  <button className='button-fechar' onClick={entrarClose}>x</button>
                </div>
                <div>
                <img className="img-logo" src="./logologo.svg" alt="Logo UniRent" />
                </div>
                <div>
                  <FormEntrar setEmail={setEmail} setSenha={setSenha}/>
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
