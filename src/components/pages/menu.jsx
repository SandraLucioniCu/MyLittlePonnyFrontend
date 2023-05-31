import '../../style/menu/menu-style.css';
import { useEffect, useRef, useState } from 'react';
import PonyInfoList from '../molecules/list/PonyInfoList';
import SettingsList from '../molecules/list/settingsList/SettingsList';
import CoolButton from '../atoms/button/CoolButton'
const CONFIG = require('../../config/roots.json');


function Menu() {
    const textD = useRef(null);

    const [text, setText] = useState('');
    const [firstAnswer, setFirstAnswer] = useState({});
    const [secondAnswer, setSecondAnswer] = useState({});

    const [popularity, setPopularity] = useState(0);
    const [knowledge, setKnowledge] = useState(0);
    const [fun, setFun] = useState(0);

    useEffect(() => {
        fetch(CONFIG.url + '/game', {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                return response.json();
            })
            .then(gameStatusDto => {
                debugger;
                const responseText = gameStatusDto.question;
                const responseFirstAnswer = gameStatusDto.answers.filter(ans => ans.index === 0)[0];
                const responseSecondAnswer = gameStatusDto.answers.filter(ans => ans.index === 1)[0];

                setText(responseText);
                setFirstAnswer(responseFirstAnswer);
                setSecondAnswer(responseSecondAnswer);
                setFun(gameStatusDto.stats.fun);
                setKnowledge(gameStatusDto.stats.knowledge);
                setPopularity(gameStatusDto.stats.popularity);
            
                const container = textD.current;

                
                if (container.children.length >= 2) {
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
                    { speed: speeds.normal, string: responseText }, //add classes: , classes: ["green"]
                ];
        
        
                let characters = [];
                textLines.forEach((line, index) => {
                    if (index < textLines.length - 1) {
                        line.string += " "; //Add a space between lines
                    }
        
                    line.string.split("").forEach((character) => {
                        let span = document.createElement("span");
                        span.textContent = character;
                        container.appendChild(character);
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
            
            })
            .catch(function (error) { console.error(error) });

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

    return (
        <div>
            <meta charSet="UTF-8" />
            <title>Game</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"  />
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
            <style
                dangerouslySetInnerHTML={{ __html: "\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n" }} />

            <div>
                <PonyInfoList />
                <div className="container" id="container">
                    <div ref={textD} id="text" className="text">
                    </div>
                    <CoolButton nameOne={firstAnswer.text} nameTwo={secondAnswer.text}></CoolButton>
                </div>
                <SettingsList popularity={popularity} fun={fun} knowledge={knowledge}/>
            </div>

        </div>
    );
}

export default Menu;