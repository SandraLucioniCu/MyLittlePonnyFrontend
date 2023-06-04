import './coolButton.css';

function CoolButton(props){
    return (
        <div className='answers' onClick={props.clickOne}>
            <div className='chooseButton'>
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="button__text">{props.nameOne}</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
            </div>
            <div className='chooseButton2' onClick={props.clickTwo}>
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="button__text">{props.nameTwo}</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
            </div>
        </div>

    );
}

export default CoolButton;