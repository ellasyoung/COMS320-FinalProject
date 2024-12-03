import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import DRCPopUp from "../DRCPopUp";

const CustomMarker = L.divIcon({
  html: renderToStaticMarkup(
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#cd2222",
        borderRadius: "50%",
        padding: "8px",
      }}
    >
      <FaMapMarkerAlt style={{ fontSize: "36px" }} />
    </div>
  ),
  className: "custom-icon",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

const locations = [
  { id: 1, name: "Democratic Republic of the Congo", coords: [-8.7875, 26.4194] },
  { id: 2, name: "Paris", coords: [48.8566, 2.3522] },
  { id: 3, name: "Tokyo", coords: [35.6895, 139.6917] },
];

// Component to programmatically control the map
const MapController = ({ coords, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.flyTo(coords, zoom, { duration: 1.5 }); // Smoothly zoom to the new location
    }
  }, [coords, zoom, map]);

  return null;
};

const InteractiveMap = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0]); 

  const goToNext = () => {
    const currentIndex = locations.findIndex((loc) => loc.id === activeLocation.id);
    const nextIndex = (currentIndex + 1) % locations.length;
    setActiveLocation(locations[nextIndex]);
  };

  const closePopup = () => {
    setActiveLocation(null); 
  };

  return (
    <MapContainer center={locations[0].coords} zoom={6} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />

      <MapController coords={activeLocation?.coords} zoom={8} />

      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.coords}
          icon={CustomMarker}
          eventHandlers={{
            click: () => setActiveLocation(location), 
          }}
        />
      ))}

      {activeLocation && (
        <DRCPopUp
          goToNext={goToNext}
          setOpenPopup={closePopup}
          location={activeLocation}
        />
      )}
    </MapContainer>
  );
};

export default InteractiveMap;
