import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
const Map = () => {
    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "100vh", width: "100vw" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup></Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;

