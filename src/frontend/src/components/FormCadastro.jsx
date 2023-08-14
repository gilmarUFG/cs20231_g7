import React, { useState } from 'react'
import "./FormCadastro.css"

const FormCadastro = ({entrarOpen}) => {

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [telefone, setTelefone] = useState('');
    const [universidade, setUniversidade] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleUniversidade = (event) => {
        setUniversidade(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();




        entrarOpen();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="label-input">
                    <span>Nome completo</span>
                    <input
                        type="text"
                        name='nomeCompleto'
                        onChange={(event) => (setNomeCompleto(event.target.value))}
                        value={nomeCompleto}
                    />
                </label>
                <label className="label-input">
                    <span>Telefone</span>
                    <input type="tel"
                        name="telefone"
                        onChange={(event) => (setTelefone(event.target.value))}
                        placeholder='(XX) X XXXX-XXXX'
                        value={telefone}
                        required />
                </label>
                <label className="label-input">
                    <span>Universidade (opcional)</span>
                    <select onChange={handleUniversidade} value={universidade} placeholder='Selecione'>
                        <option value=""> Selecione </option>
                        <option value="UFG">Universidade Federal de Goiás</option>
                        <option value="PUC">PUC - Campus IV</option>
                    </select>
                </label>
                <label className="label-input">
                    <span>E-mail</span>
                    <input
                        type="email"
                        name='email'
                        onChange={(event) => (setEmail(event.target.value))}
                        value={email}
                    />
                </label>
                <label className='form-entrar'>
                    <span> Senha </span>
                    <input
                        type="password"
                        name='password'
                        onChange={(e) => (setSenha(e.target.value))}
                        value={senha}
                    />
                </label>
                <input type="submit" value="Cadastrar" />
            </form>
        </>
    )
}

export default FormCadastro;