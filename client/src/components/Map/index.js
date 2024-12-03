import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const locations = [
  { name: "New York", coords: [40.7128, -74.0060], content: "Welcome to New York!" },
  { name: "Paris", coords: [48.8566, 2.3522], content: "Bonjour from Paris!" },
  { name: "Tokyo", coords: [35.6895, 139.6917], content: "Hello from Tokyo!" },
];

function MapController({ coords, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(coords, zoom, { duration: 2 }); 
  }, [coords, zoom, map]);
  return null;
}

const InteractiveMap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % locations.length);
  };

  return (
    <MapContainer center={locations[0].coords} zoom={4} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <MapController coords={locations[currentIndex].coords} zoom={4} />
      {locations.map((location, index) => (
        <Marker key={index} position={location.coords}>
          <Popup>
            <h3>{location.name}</h3>
            <p>{location.content}</p>
            <button onClick={goToNext}>Next</button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default InteractiveMap;
