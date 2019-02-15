import React from 'react';
import './CardStyles.css';

const Card = props => {

    return (
        <div>
            <h2>{props.char.name}</h2>
            <div>
                <CardImage />
                <CardInfo />
            </div>
        </div>
    )
}

export default Card;