import styled, { keyframes } from "styled-components";
import { FaTimes, FaArrowRight } from "react-icons/fa";

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
  align-items: center;
  z-index: 1001;
  padding: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
`;

export const ScrollCont = styled.div`
  height: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll; 
  overflow-x: hidden; 
  scrollbar-width: thin; 
  scrollbar-color: #1E90FF #f1f1f1; 
  ::-webkit-scrollbar {
    width: 10px; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1E90FF;
    border-radius: 10px;
    border: 2px solid transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #b71c1c;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 10px; 
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1); 
  }
`;


export const CloseButton = styled(FaTimes)`
  font-size: 24px; 
  color: #1E90FF;
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
    background-color: #1E90FF; 
    transform: scale(1.1) rotate(360deg); 
  }
`;

export const NextButton = styled(FaArrowRight)`
  font-size: 24px; 
  color: #1E90FF;
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
    background-color: #1E90FF; 
    transform: scale(1.1) rotate(360deg); 
  }
`;

export const Title = styled.h1`
    font-size: 24px;
    color: #1E90FF;
    margin-top: 20px;
`

export const Blurb = styled.p`
    font-size: 14px;
    width: 90%;
    text-align: justify;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1); 
  }

  &.tai{
    height: 240px;
  }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row; 
    margin-top: 20px;
    gap: 20px;
    width: 90%;
`;

export const Minerals = styled.div`
    font-size: 14px;
    display: flex;
    ul {
        li {
        margin-bottom: 15px;
            b {
                color: #1E90FF; 
            }
        }
    }
`;

export const Section = styled.div`
  width: 90%;
`;

export const DropdownTitle = styled.h2`
  font-size: 18px;
  color: #1E90FF;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;

  &:hover {
    color: #b71c1c;
  }
`;

export const ExpandButton = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #1E90FF;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const DropdownContent = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: black;

  ul {
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    margin-left: 20px;
  }

  b {
    color: #1E90FF;
  }
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
    @media screen and (max-width: 1500px) {
        width: 200px;
    }
`;
