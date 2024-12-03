import React, { useEffect, useState } from "react";
import { Dim, PhoneImage, Modal, CloseButton, NextButton, Title, Blurb, Img, Row, Minerals, Section, DropdownTitle, DropdownContent, ExpandButton, ScrollCont } from "../DRCPopUp/PopUpElements";
import Phone from "../../assets/phonecases/us-phonecase.png";
import ThisImage from "../../assets/us-img.jpg";

const USPopUp = ({ goToNext, setOpenPopup, location }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const [expanded, setExpanded] = useState({
    conflict: false,
    labor: false,
    governance: false,
  });

  const toggleSection = (section) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <Dim>
      <PhoneImage src={Phone} alt={`Phone case for ${location.name}`} />
      {showModal && (
        <Modal>
          <CloseButton onClick={() => setOpenPopup(false)} />
          <NextButton
            onClick={() => {
              setOpenPopup(false);
              goToNext();
            }}
          />
          <Title>Mining in the United States</Title>
          
        <ScrollCont>
        <Blurb>
        The United States is a significant producer of silica, a key material used in the production of iPhone glass screens and semiconductor components. Extracted primarily from quartz sand, silica is refined into high-purity silicon, which forms the foundation for advanced electronics. The U.S. mining sector is central to the tech supply chain, but silica mining raises environmental and health concerns, particularly related to land use and worker safety.
        </Blurb>
        <Row>
        <a href="https://secure.northernminer.com/news/us-silica-ups-its-capacity-to-meet-growing-frac-sand-demand/1003153332/" target="_blank" rel="noreferrer">
            <Img src={ThisImage}></Img>
        </a>
        <Minerals>
            <ul>
            <li>
                <b>Silica:</b> Derived from quartz sand, silica is processed into high-purity silicon used in iPhone glass screens for its transparency, durability, and resistance to scratching. It is also critical for semiconductors that power electronic devices.
            </li>
            </ul>
        </Minerals>
        </Row>
        <Section>
        <DropdownTitle onClick={() => toggleSection("conflict")}>
            Environmental Impacts and Global Supply Chains
            <ExpandButton>{expanded.conflict ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.conflict && (
            <DropdownContent>
            <p>
                Silica mining in the U.S. plays a crucial role in global supply chains for technology but raises environmental concerns related to extraction and processing:
            </p>
            <ul>
                <li>
                <b>Land Use and Ecosystem Disruption:</b> Silica mining involves extensive land clearing and excavation, often leading to habitat destruction and changes in local ecosystems.
                </li>
                <li>
                <b>Global Demand:</b> As silica is a fundamental material for iPhones and other technologies, the U.S. is a key supplier in meeting the growing global demand for high-purity silicon.
                </li>
            </ul>
            </DropdownContent>
        )}
        </Section>

        <Section>
        <DropdownTitle onClick={() => toggleSection("labor")}>
            Labor and Economic Contributions
            <ExpandButton>{expanded.labor ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.labor && (
            <DropdownContent>
            <ul>
                <li>
                <b>High-Skilled Jobs:</b> The U.S. silica mining sector provides specialized, high-wage jobs, particularly in regions like Illinois, Texas, and Wisconsin, where silica sand deposits are abundant.
                </li>
                <li>
                <b>Worker Safety Concerns:</b> Prolonged exposure to silica dust can lead to health issues like silicosis and respiratory diseases, prompting calls for stricter workplace safety standards.
                </li>
                <li>
                <b>Economic Impact:</b> Silica mining supports local economies and feeds into downstream industries like semiconductor manufacturing, reinforcing the U.S.’s role in global tech supply chains.
                </li>
            </ul>
            </DropdownContent>
        )}
        </Section>

        <Section>
        <DropdownTitle onClick={() => toggleSection("governance")}>
            Resource Governance and Sustainability
            <ExpandButton>{expanded.governance ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.governance && (
            <DropdownContent>
            <ul>
                <li>
                <b>Environmental Regulations:</b> The U.S. enforces strict environmental guidelines on silica mining operations, including requirements for land reclamation and dust control to minimize ecological and health impacts.
                </li>
                <li>
                <b>Global Influence:</b> As a significant exporter of silica, the U.S. contributes to global technology supply chains, ensuring the production of high-quality components for iPhones and other devices.
                </li>
                <li>
                <b>Sustainability Challenges:</b> Despite regulatory measures, silica mining continues to face criticism over its impact on groundwater levels and the long-term viability of mined lands.
                </li>
            </ul>
            </DropdownContent>
        )}
        </Section>
        </ScrollCont>
        </Modal>
      )}
    </Dim>
  );
};

export default USPopUp;