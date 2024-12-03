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
          <Blurb>The Democratic Republic of Congo (DRC) is home to some of the most sought-after minerals in the world—coltan, tantalum, and cobalt—essential for modern electronics. However, this wealth of resources belies a deep history of exploitation, environmental devastation, and political conflict that underpins the global digital economy.</Blurb>
          <Row>
            <a href="https://www.mining.com/china-to-shut-down-2000-coal-mines-this-year-91471/" target="_blank">
                <Img src={ThisImage}></Img>
            </a>
            <Minerals>
                <ul>
                    <li> <b>Coltan (Columbite-Tantalite):</b> Essential for tantalum capacitors, which enable energy storage in smartphones, laptops, and gaming consoles. The unique electrical properties of tantalum are critical to high-performance electronics.</li>
                    <li> <b>Cobalt:</b> Central to rechargeable lithium-ion batteries, powering electric vehicles, mobile phones, and renewable energy storage solutions.</li>
                </ul>
            </Minerals>
          </Row>
          <Section>
                <DropdownTitle onClick={() => toggleSection("conflict")}>
                Conflict Minerals and Armed Groups
                <ExpandButton>{expanded.conflict ? "-" : "+"}</ExpandButton>
                </DropdownTitle>
                {expanded.conflict && (
                <DropdownContent>
                    <p>
                    The extraction of minerals like coltan, tantalum, and cobalt in the DRC fuels what are often referred to as “resource wars.” Armed militias, foreign-backed rebel groups, and even factions within the Congolese military compete for control of mining regions. Revenues from these operations are used to fund weapons, maintain power, and control local populations. For example:
                    </p>
                    <ul>
                    <li>
                        <b>The Kivu Region:</b> Rich in coltan, this area has seen persistent violence as militias impose taxes or outright seize mining operations. The trade routes from these mines often pass through rebel-controlled territories, ensuring these groups reap profits at each stage of the supply chain.
                    </li>
                    <li>
                        <b>Gendered Violence:</b> Mass sexual violence has been used as a weapon of war to displace communities and seize mining areas. Women and girls are particularly targeted, with the trauma serving as a tool to destabilize families and communities, facilitating resource exploitation.
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
                        <b>Child Labor:</b> Children as young as seven work in hazardous conditions, often in artisanal mines where safety regulations are nonexistent. They manually dig, wash, and sort minerals, risking landslides and exposure to toxic dust.
                    </li>
                    <li>
                        <b>Lack of Fair Compensation:</b> Miners often sell their labor and resources to intermediaries at exploitative rates. A kilo of coltan might sell for $10 locally, but it fetches thousands on the global market. The laborers themselves rarely see the economic benefits of this high demand.
                    </li>
                    <li>
                        <b>Debt Bondage:</b> Many workers rely on informal lenders to finance basic tools and supplies. This debt traps them in cycles of dependency, forcing them to continue working under exploitative conditions.
                    </li>
                    </ul>
                </DropdownContent>
                )}
            </Section>

            <Section>
                <DropdownTitle onClick={() => toggleSection("governance")}>
                Resource Governance and Corruption
                <ExpandButton>{expanded.governance ? "-" : "+"}</ExpandButton>
                </DropdownTitle>
                {expanded.governance && (
                <DropdownContent>
                    <ul>
                    <li>
                        <b>Illegal Mining Operations:</b> Many mines operate without oversight or regulation, often under the control of local elites or militias who exploit both resources and workers. These operations bypass state revenue systems, depriving the nation of potential funds for development.
                    </li>
                    <li>
                        <b>Government Complicity:</b> Reports have highlighted instances where government officials accept bribes to turn a blind eye to illegal activities or directly collaborate with armed groups controlling mining operations. This further erodes public trust and leaves communities vulnerable.
                    </li>
                    <li>
                        <b>Global Corporate Profiteering:</b> Multinational corporations often purchase minerals from intermediaries without questioning their origins, prioritizing cost-efficiency over ethical sourcing. This complicity perpetuates the violence and inequities in the mining regions.
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

