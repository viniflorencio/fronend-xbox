import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";

export default function Login() {



    const handleSubmit = async event => {
        event.preventDefault();
        const mail = event.target.mail.value;
        const senha = event.target.senha.value;

        const payload = {
            mail,
            senha,
        };

    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);
    const body = await response.json();

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>EMAIL</p>
                <input type="text" name='email'></input>
                <p>SENHA</p>
                <input type="password" name='senha'></input>
                <div className='login-buttons'>
                    <Link to= '/'> <button type="submit">Login</button></Link>
                    <Link to='/registro'><button type="submit">criar conta</button></Link>
                </div>
            </form>
            
        </div>
    )
}
