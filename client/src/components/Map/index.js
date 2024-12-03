import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import DRCPopUp from "../DRCPopUp";
import ChinaPopUp from "../ChinaPopUp";
import CanadaPopUp from "../CanadaPopUp";

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

const popups = {
    1: DRCPopUp, 
    2: ChinaPopUp, 
    3: CanadaPopUp,
  };

const locations = [
  { id: 1, name: "Democratic Republic of the Congo", coords: [-8.7875, 26.4194] },
  { id: 2, name: "China", coords: [41.7694, 109.9737] },
  { id: 3, name: "Canada", coords: [50.2133, -66.3758] },
];

const MapController = ({ coords, zoom, freezeMap }) => {
    const map = useMap();
  
    useEffect(() => {
      if (coords) {
        map.flyTo(coords, zoom, { duration: 1.5 });
      }
    }, [coords, zoom, map]);
  
    useEffect(() => {
      if (freezeMap) {
        map.dragging.disable();
        map.scrollWheelZoom.disable();
        map.doubleClickZoom.disable();
        map.touchZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();
      } else {
        map.dragging.enable();
        map.scrollWheelZoom.enable();
        map.doubleClickZoom.enable();
        map.touchZoom.enable();
        map.boxZoom.enable();
        map.keyboard.enable();
      }
    }, [freezeMap, map]);
  
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

  const ActivePopup = activeLocation ? popups[activeLocation.id] : null;

  return (
    <MapContainer center={locations[0].coords} zoom={6} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />

      <MapController coords={activeLocation?.coords} zoom={8} freezeMap={!!activeLocation} />

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

    {ActivePopup && (
        <ActivePopup
          goToNext={goToNext}
          setOpenPopup={closePopup}
          location={activeLocation}
        />
      )}
    </MapContainer>
  );
};

export default InteractiveMap;
