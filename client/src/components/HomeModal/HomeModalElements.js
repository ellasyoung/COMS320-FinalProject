import styled from "styled-components";
import HomeBackground from "../../assets/home-bckrnd.png"; 

export const Bckgrnd = styled.div`
    width: 100%;
    height: 101vh;
    position: relative;
    background: url(${HomeBackground});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
`;

export const Modal = styled.div`
    margin-top: -30px;
    background-color: white;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.7);
    width: 60%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Name = styled.p`
    color: white;
    font-size: 12px;
    position: fixed; 
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
`;

export const Text = styled.p`
    font-size: 16px;
    color: black;
    line-height: 1.4;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    text-align: justify;
`;

export const Title = styled.h1`
    font-size: 20px;
    color: black;
    font-weight: normal;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    align-items: center;

    &.top{
        justify-content: flex-start;
    }
    &.bottom{
        justify-content: flex-end;
    }
`;

export const TitleTxt = styled.a`
    font-size: 20px;
    color: black;
    font-weight: normal;
    gap: 5px;
    display: flex;
    align-items: center;
    position: relative; 
    cursor: pointer;
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        height: 3px;
        left: 0;
        bottom: -10px; 
        width: 0;
        background: black; 
        transition: width 0.2s ease-in-out; 
    }

    &:hover::after {
        width: 100%; 
    }
`;