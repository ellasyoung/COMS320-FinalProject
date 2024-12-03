import React, { useState } from "react";
import { Dim, Modal, CloseButton, NextButton, Title, Blurb, Img, Row, Minerals, Section, DropdownTitle, DropdownContent, ExpandButton, ScrollCont } from "../GhanaPopUp/WasteElements";
import ThisImage from "../../assets/pak-img.jpg";

const PakPopUp = ({ goToNext, setOpenPopup, location }) => {

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
          <Title>EWaste in Pakistan</Title>
          
        <ScrollCont>
        <Blurb>
        Pakistan has become a significant destination for e-waste, with major hubs like Karachi and Lahore processing discarded electronics, including smartphones and computers. These materials arrive from high-income countries, often under the label of "secondhand goods." The informal recycling sector extracts valuable metals using unsafe methods, exposing workers and the environment to severe risks.
        </Blurb>
        <Row>
        <a href="https://www.ban.org/news-new/2021/6/16/e-waste-poses-health-threat-to-pakistanis-says-un-study" target="_blank" rel="noreferrer">
            <Img src={ThisImage} className="pak"></Img>
        </a>
        <Minerals>
            <ul>
            <li>
                <b>E-Waste Origins:</b> E-waste is imported from countries such as the U.S., Canada, and Europe. Much of it arrives illegally as outdated or damaged goods labeled for reuse but destined for dismantling.
            </li>
            <li>
                <b>Materials Recovered:</b> Informal workers recover valuable resources like gold, copper, and aluminum from obsolete electronics through primitive recycling techniques.
            </li>
            <li>
                <b>Toxic Components:</b> Hazardous substances like lead, mercury, and brominated flame retardants are common in e-waste, making improper processing dangerous for workers and ecosystems.
            </li>
            </ul>
        </Minerals>
        </Row>
        <Section>
        <DropdownTitle onClick={() => toggleSection("process")}>
            E-Waste Processing in Pakistan
            <ExpandButton>{expanded.process ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.process && (
            <DropdownContent>
            <p>
                E-waste processing in Pakistan relies on informal labor and unsafe methods, largely unregulated and driven by economic necessity:
            </p>
            <ul>
                <li>
                <b>Burning and Melting:</b> Workers burn cables to extract copper wires and melt circuit boards to retrieve gold, releasing toxic fumes.
                </li>
                <li>
                <b>Manual Dismantling:</b> Electronics are taken apart by hand to salvage metals and components, with no safety measures in place.
                </li>
                <li>
                <b>Waste Disposal:</b> Non-recyclable remnants are dumped in open landfills or rivers, contaminating soil and water sources with heavy metals and other toxins.
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
                <b>Health Hazards:</b> Workers and nearby communities suffer from respiratory problems, neurological disorders, and long-term illnesses due to exposure to harmful chemicals and pollutants.
                </li>
                <li>
                <b>Environmental Contamination:</b> Soil and water are polluted with lead, mercury, and other toxins, disrupting local ecosystems and agricultural practices.
                </li>
                <li>
                <b>Global Disparities:</b> High-income countries offload their e-waste onto low-income nations like Pakistan, exacerbating social and environmental inequities.
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
                <b>Formal Recycling Systems:</b> Developing formal e-waste recycling facilities with proper safety protocols can protect workers and recover materials more efficiently.
                </li>
                <li>
                <b>International Cooperation:</b> Enforcing international agreements like the Basel Convention can curb the illegal shipment of e-waste to countries like Pakistan.
                </li>
                <li>
                <b>Local Initiatives:</b> Supporting local efforts to train workers in safe recycling methods and providing access to protective equipment can improve conditions in the informal sector.
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

export default PakPopUp;