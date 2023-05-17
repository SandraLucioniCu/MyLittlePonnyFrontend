import '../../style/menu/menu-style.css';
import MenuListSvg from "../molecules/svg/MenuListSvg";
import Image from "../img/Image";
import StadisticDiv from "../atoms/stadisticsDiv/StadisticDiv";
import {useEffect, useRef} from 'react';
import NavList from '../molecules/list/NavList';
import PonyInfoList from '../molecules/list/PonyInfoList';
import SettingsList from '../molecules/list/settingsList/SettingsList';

function Menu() {
    const textD = useRef(null);

    useEffect(() => {
        const container = textD.current;

        if(container.children.length >= 2){
            return;
        }

        const speeds = {
            pause: 500, //Higher number = longer delay
            slow: 120,
            normal: 90,
            fast: 40,
            superFast: 10
        };

        const textLines = [
            {speed: speeds.slow, string: "Oh, hello!"},
            {speed: speeds.pause, string: "", pause: true},
            {speed: speeds.normal, string: "Have you seen my pet"},
            {speed: speeds.fast, string: "frog", classes: ["green"]},
            {speed: speeds.normal, string: "around?"}
        ];


        let characters = [];
        textLines.forEach((line, index) => {
            if (index < textLines.length - 1) {
                line.string += " "; //Add a space between lines
            }

            line.string.split("").forEach((character) => {
                let span = document.createElement("span");
                span.textContent = character;
                container.appendChild(span);
                characters.push({
                    span: span,
                    isSpace: character === " " && !line.pause,
                    delayAfter: line.speed,
                    classes: line.classes || []
                });
            });
        });

        //Kick it off

            revealOneCharacter(characters);

    }, []);

    function revealOneCharacter(list) {
        let next = list.splice(0, 1)[0];
        next.span.classList.add("revealed");
        next.classes.forEach((c) => {
            next.span.classList.add(c);
        });
        let delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

        if (list.length > 0) {
            setTimeout(function () {
                revealOneCharacter(list);
            }, delay);
        }
    }
/*
    function callGreetings(){                  
        fetch(CONFIG.url + '/login/saludo', {
            method: "GET",
            mode: 'cors'
        })
            .then(response => {
                let responseCopy = response;
                console.log(responseCopy);
                return responseCopy.json();
            })
            .then(data => console.log(data));
    }

    function callGreetings(){                  
        fetch(CONFIG.url + '/login/saludo', {
            method: "GET",
            mode: 'cors'
        })
            .then(response => {
                let responseCopy = response;
                console.log(responseCopy);
                return responseCopy.json();
            })
            .then(data => console.log(data));
    }

    function callGreetings(){                  
        fetch(CONFIG.url + '/game', {
            method: "GET",
            mode: 'cors'
        })
            .then(response => {
                let responseCopy = response;
                console.log(responseCopy);
                return responseCopy.json();
            })
            .then(data => console.log(data));
    }*/

    return (
        <div>
            <meta charSet="UTF-8"/>
            <title>Menu</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
            <style
                dangerouslySetInnerHTML={{__html: "\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n"}}/>

            <div>
                <PonyInfoList/>
                <div className="container" id="container">
                    <div ref={textD} id="text" className="text">
                        <svg className="corner" viewBox="0 0 65 62" fill="none" xmlns="http://www.w3.org/2000/svg"/>
                    </div>
                    <div className="aswersBoxes">
                        <button id="box1" className="boxes">
                            <p id="option1" text="answerOne"/>
                        </button>
                        <button id="box2" className="boxes">
                            <p id="option2" value="answerTwo"/>
                        </button>
                        <button id="box3" className="boxes">
                            <p id="option3" value="answerThree"/>
                        </button>
                    </div>
                </div>
                <SettingsList/>
            </div>
            
        </div>
    );
}

export default Menu;