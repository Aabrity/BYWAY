import React from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import 'leaflet/dist/leaflet.css';
import { TileLayer, Marker, Popup, MapContainerProps, useMap } from 'react-leaflet';

interface LeafletMap extends MapContainerProps {
  lat: number;
  lng: number;
  zoom: number;
  
}
// function MyComponent() {
//   const map = useMap();
//   console.log('map center:', map.getCenter())
//   return null
// }

const LeafletMap: React.FC<LeafletMap> = ({ lat, lng, zoom }) => {
  const position: [number, number] = [lat || 27.7213, lng || 85.3575];
  

  return (
    <MapContainer >
      {/* <MyComponent /> */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Your location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
