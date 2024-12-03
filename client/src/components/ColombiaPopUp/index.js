import React, { useEffect, useState } from "react";
import { Dim, PhoneImage, Modal, CloseButton, NextButton, Title, Blurb, Img, Row, Minerals, Section, DropdownTitle, DropdownContent, ExpandButton, ScrollCont } from "../DRCPopUp/PopUpElements";
import Phone from "../../assets/phonecases/colombia-phonecase.png";
import ThisImage from "../../assets/colombia-img.png";

const ColombiaPopUp = ({ goToNext, setOpenPopup, location }) => {
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
          <Title>Mining in Colombia</Title>
          
        <ScrollCont>
        <Blurb>
        Colombia is a key global supplier of gold and nickel, both critical for the production of iPhones. Gold is essential for coating circuit connectors to ensure conductivity, while nickel is used in batteries for energy storage. Colombia’s mining industry is deeply intertwined with global technology supply chains, but it faces challenges of illegal mining, labor exploitation, and environmental degradation.
        </Blurb>
        <Row>
        <a href="https://globalvoices.org/2024/06/26/tensions-at-colombias-largest-gold-mine-highlight-climate-justice-quagmire/" target="_blank" rel="noreferrer">
            <Img src={ThisImage}></Img>
        </a>
        <Minerals>
            <ul>
            <li>
                <b>Gold:</b> Used to coat iPhone connectors and circuits, ensuring reliable conductivity. Colombia is a major gold producer, though illegal mining operations frequently overshadow the formal sector.
            </li>
            <li>
                <b>Nickel:</b> Essential for lithium-ion batteries, nickel enhances battery efficiency and longevity. Colombia is a top supplier, with significant reserves extracted from mines like Cerro Matoso in Córdoba.
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
                Colombia’s mining sector plays a significant role in global supply chains but is marred by illegal operations and environmental challenges:
            </p>
            <ul>
                <li>
                <b>Illegal Mining:</b> Over 60% of Colombia’s gold is produced through illegal mining, which is often linked to armed groups and environmental destruction, including deforestation and mercury contamination.
                </li>
                <li>
                <b>Global Demand:</b> High demand for Colombian nickel and gold drives both formal and informal mining, tying the country’s economy to the electronics and renewable energy industries.
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
                <b>Informal Labor:</b> Many mining operations employ informal workers who lack legal protections, exposing them to hazardous conditions and low wages.
                </li>
                <li>
                <b>Conflict Zones:</b> Mining often overlaps with regions controlled by armed groups, where miners face extortion and violence.
                </li>
                <li>
                <b>Economic Opportunities:</b> Formal mining operations provide stable jobs, particularly in rural areas, but the benefits are unevenly distributed across communities.
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
                <b>Illegal Mining Crackdowns:</b> The Colombian government has launched initiatives to combat illegal mining and its ties to organized crime, but enforcement is limited in remote regions.
                </li>
                <li>
                <b>Environmental Protections:</b> New regulations aim to reduce mercury use in gold mining and address deforestation caused by extraction, but implementation challenges persist.
                </li>
                <li>
                <b>Global Corporate Engagement:</b> Companies like Apple have pushed for conflict-free gold sourcing, increasing pressure on Colombia to improve transparency and formalize its mining sector.
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

export default ColombiaPopUp;

