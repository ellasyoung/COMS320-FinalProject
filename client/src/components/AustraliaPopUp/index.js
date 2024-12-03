import React, { useEffect, useState } from "react";
import { Dim, PhoneImage, Modal, CloseButton, NextButton, Title, Blurb, Img, Row, Minerals, Section, DropdownTitle, DropdownContent, ExpandButton, ScrollCont } from "../DRCPopUp/PopUpElements";
import Phone from "../../assets/phonecases/australia-phonecase.png";
import ThisImage from "../../assets/aus-img.jpg";

const AusPopUp = ({ goToNext, setOpenPopup, location }) => {
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
          <Title>Mining in Australia</Title>
          
        <ScrollCont>
        <Blurb>
        Australia is a global leader in mining critical minerals like lithium, gold, and aluminum, which are integral to iPhone production. Lithium powers rechargeable batteries, gold ensures reliable connectivity in circuits, and aluminum forms lightweight and durable casings. Australia’s mining sector is characterized by advanced technology and sustainability efforts, though challenges of environmental impact and Indigenous land rights persist.
        </Blurb>
        <Row>
        <a href="https://www.talisonlithium.com/" target="_blank" rel="noreferrer">
            <Img src={ThisImage} className="aus"></Img>
        </a>
        <Minerals>
            <ul>
            <li>
                <b>Lithium:</b> A key component of lithium-ion batteries, lithium is crucial for powering iPhones and other mobile devices. Australia is the world’s largest lithium producer, with significant mining operations in Western Australia.
            </li>
            <li>
                <b>Gold:</b> Used to coat circuit connectors in iPhones for reliable conductivity, gold is mined extensively in Australia, particularly in regions like Kalgoorlie and Bendigo.
            </li>
            <li>
                <b>Aluminum:</b> Sourced from bauxite ore, aluminum is essential for iPhone casings due to its lightweight and durable properties. Australia is a major producer of bauxite, with mines in Queensland and Western Australia.
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
                Australia’s role as a top supplier of iPhone materials ties its economy to global tech production but also raises environmental and social concerns:
            </p>
            <ul>
                <li>
                <b>Energy-Intensive Processes:</b> Aluminum smelting requires significant energy, and despite efforts to use renewable sources, coal-powered facilities remain a concern.
                </li>
                <li>
                <b>Global Lithium Demand:</b> The growing need for lithium to power iPhones, electric vehicles, and renewable energy storage makes Australia a key player in global supply chains, heightening pressures on mining regions.
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
                <b>High-Wage Jobs:</b> The mining industry in Australia provides well-paying jobs and contributes significantly to local economies, particularly in remote areas.
                </li>
                <li>
                <b>Indigenous Employment:</b> Mining companies often collaborate with Indigenous communities to provide employment opportunities and economic benefits.
                </li>
                <li>
                <b>Automation Challenges:</b> Advances in automation and mining technology have improved efficiency but reduced the need for traditional labor, raising concerns about job losses in some regions.
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
                <b>Environmental Protections:</b> Australia enforces strict environmental regulations on mining operations, focusing on reducing greenhouse gas emissions and land rehabilitation.
                </li>
                <li>
                <b>Indigenous Land Rights:</b> Mining projects often overlap with Indigenous lands, requiring companies to negotiate agreements that respect cultural heritage and land use.
                </li>
                <li>
                <b>Global Leadership:</b> Australia’s adherence to ethical mining standards and sustainability frameworks makes it a leader in responsible resource extraction for tech industries like Apple.
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

export default AusPopUp;