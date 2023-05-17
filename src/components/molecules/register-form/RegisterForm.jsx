import React, { useState } from 'react';
import Input from "../../atoms/input/Input";
import PonyList from "../../atoms/ponyList/PonyList";
import Button from "../../atoms/button/Button";
const CONFIG = require('../../../config/roots.json');



function RegisterForm(props){

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pony, setPony] = useState('');

    return(
        <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Crea tu Cuenta</h1>
                            <div className="characterSelector-container">
                                <PonyList selectPony = { (ponyImage) => setPony(ponyImage)}/>
                            </div>
                            <Input name="nickname" type="text" holder="Nickname" change={e => setNickname(e.target.value)}/>
                            <Input name="email" type="email" holder="Email" change={e => setEmail(e.target.value)}/>
                            <Input name="password" type="password" holder="Password" change={e => setPassword(e.target.value)}/>
                            <div>
                                <Button name="Guardar" type="submit" className="button"click ={ () => doRegister(nickname, email, password, pony)}/>
                            </div>
                        </form>
                    </div>
    );
}

function doRegister(nickname, email, password, pony){
    const registerForm = {
        nickname: nickname,
        email: email,
        password: password,
        ponyImg: pony
    };

    const body = JSON.stringify(registerForm);

    console.log(body);

    fetch(CONFIG.url + '/login/register', {
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
            }else{
                console.log("Created");
            }
        })
        .catch(function(error) {console.error("error")});
}

export default RegisterForm;