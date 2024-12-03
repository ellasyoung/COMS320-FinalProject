import React, { useEffect, useState } from "react";
import { Dim, PhoneImage, Modal, CloseButton, NextButton, Title, Blurb, Img, Row, Minerals, Section, DropdownTitle, DropdownContent, ExpandButton, ScrollCont } from "../DRCPopUp/PopUpElements";
import Phone from "../../assets/phonecases/canada-phonecase.png";
import ThisImage from "../../assets/canada-img.jpg";

const CanadaPopUp = ({ goToNext, setOpenPopup, location }) => {
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
          <Title>Mining in Canada</Title>
          
          <ScrollCont>
            <Blurb>
            Canada is a key supplier of critical minerals used in the production of iPhones, including aluminum, nickel, and gold. These resources are essential for components such as casings, batteries, and circuit boards. Canada's mining industry combines advanced technology with efforts to address environmental and labor challenges, contributing to global tech supply chains.
            </Blurb>
            <Row>
            <a href="https://northamerica.arcelormittal.com/our-operations/arcelormittal-mines-and-infrastructure-canada" target="_blank">
                <Img src={ThisImage} className="canada"></Img>
            </a>
            <Minerals>
                <ul>
                <li>
                    <b>Aluminum:</b> Sourced from bauxite and refined into a lightweight metal, aluminum is used for iPhone casings due to its durability and recyclability. Canada is a leading producer, utilizing hydroelectric energy for smelting, which lowers emissions.
                </li>
                <li>
                    <b>Nickel:</b> A key material in lithium-ion batteries, nickel enhances energy density and extends battery life. Canadian nickel mines in Ontario and Manitoba are critical suppliers for Apple’s sustainable energy solutions.
                </li>
                <li>
                    <b>Gold:</b> Used to coat connectors and circuits, gold ensures reliable conductivity. Canada is a top gold producer, with environmentally-focused mining practices aimed at reducing ecological impact.
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
                    Canada’s role as a mineral supplier for iPhones ties it to both environmental innovation and the challenges of global resource extraction:
                </p>
                <ul>
                    <li>
                    <b>Hydroelectric Advantage:</b> Aluminum production in Canada benefits from renewable hydroelectric energy, reducing emissions compared to coal-based smelting in other regions.
                    </li>
                    <li>
                    <b>Global Demand for Nickel:</b> With growing reliance on batteries for electric vehicles and smartphones, Canadian nickel mines are at the forefront of meeting sustainable energy demands.
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
                    <b>Skilled Workforce:</b> Canada’s mining industry provides high-paying jobs and technical training opportunities, particularly in regions like Quebec, Ontario, and British Columbia.
                    </li>
                    <li>
                    <b>Indigenous Partnerships:</b> Mining companies frequently engage in agreements with Indigenous communities, aiming to balance economic benefits with cultural and environmental stewardship.
                    </li>
                    <li>
                    <b>Automation and Technological Advances:</b> The integration of AI and automation in mining processes has improved efficiency but raised concerns about job displacement.
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
                    <b>Environmental Standards:</b> Canada enforces strict environmental regulations on mining operations, focusing on waste reduction, water management, and land reclamation.
                    </li>
                    <li>
                    <b>Corporate Responsibility:</b> Many Canadian mining companies adhere to international sustainability frameworks, including ethical sourcing standards for materials used in iPhone production.
                    </li>
                    <li>
                    <b>Global Influence:</b> As a top exporter of aluminum, nickel, and gold, Canada plays a critical role in stabilizing global supply chains and advocating for ethical resource extraction.
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

export default CanadaPopUp;

