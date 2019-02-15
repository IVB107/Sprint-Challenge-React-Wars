import React from 'react';
import CardImage from './CardImage';
import CardInfo from './CardInfo';
import './CardStyles.css';

const Card = props => {

    return (
        <div className="card-container">
            <h2>{props.char.name}</h2>
            <div className="data-container">
                <CardImage />
                <CardInfo />
            </div>
        </div>
    )
}

export default Card;