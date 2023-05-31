import React, { useState, useEffect } from 'react';
import './alert.css'

function Alert() {

    const [alerts, setAlerts] = useState([]);

    const handleClose = (e) => {
        e.preventDefault();
        setAlerts([]);
    }

    useEffect(() => {
        window.bus.subscribe("alert", (e) => {
          const { type, message } = e;
          setAlerts([ { type, message }]);
        });
      }, []);


    return (
        <div className="fixed z-20 bottom-3 w-full max-w-3xl flex flex-col justify-center align-center left-1/2 transform -translate-x-1/2">
          {alerts &&
            alerts.map((alert) => (
                <div className={`alert ${alert.type} show`}>
                <span className={`closebtn`} onClick={handleClose}>
                    &times;
                </span>
                {alert.message}
            </div>
            ))}
        </div>
      );
};

export default Alert;

// https://huntertrammell.dev/blog/how-to-create-a-dynamic-alert-component-in-react