import React from 'react';
import { LayerGroup, MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const defaultLatLng: LatLngTuple = [48.84647395701655, 2.2737407684326176];
const zoom: number = 13;

const GetLocation:React.FC = () => {
  const map = useMapEvents({
    click: () => {
      map.locate()
    },
    locationfound: (location) => {
      console.log('Location found: ', location);
    },
  });
  return null;
}

const LeafletMap:React.FC = () => {
    return (
      <MapContainer id="mapId" center={defaultLatLng} zoom={zoom}>
        <LayerGroup>
          <GetLocation />  
        </LayerGroup>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/>copyright&quot;>OpenStreetMap</a> contributors" />
      </MapContainer>
    )
}


export default LeafletMap;
