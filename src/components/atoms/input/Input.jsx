import './input.css';

function Input(props){
    return(
        <div><input type={props.type} placeholder={props.holder} onChange={props.change}/></div>
    );
}


export default Input;