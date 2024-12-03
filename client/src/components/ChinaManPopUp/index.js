import React, { useState } from "react";
import { Dim, Modal, CloseButton, NextButton, Title, Blurb, Img, Row, Minerals, Section, DropdownTitle, DropdownContent, ExpandButton, ScrollCont } from "../TaiwanPopUp/ManPopUpElements";
import ThisImage from "../../assets/fox-img.jpg";

const ChinaManPopUp = ({ goToNext, setOpenPopup, location }) => {

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
          <Title>Manufacturing in China</Title>
          
        <ScrollCont>
        <Blurb>
        China is home to Foxconn, the largest contract electronics manufacturer in the world and the primary assembler of iPhones. Foxconn’s assembly plants integrate components sourced globally, such as semiconductors, lithium-ion batteries, and display panels, into the sleek, functional devices we use every day. These facilities represent the nexus of advanced manufacturing and labor-intensive processes.
        </Blurb>
        <Row>
        <a href="https://www.globaltimes.cn/page/202301/1283118.shtml" target="_blank" rel="noreferrer">
            <Img src={ThisImage} className="tai"></Img>
        </a>
        <Minerals>
            <ul>
            <li>
                <b>Semiconductors:</b> Shipped from manufacturers like TSMC in Taiwan, these chips power the iPhone's processing and connectivity capabilities.
            </li>
            <li>
                <b>Lithium-Ion Batteries:</b> Supplied by global partners, these batteries are integrated to provide long-lasting, rechargeable energy.
            </li>
            <li>
                <b>Glass Screens:</b> Gorilla Glass from Corning is delivered to Foxconn for assembly, ensuring scratch resistance and durability.
            </li>
            <li>
                <b>Aluminum Casings:</b> Precision-engineered casings are brought to the plants for final device assembly, sourced from bauxite-refining facilities worldwide.
            </li>
            </ul>
        </Minerals>
        </Row>
        <Section>
        <DropdownTitle onClick={() => toggleSection("assemblyprocess")}>
            Advanced Assembly Processes
            <ExpandButton>{expanded.assemblyprocess ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.assemblyprocess && (
            <DropdownContent>
            <p>
                Foxconn’s assembly plants in cities like Zhengzhou, often referred to as “iPhone City,” are highly automated yet rely on intensive human labor to produce millions of devices annually:
            </p>
            <ul>
                <li>
                <b>Precision Engineering:</b> Robots and advanced machinery perform tasks like soldering components and attaching screens with unparalleled accuracy.
                </li>
                <li>
                <b>Human Labor:</b> Workers assemble intricate components, test functionality, and ensure quality control at every stage of production.
                </li>
                <li>
                <b>Mass Scale:</b> Foxconn's facilities can produce hundreds of thousands of iPhones daily, meeting global demand.
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
                <b>Key Manufacturing Hub:</b> Foxconn assembles the majority of the world’s iPhones, solidifying China’s role in global tech production.
                </li>
                <li>
                <b>Export Power:</b> Finished iPhones are shipped worldwide, making Foxconn central to Apple's global logistics and supply chain.
                </li>
                <li>
                <b>Geopolitical Relevance:</b> The reliance on Foxconn’s Chinese facilities highlights supply chain vulnerabilities, driving discussions on diversification and resilience.
                </li>
            </ul>
            </DropdownContent>
        )}
        </Section>

        <Section>
        <DropdownTitle onClick={() => toggleSection("labor")}>
            Labor and Working Conditions
            <ExpandButton>{expanded.labor ? "-" : "+"}</ExpandButton>
        </DropdownTitle>
        {expanded.labor && (
            <DropdownContent>
            <ul>
                <li>
                <b>Intensive Workload:</b> Workers often face long hours during peak production seasons to meet global demand for new iPhone launches.
                </li>
                <li>
                <b>Wages and Benefits:</b> Foxconn provides housing and benefits but has faced criticism over wage levels and working conditions.
                </li>
                <li>
                <b>Labor Automation:</b> Foxconn continues to invest in automation to reduce costs, potentially reducing its reliance on human labor in the future.
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
                <b>Energy Use:</b> Foxconn has committed to improving energy efficiency and increasing the use of renewable energy in its operations.
                </li>
                <li>
                <b>Waste Management:</b> The company has implemented recycling programs for manufacturing waste and defective parts.
                </li>
                <li>
                <b>Labor Rights Pressure:</b> NGOs and governments continue to monitor and push for improvements in working conditions at Foxconn’s facilities.
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

export default ChinaManPopUp;