import '../../style/menu/menu-style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import PonyInfoList from '../molecules/list/PonyInfoList';
import SettingsList from '../molecules/list/settingsList/SettingsList';
import CoolButton from '../atoms/button/CoolButton'
const CONFIG = require('../../config/roots.json');


function Menu() {
    const navigate = useNavigate();
    const { id } = useParams();

    const textD = useRef(null);

    const [firstAnswer, setFirstAnswer] = useState({});
    const [secondAnswer, setSecondAnswer] = useState({});

    const [popularity, setPopularity] = useState(0);
    const [knowledge, setKnowledge] = useState(0);
    const [fun, setFun] = useState(0);


    useEffect(() => {
          
        fetch(CONFIG.url + '/game?storyId=' + id, {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                let responseCopy = response;
                if (responseCopy.ok === false) {
                    if (response.status === 403 || response.status === 401) {
                        navigate('/');
                    } else {
                        Promise.reject(responseCopy);
                    }
                }
                return responseCopy.json();
            })
            .then(gameStatusDto => {
                drawGame(gameStatusDto);
            })
            .catch(function (error) { console.error(error) });
    }, []);

    const updateGame = (option) => {

        var body = JSON.stringify({
            "storyId": id,
            "answerIndex": option,
        });

        fetch(CONFIG.url + '/game', {
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
                if (responseCopy.ok === false) {
                    if (response.status === 403 || response.status === 401) {
                        navigate('/');
                    } else {
                        Promise.reject(responseCopy);
                    }
                }
                return responseCopy.json();
            })
            .then(gameStatusDto => {
                drawGame(gameStatusDto);
            })
            .catch(function (error) { console.error("error") });
    };

    const drawGame = (gameStatusDto) => {

        if(gameStatusDto.hasEnded == true){
            navigate("/historyResume")
        }

        const responseText = gameStatusDto.question;
        const responseFirstAnswer = gameStatusDto.answers.filter(ans => ans.index === 0)[0];
        const responseSecondAnswer = gameStatusDto.answers.filter(ans => ans.index === 1)[0];

        setFirstAnswer(responseFirstAnswer);
        setSecondAnswer(responseSecondAnswer);
        setFun(gameStatusDto.stats.fun);
        setKnowledge(gameStatusDto.stats.knowledge);
        setPopularity(gameStatusDto.stats.popularity);

        const container = textD.current;
        container.innerHTML = "";
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
            { speed: speeds.fast, string: responseText }, //add classes: , classes: ["green"]
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
    }

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
        <div id="menu-container">
            <div>
                <PonyInfoList />
                <div className="container" id="container">
                    <div ref={textD} className="text">
                    </div>
                    <CoolButton
                        nameOne={firstAnswer.text}
                        nameTwo={secondAnswer.text}
                        clickOne={() => updateGame(0)}
                        clickTwo={() => updateGame(1)}></CoolButton>
                </div>
                <SettingsList id="menuLive" popularity={popularity} fun={fun} knowledge={knowledge} />
            </div>
        </div>
    );
}

export default Menu;