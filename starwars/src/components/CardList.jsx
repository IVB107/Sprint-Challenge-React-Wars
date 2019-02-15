import React from 'react';
import Card from './Card';
import './CardStyles.css';

const CardList = props => {

    return (
        <div className="card-list">
            {props.charList.map((char, index) => {
                return (
                    <Card 
                        char={char}
                        key={char.created}
                        index={index}
                    />
                );
            })}
        </div>
    )
}

export default CardList;