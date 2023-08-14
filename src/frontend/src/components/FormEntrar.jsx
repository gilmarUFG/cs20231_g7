
import './FormEntrar.css';
import {useState} from 'react'

export default function FormEntrar({ entrarClose }) {

    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();





        entrarClose();
    }

    return (
        <>
            <form className='form-entrar' onSubmit={handleSubmit}>
                <label className='form-entrar'>
                    <span> E-mail </span>
                    <input
                        type="email"
                        name='name'
                        onChange={(event) => (setEmail(event.target.value))}
                    />
                </label>
                <label className='form-entrar'>
                    <span> Senha </span>
                    <input
                        type="password"
                        name='password'
                        onChange={(event) => (setSenha(event.target.value))}
                    />
                </label>
                <input type="submit" value="Entrar" />
            </form>
        </>
    );
}

