import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Col,
  Row,
  FormGroup,
  Input,
  Label,
  Table,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import DeleteModal from "./components/DeleteModal";
import ConfirmationModal from "./components/ConfirmationModal";
import DetailsModal from "./components/DetailsModal";

const GerenciarFaturas = () => {
  const [deleteModalIsOpen, setDeleteModal] = useState(false);
  const [confirmationModalIsOpen,setConfirmationModal] = useState(false);
  const [detailsModalIsOpen, setDetailsModal] = useState(false);
  const [ data, setData] = useState({}); 

  const toggleModalDelete = () => setDeleteModal(!deleteModalIsOpen);
  const toggleModalConfirmation = () => setConfirmationModal(!confirmationModalIsOpen);
  const toggleModalDetails = () => setDetailsModal(!detailsModalIsOpen);

  const handleDelete = () => {
    toggleModalDelete()
    toggleModalConfirmation(); 

  };
  // const setTable = ({id, firstname,lastname, birthday}) =>{
  //   return {id, firstname,lastname, birthday }
  // }

  const getData = () =>{ 
   
      axios.get('https://fakerapi.it/api/v1/persons?_quantity=10&_birthday_start=2005-01-01&_birthday_end=2005-02-11')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  }
  
  getData();
  return (
    <main>
      <section className="d-flex align-items-center justify-content-center">
        <Container
          className="bg-light border"
          fluid="sm"
          style={{ maxWidth: "50%", marginTop: "1rem" }}
        >
          <h1 style={{ padding: "1rem" }}>Pesquisa de Clientes</h1>
          <Row
            className="d-flex align-items-center justify-content-center"
            style={{ padding: "1rem" }}
          >
            <Col>
              <FormGroup>
                <Label for="exampleDate">Data Inicial</Label>
                <Input
                  id="exampleDate"
                  name="date"
                  placeholder="date placeholder"
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleDate">Data Final</Label>
                <Input
                  id="exampleDate"
                  name="date"
                  placeholder="date placeholder"
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col>
              <Button color="primary" style={{ marginTop: "1rem" }}>
                Pesquisar
              </Button>
            </Col>
          </Row>
          <Row style={{ padding: "1rem" }}>
            <Table>
              <thead>
                <tr>
                  <th>Nome do Cliente</th>
                  <th>Data de Nascimento</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>31/05/2000</td>
                  <td onClick={toggleModalDetails}>
                    <FontAwesomeIcon  style={{ color: '#0d6efd', cursor: 'pointer'}} icon={faEye} />
                  </td>
                  <td  onClick={toggleModalDelete}>
                    <FontAwesomeIcon style={{ color: '#0d6efd', cursor: 'pointer'}} icon={faTrashAlt} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </section>
      <DetailsModal
        isOpen={detailsModalIsOpen}
        toggleModalDetails={toggleModalDetails}
      />
      <DeleteModal
        isOpen={deleteModalIsOpen}
        toggleModalDelete={toggleModalDelete}
        onDelete={handleDelete}
      />
      <ConfirmationModal
        isOpen={confirmationModalIsOpen}
        toggleModalConfirmation={toggleModalConfirmation}
      />
    </main>
  );
};

export default GerenciarFaturas;


