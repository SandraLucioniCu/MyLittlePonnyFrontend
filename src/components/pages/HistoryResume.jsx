// eslint-disable-next-line no-undef
import '../../style/historyResume/historyResumeStyle.css';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuListSvg from '../molecules/svg/MenuListSvg';
import SettingsList from '../molecules/list/settingsList/SettingsList';
import InfoList from '../molecules/list/infoList/InfoList';

const CONFIG = require('../../config/roots.json');


function HistoryResume() {
    const navigate = useNavigate();

    const [gameHistoryMap, setGameHistoryMap] = useState({});
    const [gameHistoryList, setGameHistoryList] = useState([]);
    const [currentGame, setCurrentGame] = useState({});
    const [decisions, setDecisions] = useState([]);
    const [currentDecision, setCurrentDecision] = useState({});
    const [decisionIndex, setDecisionIndex] = useState(0);

    useEffect(() => {
          
        fetch(CONFIG.url + '/history', {
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
            .then(gameHistoryDto => {
                let gameHistoryByIndex = new Map();
                for(let i = 0; i < gameHistoryDto.finishedGames.length; i++)
                {
                    const game = gameHistoryDto.finishedGames[i];
                    gameHistoryByIndex.set(i, game);
                }
                setGameHistoryList(gameHistoryDto.finishedGames);
                setGameHistoryMap(gameHistoryByIndex);
                let currentGame = gameHistoryByIndex.entries().next().value[1];
                setCurrentGame(currentGame);
                setDecisions(currentGame.decisions);
                setCurrentDecision(currentGame.decisions[0]);
                setDecisionIndex(0);
            })
            .catch(function (error) { console.error(error) });
    }, []);

    const goNextDecision = () => {
            if(decisionIndex >= decisions.length - 1)
            {
                return ;
            }

            const nextDecisionIndex = decisionIndex + 1;
            setCurrentDecision(decisions[nextDecisionIndex]);
            setDecisionIndex(nextDecisionIndex);
    }

    const goBackDecision = () => {
        if(decisionIndex >= decisions.length - 1)
        {
            return ;
        }

        const backDecisionIndex = decisionIndex - 1;
        setCurrentDecision(decisions[backDecisionIndex]);
        setDecisionIndex(backDecisionIndex);
}

    const changeCurrentGame = (index) => {
        if(gameHistoryMap.has(index)){
            const currentGame = gameHistoryMap.get(index);
            setCurrentGame(currentGame);
            setDecisions(currentGame.decisions);
            setCurrentDecision(currentGame.decisions[0]);
            setDecisionIndex(0);
        }
    }

    
    return(
        <div id="resume-container">
            
            {gameHistoryList.length > 0 &&
            <div className="left-list">
                <InfoList games={gameHistoryList} changeGame={changeCurrentGame}/>
            </div>
            }

            <div id="resume-box">
                <button id='go-back-button' className="context-button" onClick ={ () => navigate('/selectGame')}>
                    <MenuListSvg className="bi bi-arrow-up-left-circle-fill"
                        vectors={[
                            {
                                fillRule: "evenodd",
                                vector: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z"
                            }
                        ]}
                    />
                </button>
                <div id="text-container">
                    
                {decisionIndex < decisions.length -1  &&   
                    <div>
                        <h1 className='title-from-resume'>Resumen:</h1>
                        <div className="resume-text">
                            {currentDecision.question}
                        </div>

                        {decisionIndex > 0  && 
                            <div className="button-box2">
                                <button className="back-button" onClick={() => goBackDecision()}>
                                    <MenuListSvg className="bi bi-chevron-left"
                                        vectors={[
                                            {
                                                fillRule: "evenodd",
                                                vector: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                            }
                                        ]}
                                    />
                                </button>
                            </div>
                        }

                        {decisionIndex < decisions.length -1  && 
                            <div className="button-box">
                                <button className="next-button" onClick={() => goNextDecision()}>
                                    <MenuListSvg className="bi bi-chevron-right"
                                        vectors={[
                                            {
                                                fillRule: "evenodd",
                                                vector: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            }
                                        ]}
                                    />
                                </button>
                            </div>
                        }

                        <div id="answer" className="resume-answer-text">
                            {currentDecision.answer}
                        </div>
                    </div>
                }

                {gameHistoryList.length <= 0 &&    
                    <div>
                        <h1 className='title-from-resume'>Termina tu historia</h1>
                        <div className="resume-text">
                            <span className='alternative-text'>Termina una de las historias para poder ver el resumen.</span>
                        </div>
                    </div>
                }

                </div>
            </div>
            { currentDecision.statsFrom !== undefined &&            
            <div className='settings-box'>
                <h1>Antes</h1>
                <SettingsList id="menuLive2"
                    popularity={currentDecision.statsFrom.popularity}
                    fun={currentDecision.statsFrom.fun}
                    knowledge={currentDecision.statsFrom.knowledge} />
                
                <h1>Después</h1>
                <SettingsList id="menuLive3"
                    popularity={currentDecision.statsTo.popularity}
                    fun={currentDecision.statsTo.fun}
                    knowledge={currentDecision.statsTo.knowledge} />
            </div>
            }
        </div>
    );

}

export default HistoryResume;