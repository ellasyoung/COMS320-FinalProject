import React, { useEffect, useState } from "react";
import { Dim, PhoneImage, Modal, CloseButton, NextButton, Title, Blurb, Img, Row, Minerals, Section, DropdownTitle, DropdownContent, ExpandButton, ScrollCont } from "../DRCPopUp/PopUpElements";
import Phone from "../../assets/phonecases/china-phonecase.png";
import ThisImage from "../../assets/china-img.jpg";

const ChinaPopUp = ({ goToNext, setOpenPopup, location }) => {
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
          <Title>Mining in China</Title>
          
          <ScrollCont>
          <Blurb>
            China is a global leader in mining and refining critical resources such as germanium, rare earth minerals, and aluminum. These materials are essential for the electronics industry and modern technology, yet their extraction reveals a legacy of environmental degradation, exploitative labor practices, and geopolitical power plays.
            </Blurb>
            <Row>
            <a href="https://www.mining.com/china-to-shut-down-2000-coal-mines-this-year-91471/" target="_blank">
                <Img src={ThisImage} className="china"></Img>
            </a>
            <Minerals>
                <ul>
                <li>
                    <b>Germanium:</b> Critical for fiber optics, infrared optics, and semiconductors, germanium is refined from zinc ores and used in the production of advanced telecommunications and imaging devices.
                </li>
                <li>
                    <b>Rare Earth Minerals:</b> These include neodymium, dysprosium, and lanthanum, essential for magnets, batteries, and components in smartphones, electric vehicles, and wind turbines.
                </li>
                <li>
                    <b>Aluminum:</b> A lightweight metal used extensively in cell phone frames, electronic circuits, and renewable energy systems, extracted from bauxite ore and processed in energy-intensive refineries.
                </li>
                </ul>
            </Minerals>
            </Row>
            <Section>
            <DropdownTitle onClick={() => toggleSection("conflict")}>
                Geopolitics and Resource Dominance
                <ExpandButton>{expanded.conflict ? "-" : "+"}</ExpandButton>
            </DropdownTitle>
            {expanded.conflict && (
                <DropdownContent>
                <p>
                    China's near-monopoly on rare earth minerals has significant global implications. By controlling the majority of the supply, China leverages its resources for economic and geopolitical advantage:
                </p>
                <ul>
                    <li>
                    <b>Export Restrictions:</b> China has used export bans and quotas as a tool in trade disputes, creating shortages and driving up prices globally.
                    </li>
                    <li>
                    <b>Environmental Impact:</b> Mining regions like Bayan Obo in Inner Mongolia are now environmentally devastated landscapes, with toxic waste and polluted water sources becoming permanent features.
                    </li>
                </ul>
                </DropdownContent>
            )}
            </Section>

            <Section>
            <DropdownTitle onClick={() => toggleSection("labor")}>
                Exploitation of Labor
                <ExpandButton>{expanded.labor ? "-" : "+"}</ExpandButton>
            </DropdownTitle>
            {expanded.labor && (
                <DropdownContent>
                <ul>
                    <li>
                    <b>Health Risks:</b> Workers in rare earth and aluminum mining are exposed to toxic chemicals and radiation, leading to severe health issues like respiratory diseases and cancer.
                    </li>
                    <li>
                    <b>Low Wages:</b> Despite the high global demand for these materials, miners often receive minimal pay, unable to share in the profits generated by their labor.
                    </li>
                    <li>
                    <b>Lack of Protections:</b> Many mines lack proper safety protocols, putting workers at risk of accidents, collapses, and exposure to hazardous materials.
                    </li>
                </ul>
                </DropdownContent>
            )}
            </Section>

            <Section>
            <DropdownTitle onClick={() => toggleSection("governance")}>
                Resource Governance and Environmental Concerns
                <ExpandButton>{expanded.governance ? "-" : "+"}</ExpandButton>
            </DropdownTitle>
            {expanded.governance && (
                <DropdownContent>
                <ul>
                    <li>
                    <b>Environmental Degradation:</b> Rare earth and aluminum mining have left regions like Inner Mongolia with barren landscapes, contaminated waterways, and long-lasting ecological damage.
                    </li>
                    <li>
                    <b>Government Oversight:</b> While China's government promotes green technology, its mining practices often prioritize economic growth over environmental sustainability, leading to contradictions in policy enforcement.
                    </li>
                    <li>
                    <b>Global Corporate Dependency:</b> Multinational corporations rely on Chinese-sourced materials due to their cost-efficiency, reinforcing China's central role in the global tech supply chain and limiting alternative sourcing initiatives.
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

export default ChinaPopUp;

