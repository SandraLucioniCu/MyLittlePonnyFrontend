import './ponyList.css';
import PonySelector from "../ponySelector/ponySelector";

function PonyList(props){
    return (
        <div className="characterSelector-container" >
            <ul>
                <PonySelector id="myCheckbox1" image={'../../img/profiles/profileOne.png'} change= {() => {props.selectPony('profileOne.png')}}/>
                <PonySelector id="myCheckbox2" image={'../../img/profiles/profileTwo.png'} change= {() => {props.selectPony('profileTwo.png')}}/>
                <PonySelector id="myCheckbox3" image={'../../img/profiles/profileThree.png'} change= {() => {props.selectPony('profileThree.png')}}/>
                <PonySelector id="myCheckbox4" image={'../../img/profiles/profileFour.png'} change= {() => {props.selectPony('profileFour.png')}}/>
            </ul>
        </div>
    );
}

export default PonyList;