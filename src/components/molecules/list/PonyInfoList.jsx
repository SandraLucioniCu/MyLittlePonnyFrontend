import React, { useState } from 'react';
import Image from "../../img/Image";
import '../../../style/menu/ponyInfoList.css';
import NavList from "./NavList";
import Modal from "../modal/Modal";

function PonyInfoList(){

    const[isOpen, setIsOpen] = useState(false);
    const[modalPonyName, setModalPonyName] = useState('');
    const[modalPonyDescription, setModalPonyDescription] = useState('');

    const openModal = (ponyName, ponyDescription) => {
        setModalPonyDescription(ponyDescription);
        setModalPonyName(ponyName);
        setIsOpen(true);
    }

    return(

        <div className='menu'> 
            <Modal open={isOpen} ponyName={modalPonyName} ponyDescription={modalPonyDescription} onClose={() => setIsOpen(false)}></Modal>
            <NavList/>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button" onClick={() => openModal('Rainbow Dash', 'Rainbow Dash, es una poni pegaso. Su trabajo es despejar el cielo de Ponyville. Ella es una fanática de Los Wonderbolts, y su gran sueño es pertenecer a ese grupo de élite. La Princesa Celestia, la declaran la mejor voladora de toda Equestria ya que muestra un gran valor por la lealtad, pues por lo cual demuestra optimismo. Representa el Elemento de la Lealtad.')}>
                        <span>Rainbow Dash</span>
                        <Image src="../../../../img/characters/rainbowDash/rd-side.png"/>
                    </button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button" onClick={() => openModal('Twilight', 'La Princesa Twilight Sparkle representa el Elemento de la Magia. Es muy amable, aprende de sus amigas y de los errores que comete. Es un poco terca en cuanto a supersticiones, pero cuando está con Pinkie Pie y descubre su Pinkie sentido, a pesar de ser imposible describir por qué acertaba siempre, termina entendiendo que hay cosas que simplemente no se pueden explicar.')}>
                        <span>Twilight</span>
                        <Image src="../../../../img/characters/twilightSparkle/t-side.png"/>
                    </button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button" onClick={() => openModal('Futtershy', 'Fluttershy es una poni pegaso. Ella vive en una pequeña cabaña cerca del Bosque Everfree y es una cuidadora y amante de los animales, el más prominente de sus cargos siendo Angel el conejo. Ella representa el elemento de la Bondad/Amabilidad. A veces Fluttershy, aunque sea una poni pasiva, se enoja y libera su odio de una mala forma en la que hace que otros ponis se asusten. Los Bronies y Pegasisters llaman a Fluttershy en este estado "Flutterrage".  ') }>
                        <span>Futtershy</span>
                        <Image src="../../../../img/characters/fluttershy/f-chill.png"/>
                    </button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button" onClick={() => openModal('Pinkie Pie', 'Pinkie Pie es una poni terrestre que se aloja en el pueblo de Ponyville y representa el Elemento de la Risa. Ella es una poni muy exuberante, entusiasta, traviesa, feliz, chistosa, divertida, habladora, alegre, extravagante y risueña. Compone y canta muchas canciones. Pinkie Pie es muy alegre y adora las fiestas, su Cutie Mark son tres globos, dos azules y uno amarillo, que simbolizan su pasión por está, ella suele verle el lado positivo a las cosas muchas veces.') }>
                        <span>Pinkie Pie</span>
                        <Image src="../../../../img/characters/pinkiePie/pp-tail.png"/>
                    </button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button" onClick={() => openModal('Apple Jack', 'Applejack es una poni terrestre. Vive y trabaja en Sweet Apple Acres con su abuela, su hermano mayor Big Macintosh, su hermana pequeña Apple Bloom, y su perra Winona. Ella representa el Elemento de la Honestidad. Applejack es confiable y leal, siempre dispuesta a ayudar a alguien que la necesita, pero es muy difícil que ella acepte que necesita ayuda. Ella trabaja en Sweet Apple Acres principalmente como recolectora de manzanas, aunque también, de vez en cuando recolecta las zanahorias y el maíz de la granja. ') }>
                        <span>Apple Jack</span>
                        <Image src="../../../../img/characters/appleJack/ap-side.png"/>
                    </button>
                </li>
            </ul>
            <ul className="menu-list">
                <li className="menu-item">
                    <button className="menu-button" onClick={() => openModal('Rarity', 'Rarity es una poni unicornio. Su sueño es vivir en Canterlot. Destaca por su belleza, su pelo brillante y sus extraordinarios rizos de color morado. Ella representa el Elemento de la Generosidad. A diferencia de Twilight Sparkle, su magia se utiliza para las actividades relacionadas con su talento especial y para tareas básicas como sostener y transportar objetos o la búsqueda de piedras preciosas. El vocabulario de Rarity es formal, y está propensa a utilizar palabras complejas y más sofisticadas.') }>
                        <span>Rarity</span>
                        <Image src="../../../../img/characters/Rarity/r-side.png"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}


export default PonyInfoList;

