import React,{ useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyles = {        
        height: "80vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 25.0168233, lng: 88.1299053
    }

    const [ currentPosition, setCurrentPosition ] = useState({});

    const success = position => {
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    const onMarkerDragEnd = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setCurrentPosition({ lat, lng})
    };
      
      useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
      })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
      })

  
    return (
        <LoadScript
        googleMapsApiKey='AIzaSyArtPrcsQEd068flJscZ_2BW9BXcCNN9CU'>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
            >
            {
                currentPosition.lat &&
                ( 
                <Marker position={currentPosition}
                onDragEnd={(e) => onMarkerDragEnd(e)}
                draggable={true}/>
                ) 
            }
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer;