import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface MarkerProps {
  id: number;
  latitude: number;
  longitude: number;
  markerContent: React.ReactNode;
}

interface MapProps {
  markers: MarkerProps[];
}

const Map: React.FC<MapProps> = ({ markers }) => {
  return (
    <MapContainer center={[39.4227, -0.3525]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers &&
        markers.map((marker) => {
          return (
            <Marker
              position={[marker.latitude, marker.longitude]}
              key={marker.id}
            >
              <Popup>{marker.markerContent}</Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
};

export default Map;
