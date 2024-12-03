import React, { useState } from "react";
import { Dim, Modal, CloseButton, NextButton, Title, Blurb, Img, Row, Minerals, Section, DropdownTitle, DropdownContent, ExpandButton, ScrollCont } from "./WasteElements";
import ThisImage from "../../assets/ghana-img.jpg";

const GhanaPopUp = ({ goToNext, setOpenPopup, location }) => {

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
          <Title>EWaste in Ghana</Title>
          
        <ScrollCont>
        <Blurb>
        Agbogbloshie, Ghana, is one of the world’s largest e-waste dumps, where discarded electronics, including outdated iPhones, end up. These devices, shipped from high-income countries, are dismantled in hazardous conditions by informal workers. Agbogbloshie has become a symbol of global environmental injustice, revealing the hidden costs of the digital age.
        </Blurb>
        <Row>
        <a href="https://gpe.wikipedia.org/wiki/Agbogbloshie" target="_blank" rel="noreferrer">
            <Img src={ThisImage} className="ghana"></Img>
        </a>
        <Minerals>
            <ul>
            <li>
                <b>E-Waste Origins:</b> Much of the e-waste in Agbogbloshie is shipped illegally from North America and Europe under the guise of "secondhand goods," though many devices are non-functional.
            </li>
            <li>
                <b>Materials Recovered:</b> Informal workers extract valuable materials like gold, copper, and aluminum from discarded electronics, often using primitive methods.
            </li>
            <li>
                <b>Toxic Components:</b> E-waste contains hazardous materials like lead, mercury, and cadmium, which pose serious health and environmental risks when improperly handled.
            </li>
            </ul>
        </Minerals>
        </Row>
        <Section>
        <DropdownTitle onClick={() => toggleSection("process")}>
            E-Waste Processing in Agbogbloshie
            <ExpandButton>{expanded.process ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.process && (
            <DropdownContent>
            <p>
                In Agbogbloshie, e-waste is dismantled and processed using informal, unsafe methods:
            </p>
            <ul>
                <li>
                <b>Burning for Copper:</b> Workers burn plastic casings to retrieve copper wires, releasing toxic fumes into the air.
                </li>
                <li>
                <b>Manual Dismantling:</b> Devices are broken apart with basic tools to extract metals like gold and aluminum, often exposing workers to sharp edges and harmful dust.
                </li>
                <li>
                <b>Waste Disposal:</b> Unrecoverable components are dumped, contaminating nearby water and soil with heavy metals and toxic chemicals.
                </li>
            </ul>
            </DropdownContent>
        )}
        </Section>

        <Section>
        <DropdownTitle onClick={() => toggleSection("repercussions")}>
            Repercussions of E-Waste Dumping
            <ExpandButton>{expanded.repercussions ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.repercussions && (
            <DropdownContent>
            <ul>
                <li>
                <b>Health Risks:</b> Workers suffer from respiratory issues, skin conditions, and long-term illnesses caused by exposure to toxic fumes and heavy metals.
                </li>
                <li>
                <b>Environmental Damage:</b> Contamination of soil and water with lead, mercury, and other toxins has long-term effects on ecosystems and local agriculture.
                </li>
                <li>
                <b>Global Inequities:</b> High-income countries export their e-waste burden to regions like Agbogbloshie, exacerbating environmental and health challenges for vulnerable communities.
                </li>
            </ul>
            </DropdownContent>
        )}
        </Section>

        <Section>
        <DropdownTitle onClick={() => toggleSection("alternatives")}>
            Alternatives and Potential Solutions
            <ExpandButton>{expanded.alternatives ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.alternatives && (
            <DropdownContent>
            <ul>
                <li>
                <b>Formal Recycling:</b> Investing in proper recycling facilities can safely recover valuable materials while minimizing environmental harm.
                </li>
                <li>
                <b>Producer Responsibility:</b> Policies like extended producer responsibility (EPR) require manufacturers to manage the lifecycle of their products, including safe disposal.
                </li>
                <li>
                <b>Consumer Awareness:</b> Educating consumers about the importance of recycling and donating functional devices can reduce the volume of e-waste.
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

export default GhanaPopUp;