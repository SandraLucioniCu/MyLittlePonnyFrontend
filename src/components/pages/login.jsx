// eslint-disable-next-line no-undef
import Button from "../atoms/button/Button";
import RegisterForm from "../molecules/register-form/RegisterForm";
import LoginForm from "../molecules/login-form/LoginForm";
import PubSub from "../atoms/pubsub/Pubsub";
import Alert from "../atoms/alert/Alert";
import '../../style/login/login-style.css';
import '../../js/event';
const CONFIG = require('../../config/roots.json');

function Login(){

    function toggleContainerClass(){
        const container = document.getElementById('container');
        container.classList.add('right-panel-active');
    }

    function toggleContainerClassTwo(){
        const container = document.getElementById('container');
        container.classList.remove('right-panel-active')
    }

    function callGreetings(){                  
        fetch(CONFIG.url + '/game', {
            method: "GET",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
              }
        })
            .then(response => {
                let responseCopy = response;
                console.log(responseCopy);
                return responseCopy.json();
            })
            .then(data => console.log(data));
    }

        return (
            <div id="login-container">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <Alert></Alert>
                <div className="container" id="container">
                    <RegisterForm />
                    <div className="form-container sign-in-container">
                        <LoginForm/>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>¡Bienvenide!</h1>
                                <p className="msg">
                                    ¿Ya tienes una cuenta?<br/>¡Entra!
                                </p>
                                <Button id="signIn" name={"Empezar"} click={toggleContainerClassTwo}/>
                                <Button id="saludo" name={"Saludo"} click={callGreetings}/>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>¡Estás de vuelta!</h1>
                                <p className="msg">¿No tienes cuenta?<br />¿Quieres jugar?</p>
                                <Button id="signUp" name={"Registrarte"} click={toggleContainerClass}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}


export default Login;