import './App.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImagemPredio from './components/ImagemPredio';
import SelectInput from './components/SelectInput';
import PesquisaInput from './components/PesquisaInput';
import ButtonAppBar from './components/ButtonAppBar';

const navItems = ['Alugar', 'Anunciar', 'Entrar'];

function App() {

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
            <img src="./logologo.svg" alt="Logo UniRent" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ButtonAppBar />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar>
          <ImagemPredio />
 
              <h1>Encontre imóveis próximos à faculdade</h1>
              <PesquisaInput />
          <SelectInput />
          <input className="pesquisa-input-submit" type="submit" name="Pesquisar" id="pesquisar" value="Pesquisar" />
        </Toolbar>
        
      </Box>
    </Box>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;
