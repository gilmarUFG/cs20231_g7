import React from 'react'
import "./ButtonAppBar.css"

const ButtonAppBar = ({ setAlugarIsOpen, setAnunciarIsOpen, setEntrarIsOpen }) => {

    {/* Abrir os modais*/ }
    const alugarOpen = () => {
        setAlugarIsOpen(true);
        setAnunciarIsOpen(false);
        setEntrarIsOpen(false);
    }

    const anunciarOpen = () => {
        setAnunciarIsOpen(true);
        setEntrarIsOpen(false);
        setAlugarIsOpen(false);
    }

    const entrarOpen = () => {
        setEntrarIsOpen(true);
        setAlugarIsOpen(false);
        setAnunciarIsOpen(false);
    }



    return (
        <div >
            <button onClick={alugarOpen} className="container-1">
                Alugar
            </button>
            <button onClick={anunciarOpen} className="container-2">
                Anunciar
            </button>
            <button onClick={entrarOpen} className="container-3">
                ENTRAR
            </button>
        </div>
    )
}

export default ButtonAppBar