import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonAppBar from "./components/ButtonAppBar";
import FormEntrar from "./components/FormEntrar";
import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";

import Logo from "../public/logologo.svg";

import FormCadastro from "./components/FormCadastro";

Modal.setAppElement("#root");

function App() {
  const [entrarIsOpen, setEntrarIsOpen] = useState(false);
  const [cadastrarIsOpen, setCadastrarIsOpen] = useState(false);
  {
    /* Fechar os modais*/
  }

  const entrarClose = () => {
    setEntrarIsOpen(false);
  };

  const entrarOpen = () => {
    setEntrarIsOpen(true);
    setCadastrarIsOpen(false);
  };

  const cadastrarClose = () => {
    setCadastrarIsOpen(false);
  };

  const cadastrarOpen = () => {
    setCadastrarIsOpen(true);
    setEntrarIsOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="barra-nav" component="nav" color="default">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" onClick={entrarClose}>
              <img className="img-logo" src={Logo} alt="Logo UniRent" />
            </Link>
          </Typography>
          <Box>
            <ButtonAppBar
              setCadastrarIsOpen={setCadastrarIsOpen}
              setEntrarIsOpen={setEntrarIsOpen}
            />

            <Modal
              isOpen={entrarIsOpen}
              onRequestClose={entrarClose}
              contentLabel="Alugar"
              overlayClassName="modal-overlay"
              className="modal-content-entrar"
            >
              <div className="modal-content">
                <button className="button-fechar" onClick={entrarClose}>
                  {" "}
                  x{" "}
                </button>
                <div className="div-modal-entrar">
                  <img className="img-logo" src={Logo} alt="Logo UniRent" />
                  <FormEntrar entrarClose={entrarClose} />
                  <h5>Ou</h5>
                  <div>
                    <Link onClick={cadastrarOpen}>Cadastre-se aqui</Link>
                  </div>
                </div>
              </div>
            </Modal>
            <Modal
              isOpen={cadastrarIsOpen}
              onRequestClose={cadastrarClose}
              contentLabel="Cadastro"
              overlayClassName="modal-overlay"
              className="modal-content-cadastrar"
            >
              <div>
                <button className="button-fechar" onClick={cadastrarClose}>
                  {" "}
                  x{" "}
                </button>
              </div>
              <div>
                <div className="div-modal-entrar">
                  <div>
                    <img className="img-logo" src={Logo} alt="Logo UniRent" />
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
