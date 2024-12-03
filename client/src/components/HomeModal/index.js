import React from "react";
import { Bckgrnd, Modal, Name, Text, Title, TitleTxt } from "./HomeModalElements";
import { FaAngleRight } from "react-icons/fa";

function HomeModal() {

    return (
      <>
        <Bckgrnd>
            <Modal>
                <Title className="top">welcome.</Title>
                <Text>this project reveals the materiality of media by tracing the minerals and resources that construct an iphone, from extraction in the democratic republic of congo to assembly lines in china, and beyond. through immersive exploration, it investigates the human and ecological toll, exposing the colonial legacies and supply chain violence that underpin our digital culture. here, the earth and its people perform invisible labor, often at the cost of lives and landscapes, reminding us of the inequities etched into our tools of modernity.​</Text>
                <Title className="bottom">
                    <TitleTxt href="/map">continue
                    <FaAngleRight style={{fontSize: "18px", marginTop: "2px"}}/>
                    </TitleTxt>
                </Title>
            </Modal>
            <Name>[ella young]</Name>
        </Bckgrnd>
      </>
    );
  }
  
  export default HomeModal;