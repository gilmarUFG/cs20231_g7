
import './FormEntrar.css';
import {useState} from 'react'

export default function FormEntrar({ entrarClose }) {

    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        api.post(
            // fazer api
        )




        entrarClose();
    }

    return (
            <form className='form-entrar' onSubmit={handleSubmit}>
                <label>
                    <span> E-mail </span>
                    <input
                        type="email"
                        name='name'
                        placeholder='Insira seu email'
                        onChange={(event) => (setEmail(event.target.value))}
                    />
                </label>
                <label>
                    <span> Senha </span>
                    <input
                        type="password"
                        name='password'
                        placeholder='Insira sua senha'
                        onChange={(event) => (setSenha(event.target.value))}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
    );
}

