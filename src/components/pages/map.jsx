// eslint-disable-next-line no-undef
import '../../style/map/map-style.css';
import React from 'react';
import PonyvilleMap from '../molecules/map/PonyvilleMap';
import MenuListSvg from '../molecules/svg/MenuListSvg';

import { useNavigate } from 'react-router-dom';



function Map(){

    const navigate = useNavigate(); 

    return(
        <div id='map-container'>
            <div className="container">
                <button id='go-back-button' className="context-button" onClick ={ () => navigate('/menu/:id')}>
                    <MenuListSvg className="bi bi-arrow-up-left-circle-fill"
                        vectors={[
                            {
                                fillRule: "evenodd",
                                vector: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z"
                            }
                        ]}
                    />
                </button>     
                <div className="map-box">
                    <PonyvilleMap/>
                </div>
                <div className="menu">
                    <p id="desc">Pasa el ratón por la imagen para saber los lugares que hay.</p>
                </div>
                
            </div>
        </div>
    );
 
        
}

export default Map;


