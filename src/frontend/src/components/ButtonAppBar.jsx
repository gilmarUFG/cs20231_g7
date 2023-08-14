import React from 'react'
import { Link } from 'react-router-dom'
import "./ButtonAppBar.css"

const ButtonAppBar = ({ setCadastrarIsOpen, setEntrarIsOpen }) => {

    {/* Abrir os modais*/ }

    const handleOpen = () => {
        setEntrarIsOpen(false);
        setCadastrarIsOpen(false);
    }

    const entrarOpen = () => {
        setEntrarIsOpen(true);
        setCadastrarIsOpen(false);

    }



    return (
        <div >
            <Link to="/alugar" onClick={handleOpen}><button className='container-1'>Alugar</button></Link>
            <Link to="/anunciar" onClick={handleOpen}><button className="container-2">Anunciar</button></Link>
            <button onClick={entrarOpen} className="container-3">ENTRAR</button>
        </div>
    )
}

export default ButtonAppBar