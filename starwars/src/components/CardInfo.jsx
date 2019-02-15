import React from 'react';
import './CardStyles.css';

const CardInfo = props => {

    return (
        <div className="info-container">
            <ul>
                <li>Species: {props.info.species}</li>
                <li>Homeworld: {props.info.homeworld}</li>
                <li>Birth Year: {props.info.birth_year}</li>
                <li>Height: {props.info.height}</li>
                <li>Mass: {props.info.mass}</li>
            </ul>
        </div>
    )
}

export default CardInfo;