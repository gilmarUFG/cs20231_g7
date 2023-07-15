import React from 'react'
import "./ButtonAppBar.css"

const ButtonAppBar = () => {

   const handleAlugar = () => {

   }
   const handleAnunciar = () => {
    
   }
   const handleEntrar = () => {
    
   }

    return (
        <div >

            <button onClick={handleAlugar} className="container-1">
                Alugar
            </button>
            <button onClick={handleAnunciar} className="container-2">
                Anunciar
            </button>
            <button onClick={handleEntrar} className="container-3">
                ENTRAR
            </button>
        </div>
    )
}

export default ButtonAppBar