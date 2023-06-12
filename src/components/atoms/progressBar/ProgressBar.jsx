import React from "react";
import '../../../style/menu/progressBar.css'

const ProgressBar = (props) => {

    const {completed, name } = props;

    const filler = {
        height: '32px',
        width: `${completed}%`,
        backgroundColor: `${props.backgroundColor}`,
        borderRadius: 'inherit',
        textAlign: 'center'
    }
  
    return (
    <div className="bar-container">
      <div style={filler}>
        <span className="bar-label">{name}</span>
      </div>
    </div>
  );
}

export default ProgressBar;