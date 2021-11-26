import React from "react";
import MapContainer from "../../Components/MapContainer";

import './ReportPage.scss';

const ReportPage = () =>{
    return(
        <div className="ReportPage">
            <div className="HeroText">
                    <h1 className="title">Report For Help</h1>
                    <h3 className="subtitle">Help NGOs rescue and support our animals in need</h3>
            </div>
            <MapContainer/>
        </div>
    )
}

export default ReportPage;