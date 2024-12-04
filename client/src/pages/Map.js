import React from "react";
import Map from "../components/Map";
import { FaHome } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const HomeButton = styled(FaHome)`
  font-size: 24px; 
  background-color: black; 
  border-radius: 50%;
  padding: 15px; 
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  position: absolute;
  top: 50px;
  right: 50px;
  color: white;
  z-index: 1000;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    color: black;
    background-color: white; 
    box-shadow: none;
    transform: scale(1.1) rotate(360deg); 
  }
`;

const Name = styled.p`
    color: white;
    font-size: 12px;
    background-color: black;
    position: fixed; 
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    z-index: 1000;
    padding: 5px;
    border-radius: 3px;
`;

function MapPage() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", margin: "-10px" }}>
      <HomeButton onClick={() => navigate("/")} />
      <Map/>
      <Name>[ella young]</Name>
    </div>
  );
}

export default MapPage;