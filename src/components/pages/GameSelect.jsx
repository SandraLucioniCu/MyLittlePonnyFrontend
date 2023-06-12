// eslint-disable-next-line no-undef
import React from 'react';
import '../../style/selectGame/selectGame.css';
import Carousel from '../molecules/caroussel/Carousel';

function GameSelect() {

    return(
        <div id="select-container">
            <div className="container" id="container">
                <div id="carrousel-container">
                    <h1 className='title-from-select'>My Little Pony Game</h1>
                        <p className='text-from-select'>Selecciona una nueva historia:</p>
                        <Carousel/>
                </div>
            </div>
        </div>
    );

}

export default GameSelect;