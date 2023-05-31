import Image from "../../img/Image";
import '../../../style/menu/ponyInfoList.css';
import NavList from "./NavList";

function PonyInfoList(){

    return(

        <div className='menu'> 
            <NavList/>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button">
                        <span>Rainbow Dash</span>
                        <Image src="../../../../img/characters/rainbowDash/rd-side.png"/>
                    </button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button">
                        <span>Twilight</span>
                        <Image src="../../../../img/characters/twilightSparkle/t-side.png"/>
                    </button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button">
                        <span>Futtershy</span>

                        <Image src="../../../../img/characters/fluttershy/f-chill.png"/>
                    </button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button">
                        <span>Pinkie Pie</span>
                        <Image src="../../../../img/characters/pinkiePie/pp-tail.png"/>
                    </button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button">
                        <span>Apple Jack</span>
                        <Image src="../../../../img/characters/appleJack/ap-side.png"/>
                    </button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button">
                        <span>Rarity</span>
                        <Image src="../../../../img/characters/Rarity/r-side.png"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}


export default PonyInfoList;

