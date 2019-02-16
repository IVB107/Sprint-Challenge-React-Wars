import React from 'react';
import './CardStyles.css';

const CardInfo = props => {

    return (
        <div className="info-container">
            <ul>
                <li><strong>Birth Year:</strong> {props.info.birth_year}</li>
                <li><strong>Gender:</strong> {props.info.gender}</li>
                <li><strong>Height:</strong> {props.info.height}</li>
                <li><strong>Mass:</strong> {props.info.mass}kg</li>
                <li><strong>Eyes:</strong> {props.info.eye_color}</li>
                <li><strong>Hair:</strong> {props.info.hair_color}</li>
            </ul>
        </div>
    )
}

export default CardInfo;