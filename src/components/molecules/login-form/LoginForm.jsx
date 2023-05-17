import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import '../../../style/login/login-style.css';
const CONFIG = require('../../../config/roots.json');


function LoginForm(props){
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    return(
        <form action="#">
                <h1>Iniciar Sesión</h1>
                <div className="register-container">
                    <img src="../../img/profiles/general.jpg" />
                </div>
                <Input name="email" type="email" holder="example@example.com" change={e => setEmail(e.target.value)}/>
                <Input name="password" type="password" holder="********" change={e => setPassword(e.target.value)}/>
                <div>
                    <Button class="button-default" name="Entrar" type="submit" className="button"click ={ () => doLogin(email, password, navigate)}/>
                </div>
            </form>
    );
}

function doLogin(email, password, navigate){
    const loginForm = {
        user: email,
        password: password
    };

    const body = JSON.stringify(loginForm);

    console.log(body);

    fetch(CONFIG.url + '/login/enter', {
        method: "POST",
        mode: 'cors',
        credentials: 'include',
        body: body,
        headers: {
            "Content-Type": "application/json",
          },
    })
        .then(response => {
            let responseCopy = response;
            if(responseCopy.ok === false){
                console.log(responseCopy.status);
                alert("Email o contraseña incorrecta ");
            }else{
                navigate('/menu');
                console.log("Done");
            }
        })
        .catch(function(error) {console.error("error")});
}


export default LoginForm;