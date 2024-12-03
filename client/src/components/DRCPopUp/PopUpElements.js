import styled, { keyframes } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const Dim = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3); 
  z-index: 1001;
`;

export const PhoneImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px; 
  animation: slideToLeft 3s forwards;
  z-index: 1002;

  @keyframes slideToLeft {
    from {
      left: 50%; 
      transform: translate(-50%, -50%);
    }
    to {
      left: 5%; 
      transform: translate(0, -50%);
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95); 
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Modal = styled.div`
  position: absolute;
  background: white;
  width: 900px;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  padding: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
`;

export const CloseButton = styled(FaTimes)`
  font-size: 24px; 
  color: #cd2222;
  background-color: white; 
  border-radius: 50%;
  padding: 8px; 
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  position: absolute;
  top: 35px;
  left: 35px;

  &:hover {
    color: #fff;
    background-color: #cd2222; 
    transform: scale(1.1) rotate(360deg); 
  }
`;

export const NextButton = styled(FaArrowRight)`
  font-size: 24px; 
  color: #cd2222;
  background-color: white; 
  border-radius: 50%;
  padding: 8px; 
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  position: absolute;
  top: 32px;
  right: 35px;

  &:hover {
    color: #fff;
    background-color: #cd2222; 
    transform: scale(1.1) rotate(360deg); 
  }
`;