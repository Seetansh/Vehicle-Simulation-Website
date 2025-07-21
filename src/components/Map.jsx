import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'; // import leaflet for custom icon
import 'leaflet/dist/leaflet.css';

const carIcon = new L.Icon({
    iconUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/car-pointer-1106857.png',
    iconSize: [60, 60],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

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
            <Marker position={[51.505, -0.09]} icon={carIcon}>
                <Popup>
                    <h3>Location Details</h3>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;

