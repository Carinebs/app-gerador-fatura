import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { formatDate } from "../utils/functions";
import {
  Button,
  Container,
  Col,
  Row,
  FormGroup,
  Input,
  Label,
  Table,
  Alert
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import DeleteModal from "./components/DeleteModal";
import ConfirmationModal from "./components/ConfirmationModal";
import DetailsModal from "./components/DetailsModal";

const GerenciarFaturas = () => {
  const [data, setData] = useState([]);
  const [deleteModalIsOpen, setDeleteModal] = useState(false);
  const [confirmationModalIsOpen, setConfirmationModal] = useState(false);
  const [initialBirthday, setInitialBirthday] = useState(null);
  const [finalBirthday, setFinalBirthday] = useState(null);
  const [detailsModalIsOpen, setDetailsModal] = useState(false);
  const [dataDetails, setDataDetails] = useState(null);
  const [index, setIndex] = useState(null);
  const [deleteLine, setDeleteLine] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleModalDelete = () => setDeleteModal(!deleteModalIsOpen);
  const toggleModalConfirmation = () =>
    setConfirmationModal(!confirmationModalIsOpen);
  const toggleModalDetails = () => setDetailsModal(!detailsModalIsOpen);

  const verifyDates = (date1, date2) => {
    const dateI = new Date(date1);
    const dateF = new Date(date2);
    if (dateF < dateI) {
      setErrorMsg("A data final deve ser maior que a data inicial!");
      return setError(true);
    } else {
      return setError(false);
    }
  };

  const handleDelete = () => {
    setDeleteLine([...deleteLine, index]);
    toggleModalConfirmation();
    toggleModalDelete();
  };

  const updateTable = async () => {
    verifyDates(initialBirthday, finalBirthday);
    try {
      const response = await axios.get(
        `https://fakerapi.it/api/v1/persons?_quantity=8&_birthday_start=${initialBirthday}&_birthday_end=${finalBirthday}`
      );
      setData(response.data);
      setDeleteLine([]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://fakerapi.it/api/v1/persons?_quantity=8`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  const alert = <Alert color="danger">{errorMsg}</Alert>;
  console.log("error", error);
  return (
    <main>
      <section className="d-flex align-items-center justify-content-center">
        <Container
          className={"bg-light border"}
          fluid="sm"
          style={{ maxWidth: "50%", maxHeight: "70%", marginTop: "1rem" }}
        >
          <h1 style={{ padding: "1rem" }}>Pesquisa de Clientes</h1>
          <Row
            className={"d-flex align-items-center justify-content-center"}
            style={{ padding: "1rem" }}
          >
            <Col>
              <FormGroup>
                <Label for="exampleDate">Data Inicial</Label>
                <Input
                  onChange={(e) => setInitialBirthday(e.target.value)}
                  name="date"
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleDate">Data Final</Label>
                <Input
                  onChange={(e) => setFinalBirthday(e.target.value)}
                  name="date"
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col>
              <Button
                color="primary"
                style={{ marginTop: "1rem" }}
                onClick={() => updateTable()}
              >
                Pesquisar
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className={"col-12"}> {error === true ? alert : ""} </Col>
          </Row>
          <Row style={{ padding: "1rem" }}>
            <Table style={{ height: "300px", overflow: "auto" }}>
              <thead>
                <tr>
                  <th>Nome do Cliente</th>
                  <th>Data de Nascimento</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.data &&
                  data.data.map((registro, index) => {
                    const { id, firstname, lastname, birthday } = registro;
                    return (
                      <tr
                        key={id}
                        className={deleteLine.includes(index) ? "d-none" : ""}
                      >
                        <td>{`${firstname} ${lastname}`}</td>
                        <td>{formatDate(birthday)}</td>
                        <td
                          onClick={() => {
                            setDataDetails(data.data[index]);
                            toggleModalDetails();
                          }}
                        >
                          <FontAwesomeIcon
                            style={{ color: "#0d6efd", cursor: "pointer" }}
                            icon={faEye}
                          />
                        </td>
                        <td
                          onClick={() => {
                            toggleModalDelete();
                            setIndex(index);
                          }}
                        >
                          <FontAwesomeIcon
                            style={{ color: "#0d6efd", cursor: "pointer" }}
                            icon={faTrashAlt}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Row>
        </Container>
      </section>
      <DetailsModal
        isOpen={detailsModalIsOpen}
        toggleModalDetails={toggleModalDetails}
        dataDetails={dataDetails}
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
