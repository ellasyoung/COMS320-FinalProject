import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import DRCPopUp from "../DRCPopUp";
import ChinaPopUp from "../ChinaPopUp";
import CanadaPopUp from "../CanadaPopUp";
import ChilePopUp from "../ChilePopUp";
import ColombiaPopUp from "../ColombiaPopUp";
import AusPopUp from "../AustraliaPopUp";
import USPopUp from "../USPopUp";
import TaiwanPopUp from "../TaiwanPopUp";
import ChinaManPopUp from "../ChinaManPopUp";
import GhanaPopUp from "../GhanaPopUp";
import PakPopUp from "../PakPopUp";


const WasteMarker = L.divIcon({
    html: renderToStaticMarkup(
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#800080", 
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
  

const MiningMarker = L.divIcon({
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

const AssemblyMarker = L.divIcon({
    html: renderToStaticMarkup(
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#1E90FF", 
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
    4: ChilePopUp,
    5: ColombiaPopUp,
    6: AusPopUp,
    7: USPopUp,
    8: TaiwanPopUp,
    9: ChinaManPopUp,
    10: GhanaPopUp,
    11: PakPopUp
  };

const locations = [
  { id: 1, name: "The Democratic Republic of the Congo", coords: [-8.7875, 26.4194], type: "mining" },
  { id: 2, name: "China", coords: [41.7694, 109.9737], type: "mining" },
  { id: 3, name: "Canada", coords: [50.2133, -66.3758], type: "mining" },
  { id: 4, name: "Chile", coords: [-22.3090, -68.9188], type: "mining" },
  { id: 5, name: "Colombia", coords: [6.7193, -75.9080], type: "mining" },
  { id: 6, name: "Australia", coords: [-33.5158, 116.0353], type: "mining" },
  { id: 7, name: "United States", coords: [41.3456, -88.8426], type: "mining" },
  { id: 8, name: "Taiwan", coords: [23.6978, 120.9605], type: "assembly" },
  { id: 9, name: "China", coords: [34.7472, 113.6249], type: "assembly" },
  { id: 10, name: "Ghana", coords: [5.5457, 0.2241], type: "waste" },
  { id: 11, name: "Pakistan", coords: [31.5204, 74.3587], type: "waste" },
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

  const connections = locations
  .filter((loc) => loc.type === "mining")
  .flatMap((miningLoc) =>
    locations
      .filter((loc) => loc.type === "assembly")
      .map((assemblyLoc) => ({
        from: miningLoc.coords,
        to: assemblyLoc.coords,
      }))
  );
  

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

      {connections.map((connection, index) => (
        <Polyline
          key={index}
          positions={[connection.from, connection.to]}
          pathOptions={{ color: "blue", weight: 2, opacity: "0.2" }}
        />
      ))}

      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.coords}
          icon={
            location.type === "mining" 
              ? MiningMarker 
              : location.type === "assembly" 
              ? AssemblyMarker 
              : WasteMarker
            }
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
