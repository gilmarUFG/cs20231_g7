
import './FormEntrar.css';
import * as React from 'react';

export default function FormEntrar({ setSenha, setEmail }) {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <form className='form-entrar' onSubmit={handleSubmit}>
                <label className='form-entrar'>
                    <span> E-mail </span>
                    <input
                        type="email"
                        name='name'
                        placeholder="Digite o seu e-mail"
                        onChange={(e) => (setEmail(e.target.value))}
                    />
                </label>
                <label className='form-entrar'>
                    <span> Senha </span>
                    <input
                        type="password"
                        name='password'
                        placeholder="Digite sua senha"
                        onChange={(e) => (setSenha(e.target.value))}
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </>
    );
}

