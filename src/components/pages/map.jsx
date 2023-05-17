// eslint-disable-next-line no-undef
import PonyvilleMap from '../molecules/map/PonyvilleMap';
import React from "react";
import '../../style/map/map-style.css';


class Map extends React.Component{

    render(){
        return(
            <div>
                <meta charSet="UTF-8" />
                <title>Mapa</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://maps-sdk.trimblemaps.com/v3/trimblemaps-3.5.0.css" />
                <style dangerouslySetInnerHTML={{__html: "\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n" }} />

                <div className="container" id="container ">
                    <img src="../../public/img/backgrounds/ponyville.jpg" alt="Workplace" useMap="#image-map" width="100%" height="100%" />
                    <PonyvilleMap/>
                </div>
                <div className="menu">
                    <p id="desc">Pasa el ratón por la imagen para saber los lugares que hay.</p>
                </div>
            </div>
        );
    }
}

export default Map;