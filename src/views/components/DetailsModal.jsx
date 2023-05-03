import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Table,
  NavLink,
} from "reactstrap";

const DetailsModal = ({ isOpen, toggleModalDetails, onDownload }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggleModalDetails} size="xl">
      <ModalHeader toggle={toggleModalDetails}>
        Visualizar o Cliente
      </ModalHeader>
      <ModalBody>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="row">
            <span>
              <strong>Nome Completo</strong>
            </span>
            <span>Carine Barros</span>
          </Col>
          <Col className="row">
            <span>
              <strong>ID</strong>
            </span>
            <span>0</span>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="row">
            <span>
              <strong>Email</strong>
            </span>
            <span>krinecbs@gmail.com</span>
          </Col>
          <Col className="row">
            <span>
              <strong>Data de Nascimento</strong>
            </span>
            <span>31/05/2000</span>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="row">
            <span>
              <strong>Telefone</strong>
            </span>
            <span>+55 (83) 99999-9999</span>
          </Col>
          <Col className="row">
            <span>
              <strong>Endereço</strong>
            </span>
            <span>Rua blabla, 99, bairro, País</span>
          </Col>
        </Row>
        <Row style={{ paddingTop: "0.3rem" }}>
          {" "}
          <h5>Cartões de crédito</h5>
        </Row>
        <Row style={{ padding: "1rem" }}>
          <Table bordered style={{ padding: "1rem" }}>
            <thead>
              <tr>
                <th>Nome no cartão</th>
                <th>Número</th>
                <th>Validade</th>
                <th>Bandeira</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggleModalDetails}>
          Cancelar
        </Button>

        <NavLink
          href="https://static.snxpay.com/pdf/Fatura%20Elevaty.pdf"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button color="primary">Visualizar PDF</Button>
        </NavLink>
      </ModalFooter>
    </Modal>
  );
};

export default DetailsModal;
