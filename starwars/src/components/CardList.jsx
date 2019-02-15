import React from 'react';
import Card from './Card';
import './CardStyles.css';

const CardList = props => {

    return (
        <div className="card-list">
            {props.charList.map(char => {
                <Card 
                    char={char}
                />
            })}
        </div>
    )
}

export default CardList;