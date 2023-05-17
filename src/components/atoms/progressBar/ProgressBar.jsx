import React from "react";
import '../../../style/menu/progressBar.css'

const ProgressBar = (props) => {

    const { bgcolor, completed, name } = props;

    const filler = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#DAF7A6',
        borderRadius: 'inherit',
        textAlign: 'right'
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