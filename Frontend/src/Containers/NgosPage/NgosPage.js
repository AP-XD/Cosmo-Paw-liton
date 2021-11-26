import React, {useEffect, useState} from 'react';
import ngoDog from '../../Assets/NgoDog.png';

import NgoCard from '../../Components/NgoCard';

import './NgosPage.scss';

const NgosPage = () =>{
    return(
        <div className="NgosPage">
            <div className="Hero">
                <img className="dog" src={ngoDog} alt="Ngo Dog"/>
                <div className="HeroText">
                    <h1 className="title">Extend a Hand</h1>
                    <h3 className="subtitle">Find NGOs that help and support our furry pets</h3>
                </div>
            </div>
            <div className="NgoGrid">
                <NgoCard/>
                <NgoCard/>
                <NgoCard/>
                <NgoCard/>
                <NgoCard/>
                <NgoCard/>
            </div>
        </div>
    )
}

export default NgosPage;