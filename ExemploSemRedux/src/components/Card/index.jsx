import React from 'react';

import './style.css';

const getColor = (props) => {
    if(props.red) return "Red"
    if(props.green) return "Green"
    if(props.blue) return "Blue"
    if(props.purple) return "Purple"
    return ""
}

const Card = (props) => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <header className="Header">
                <span className="Title">{props.title}</span>
            </header>
            <div className={`Content ${getColor(props)}`}>
                {props.children}
            </div>
        </div>
    );
}

export default Card;