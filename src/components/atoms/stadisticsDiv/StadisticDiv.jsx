import '../../../style/menu/stadisticDiv.css';

function StadisticDiv(props) {
    return (
        <div className="skill-percent"> 
            <div className="skill-name" data-percent={props.text}>
            </div>
        </div>
    );
}

export default StadisticDiv;