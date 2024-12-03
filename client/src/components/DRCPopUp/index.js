import React, { useEffect, useState } from "react";
import { Dim, PhoneImage, Modal, CloseButton, NextButton } from "./PopUpElements";
import Phone from "../../assets/phonecases/drc-phonecase.png";

const DRCPopUp = ({ goToNext, setOpenPopup, location }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dim>
      <PhoneImage src={Phone} alt={`Phone case for ${location.name}`} />
      {showModal && (
        <Modal>
          <h2>{location.name}</h2>
          <CloseButton onClick={() => setOpenPopup(false)} />
          <NextButton
            onClick={() => {
              setOpenPopup(false);
              goToNext();
            }}
          />
        </Modal>
      )}
    </Dim>
  );
};

export default DRCPopUp;

