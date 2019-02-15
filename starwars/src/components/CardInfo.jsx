import React from 'react';
import './CardStyles.css';

const CardInfo = props => {

    return (
        <div className="info-container">
            <ul>
                <li>Species:</li>
                <li>Homeworld:</li>
                <li>Birth Year:</li>
                <li>Height:</li>
                <li>Mass:</li>
            </ul>
        </div>
    )
}

export default CardInfo;