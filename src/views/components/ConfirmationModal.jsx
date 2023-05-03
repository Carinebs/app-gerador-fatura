import React from "react";
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ConfirmationModal = ({ isOpen, toggleModalConfirmation }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggleModalConfirmation}>
      <ModalHeader toggle={toggleModalConfirmation}></ModalHeader>
      <ModalBody>
      Cliente apagado com sucesso!
      </ModalBody>
      <ModalFooter>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
