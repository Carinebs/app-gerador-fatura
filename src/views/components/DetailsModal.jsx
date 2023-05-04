import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  maskCardNumber,
  formatAdress,
  formatDate,
} from "../../utils/functions";
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

const DetailsModal = ({ isOpen, toggleModalDetails, dataDetails }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://fakerapi.it/api/v1/credit_cards?_quantity=3`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  const { id, firstname, lastname, birthday, email, phone, address } =
    dataDetails ? dataDetails : {};
  return (
    dataDetails && (
      <Modal isOpen={isOpen} toggle={toggleModalDetails} size="xl">
        <ModalHeader toggle={toggleModalDetails}>
          Visualizar o Cliente
        </ModalHeader>
        <ModalBody>
          <Row className={"d-flex align-items-center justify-content-center"}>
            <Col className={"row"}>
              <span>
                <strong>Nome Completo</strong>
              </span>
              <span>{`${firstname} ${lastname}`}</span>
            </Col>
            <Col className={"row"}>
              <span>
                <strong>ID</strong>
              </span>
              <span>{id ?? ""}</span>
            </Col>
          </Row>
          <Row className={"d-flex align-items-center justify-content-center"}>
            <Col className="row">
              <span>
                <strong>Email</strong>
              </span>
              <span>{email ?? ""}</span>
            </Col>
            <Col className={"row"}>
              <span>
                <strong>Data de Nascimento</strong>
              </span>
              <span>{formatDate(birthday ?? "") ?? ""}</span>
            </Col>
          </Row>
          <Row className={"d-flex align-items-center justify-content-center"}>
            <Col className={"row"}>
              <span>
                <strong>Telefone</strong>
              </span>
              <span>{phone ?? ""}</span>
            </Col>
            <Col className={"row"}>
              <span>
                <strong>Endereço</strong>
              </span>
              <span>{formatAdress(address ?? "") ?? ""}</span>
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
                {data &&
                  data.data &&
                  data.data.map((registro, index) => {
                    const { id, owner, number, expiration, type } = registro;
                    return (
                      <tr key={id}>
                        <td>{owner}</td>
                        <td>{maskCardNumber(number)}</td>
                        <td>{expiration}</td>
                        <td>{type}</td>
                      </tr>
                    );
                  })}
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
    )
  );
};

export default DetailsModal;
