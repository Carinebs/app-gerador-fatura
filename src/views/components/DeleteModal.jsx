import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DeleteModal = ({ isOpen, toggleModalDelete, onDelete }) => {

  return (
    <Modal isOpen={isOpen} toggle={toggleModalDelete}>
      <ModalHeader toggle={toggleModalDelete}>Apagar</ModalHeader>
      <ModalBody>
        Você tem certeza que quer apagar os dados do cliente?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary"  onClick={toggleModalDelete}>
          Cancelar
        </Button>
        <Button color="primary"  onClick={onDelete}>
          Apagar
        </Button>{" "}
      </ModalFooter>
    </Modal>
  );
};

export default DeleteModal;
