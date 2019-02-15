import React from 'react';
import Card from './Card';
import './CardStyles.css';

const CardList = props => {

    return (
        <div className="card-list">
            {props.charList.map(char => {
                return (
                    <Card 
                        char={char}
                        key={char.created}
                    />
                );
            })}
        </div>
    )
}

export default CardList;