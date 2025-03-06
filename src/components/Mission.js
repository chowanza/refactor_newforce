import React from 'react';
import './Mission.css';


const MissionComponent = (props) => {
    return (
        <div className="mission-component">
            <div className="mission-text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className="mission-image">
                <img src={props.image} alt="House illustration" style={{ transform: `scale(${props.scale})` }}/>
            </div>
        </div>
    );
};

export default MissionComponent;
