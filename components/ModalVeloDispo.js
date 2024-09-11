import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
const ModalVeloDispo = ({ isModalvisible, handelCklick }) => {
  return (
    <div>
      <Modal
        show={isModalvisible}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handelCklick}
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton onClick={handelCklick}>
          <Modal.Title id="contained-modal-title-vcenter">
            Projet RNCP 6
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="title">
            <h4>VelodispØ</h4>
          </div>
          <p>
            projet a ete developpé par 3 personne en fin de formation a La
            Capsule pour la validation de titre RNCP 6!
          </p>
          <div className="QrCodeContainer">
            <p>
              Scannez le code QR suivant pour prévisualiser notre Application
            </p>
            <Image
              className="logo"
              src="/velodispoQRcode.png"
              width={200}
              height={200}
              alt="QR code expo pour le projet velodispo"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handelCklick}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalVeloDispo;
