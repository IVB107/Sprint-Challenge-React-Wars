import React from 'react';
import './CardStyles.css';

const CardImage = props => {

    return (
        <div className="image-container">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.index + 1}.jpg`} alt={`${props.char}`}/>
        </div>
    )
}

export default CardImage;

https://starwars-visualguide.com/assets/img/characters/1.jpg

{/* <img src={`https://starwars-visualguide.com/assets/img/characters/${props.index + 1}.jpg`} alt=""/> */}