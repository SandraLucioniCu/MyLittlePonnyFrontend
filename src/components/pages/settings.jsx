// eslint-disable-next-line no-undef
import PonyvilleMap from '../molecules/map/PonyvilleMap';
import React from "react";
import '../../style/map/map-style.css';


function Settings() {


    return(
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://maps-sdk.trimblemaps.com/v3/trimblemaps-3.5.0.css" />
        <style 
            dangerouslySetInnerHTML={{__html: "\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n" }} />

            <form action="@{/menu/actualizado}" method="post">
                        <button className="context-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-left-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z"/>
                            </svg>
                        </button>
                        <h1>Tus datos:</h1>
                        <div className="characterSelector-container">

                            <ul>
                                <li>
                                    <input type="checkbox" id="myCheckbox1"/>
                                    <label for="myCheckbox1"><img
                                            th:src="@{/img/profiles/profileOne.png}" th:value="${photoProfile}"/></label>
                                </li>
                                <li>
                                    <input type="checkbox" id="myCheckbox2"/>
                                    <label for="myCheckbox2"><img
                                            th:src="@{/img/profiles/profileThree.png}" th:value="${photoProfile}"/></label>
                                </li>
                                <li>
                                    <input type="checkbox" id="myCheckbox3"/>
                                    <label for="myCheckbox3"><img
                                            th:src="@{/img/profiles/profileFour.png}" th:value="${photoProfile}"/></label>
                                </li>
                                <li>
                                    <input type="checkbox" id="myCheckbox4"/>
                                    <label for="myCheckbox4"><img
                                            th:src="@{/img/profiles/profileTwo.png}" th:value="${photoProfile}"/></label>
                                </li>
                            </ul>
                        </div>
                        <label>Nombre: </label>
                        <input name="name" type="text" placeholder="Username" th:value="${name}"/>
                        <label>Email: </label>
                        <input name="email" type="email" placeholder="Email" th:value="${email}"/>
                        <label>Contraseña: </label>
                        <input name="password" type="password" placeholder="Password" th:value="${password}"/>

                        <label>Pregunta:</label>
                        <textarea name="question"></textarea>

                        <label>Respuesta 1:</label>
                        <textarea name="answerOnes"></textarea>

                        <label>Respuesta 2:</label>
                        <textarea name="answerTwo"></textarea>

                        <label>Respuesta 3:</label>
                        <textarea name="answerThree"></textarea>
                        <div>
                            <button name="button" type="submit" className="sendButton" onclick="myFunction()">Guardar</button>
                        </div>

                    </form>

        </div>
    );

}

export default Map;