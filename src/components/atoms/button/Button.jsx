import './button.css';

function Button(props){
    return (
        <div><button id={props.id} onClick={props.click} className={props.class}>{props.name}</button></div>
    );
}

export default Button;