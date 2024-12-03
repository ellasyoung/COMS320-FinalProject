import React, { useState } from "react";
import { Dim, Modal, CloseButton, NextButton, Title, Blurb, Img, Row, Minerals, Section, DropdownTitle, DropdownContent, ExpandButton, ScrollCont } from "./ManPopUpElements";
import ThisImage from "../../assets/tai-img.jpg";

const TaiwanPopUp = ({ goToNext, setOpenPopup, location }) => {

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
        <Modal>
          <CloseButton onClick={() => setOpenPopup(false)} />
          <NextButton
            onClick={() => {
              setOpenPopup(false);
              goToNext();
            }}
          />
          <Title>Manufacturing in Taiwan</Title>
          
        <ScrollCont>
        <Blurb>
        Taiwan is at the heart of the global technology supply chain, with Taiwan Semiconductor Manufacturing Company (TSMC) leading the production of semiconductors and microchip processors for iPhones. These components power the device's processing, connectivity, and energy management, making them indispensable. TSMC’s cutting-edge facilities combine raw materials like silicon, gold, and rare earth elements to create the advanced chips that drive modern technology.
        </Blurb>
        <Row>
        <a href="https://www.datagravity.dev/p/what-does-tsmc-do" target="_blank" rel="noreferrer">
            <Img src={ThisImage} className="tai"></Img>
        </a>
        <Minerals>
            <ul>
            <li>
                <b>Silicon:</b> The foundation of semiconductors, high-purity silicon wafers are etched and layered to create the transistors that power microchips.
            </li>
            <li>
                <b>Gold:</b> Used for interconnections within microchip processors due to its excellent conductivity and resistance to corrosion.
            </li>
            <li>
                <b>Rare Earth Elements:</b> Materials like neodymium and dysprosium are essential for the magnetic components in processors and other semiconductor components.
            </li>
            <li>
                <b>Copper:</b> Provides efficient electrical conductivity for chip interconnections, ensuring reliable performance.
            </li>
            </ul>
        </Minerals>
        </Row>
        <Section>
        <DropdownTitle onClick={() => toggleSection("manufacturing")}>
            Advanced Semiconductor Manufacturing
            <ExpandButton>{expanded.manufacturing ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.manufacturing && (
            <DropdownContent>
            <p>
                TSMC is the world’s largest semiconductor foundry, producing over 50% of the global supply of advanced chips. iPhones rely on TSMC’s cutting-edge 5-nanometer and 3-nanometer chips, which enable higher performance and lower power consumption:
            </p>
            <ul>
                <li>
                <b>Precision Engineering:</b> TSMC utilizes advanced lithography techniques to pattern billions of transistors onto tiny silicon wafers.
                </li>
                <li>
                <b>Material Integration:</b> The manufacturing process incorporates silicon, gold, copper, and rare earth elements to create multi-layered chips with unparalleled efficiency.
                </li>
                <li>
                <b>Innovative Packaging:</b> TSMC’s chip-stacking technology enhances the performance of iPhone processors by integrating multiple layers of transistors into a compact footprint.
                </li>
            </ul>
            </DropdownContent>
        )}
        </Section>

        <Section>
        <DropdownTitle onClick={() => toggleSection("globalimpact")}>
            Global Impact and Supply Chains
            <ExpandButton>{expanded.globalimpact ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.globalimpact && (
            <DropdownContent>
            <ul>
                <li>
                <b>Key Role in Tech:</b> TSMC’s chips are used in nearly all iPhones, connecting Taiwan to global innovation hubs like Silicon Valley.
                </li>
                <li>
                <b>Export Powerhouse:</b> Semiconductors account for over 35% of Taiwan’s exports, reinforcing its role as a critical player in the global economy.
                </li>
                <li>
                <b>Geopolitical Significance:</b> Taiwan’s semiconductor dominance places it at the center of global trade and technology policy, as countries strive to secure chip supplies.
                </li>
            </ul>
            </DropdownContent>
        )}
        </Section>

        <Section>
        <DropdownTitle onClick={() => toggleSection("sustainability")}>
            Sustainability and Challenges
            <ExpandButton>{expanded.sustainability ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.sustainability && (
            <DropdownContent>
            <ul>
                <li>
                <b>Energy Consumption:</b> Semiconductor manufacturing is energy-intensive, prompting TSMC to invest in renewable energy and carbon neutrality initiatives.
                </li>
                <li>
                <b>Water Usage:</b> Advanced chip production requires vast amounts of ultra-pure water, leading TSMC to implement water recycling technologies.
                </li>
                <li>
                <b>Supply Chain Vulnerabilities:</b> As a critical node in the global chip supply chain, disruptions to TSMC operations could impact global tech production.
                </li>
            </ul>
            </DropdownContent>
        )}
        </Section>
        </ScrollCont>
        </Modal>
    </Dim>
  );
};

export default TaiwanPopUp;