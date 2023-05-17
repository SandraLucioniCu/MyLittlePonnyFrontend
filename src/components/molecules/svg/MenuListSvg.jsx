import MenuPath from "../../atoms/path/MenuPath";

function MenuListSvg(props){
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className={props.className} viewBox="0 0 16 16">
            { props.vectors.map((vector) => <MenuPath vector={vector.vector} fillRule={vector.fillRule} />)}
        </svg>
    );
}

export default MenuListSvg;