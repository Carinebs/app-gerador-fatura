import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


const DetailsModal = ({ isOpen, toggleModalDetails, onDownload }) => {

    return(
        <Modal isOpen={isOpen} toggle={toggleModalDetails}>
        <ModalHeader toggle={toggleModalDetails}>Visualizar o Cliente</ModalHeader>
        <ModalBody>
          hgfhgfhghgfhgfhg
        </ModalBody>
        <ModalFooter>
          <Button color="secondary"  onClick={toggleModalDetails}>
            Cancelar
          </Button>
          <Button color="primary"  onClick={onDownload}>
            Visualizar PDF
          </Button>{" "}
        </ModalFooter>
      </Modal>
    );
        
    


}

export default DetailsModal; 