import React, {useEffect, useState} from 'react';
import './NgoCard.scss';

const NgoCard = () => {
    return(
        <div className="NgoCard">
            <div className="Card">
                <div className="Info">
                    <h1 className="Name">Pawsome</h1>
                    <h3 className="address">LXN road,Agartala,Tripura</h3>
                </div>
                <p className="ViewButton">view more</p>
            </div>
        </div>
    )
}

export default NgoCard;