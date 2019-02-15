import React from 'react';
import './CardStyles.css';

const CardImage = props => {

    return (
        <div className="image-container">
            <img src={`${props.img}`} alt=""/>
        </div>
    )
}

export default CardImage;