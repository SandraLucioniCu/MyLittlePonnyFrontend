import './ponySelector.css';

function PonySelector(props){
    return (
        <li>
            <input className="inputSelector" type="checkbox" id={props.id} onChange={props.change}/>
            <label className="labelSelector" htmlFor={props.id}>
                <img src={props.image}/>
            </label>
        </li>
    );
}

export default PonySelector;