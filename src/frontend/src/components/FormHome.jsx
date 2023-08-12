import React from 'react'
import { useState } from 'react';

import './FormHome.css'

const FormHome = () => {
    const [pesquisar, setPesquisar] = useState('');
    const [tipoMoradia, setTipoMoradia] = useState('');

    const handleChange = (event) => {
        setTipoMoradia(event.target.value);
    };

    const handleSubmit =  (event) => {

        event.preventDefault();

        setPesquisar('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='pesquisa-select-submit'>
                    <div>
                        <label>
                            <input className='pesquisa-style' type="text" value={pesquisar} name='name' placeholder='Onde deseja morar?' onChange={(event) => (setPesquisar(event.target.value))} />
                        </label>
                    </div>
                    <div>
                        <select className='select-style' onChange={handleChange} value={tipoMoradia} placeholder='Tipo de Aluguel'>
                            <option value="">Tipo de Aluguel</option>
                            <option value="Apartamento">Apartamento</option>
                            <option value="Casa">Casa</option>
                            <option value="Republica">República</option>
                        </select>
                        <input className='submit-style' type="submit" value='Pesquisar' />
                    </div>
                </div>


            </form>
        </div>
    )
}

export default FormHome