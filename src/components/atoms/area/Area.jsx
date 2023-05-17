import './area.css';

function Area(props){

    function mouseOver() {
        document.getElementById("desc").innerHTML = props.text;
    }

    return (
        <area className="places" onMouseOver={mouseOver} target="_blank" alt={props.alt} title={props.title}
              coords={props.coords} shape="circle"/>
    );
}

export default Area;