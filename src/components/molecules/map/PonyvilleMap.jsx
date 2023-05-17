import './map.css.css';
import Area from "../area/Area";

function PonyvilleMap(){
    return (
        <map className="image-map">
            <Area alt="Granero" title="Granero" coords="-80, 39, 44"/>
            <Area alt="Pastelería" title="Pasteleria" coords="-79, 40, 44"/>
            <Area alt="Sastrería" title="Sastreria" coords="-76, 39, 44"/>
            <Area alt="Palacio" title="Palacio" coords="-76, 41, 44"/>
            <Area alt="Biblioteca" title="Biblioteca" coords="-77, 40, 44"/>
        </map>

    );
}

export default PonyvilleMap;