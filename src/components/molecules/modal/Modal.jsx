import React from 'react';
import './modal.css'

function Modal({ open, ponyName, ponyDescription, onClose}){
    
    if(!open) return null;
    
    return(
        <>
            <div className='overlay-style'/>
            <div className="modal-box" >
                <h1>{ ponyName }</h1>
                <p className='modal-text'>{ponyDescription}</p>
                <button className='modal-button'onClick={onClose}>Cerrar</button>
            </div>
        </>
    )
}

export default Modal;