import React from "react";
import { Button, Container } from "react-bootstrap";
const Modal = ({ isModalvisible }) => {
  return (
    <div className="sectionModal">
      {isModalvisible && <Container></Container>}
    </div>
  );
};

export default Modal;
