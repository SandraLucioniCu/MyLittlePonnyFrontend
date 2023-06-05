// eslint-disable-next-line no-undef
import React, { useState } from 'react';
import '../../style/selectGame/selectGame.css';
import Carousel from '../molecules/caroussel/Carousel';
import MenuListSvg from '../molecules/svg/MenuListSvg';
import { useNavigate } from 'react-router-dom';

function GameSelect() {
    const navigate = useNavigate();
    return(
        <div id="select-container">
            <div className="container" id="container">
                <div id="carrousel-container">
                    <h1 className='title-from-select'>My Little Pony Game</h1>
                        <button id='go-back-button' className="context-button" onClick ={ () => navigate('/menu')}>
                            <MenuListSvg className="bi bi-arrow-up-left-circle-fill"
                                vectors={[
                                    {
                                        fillRule: "evenodd",
                                        vector: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z"
                                    }
                                ]}
                            />
                        </button>
                        <p className='text-from-select'>Selecciona una nueva historia:</p>
                        <Carousel/>
                </div>
            </div>
        </div>
    );

}

export default GameSelect;