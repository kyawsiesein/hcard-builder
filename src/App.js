import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import Form from "./components/Form";
import Preview from "./components/Preview";
import "./styles/app.scss";

const App = () => {
  const [details, setDetails] = useState({
    givenName: "",
    surname: "",
    email: "",
    phone: "",
    houseName: "",
    street: "",
    postcode: "",
    suburb: "",
    state: "",
    country: "",
    imagePath: ""
  });

  const onChange = event => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  const onUploadFile = event => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      const path = fileReader.result;
      setDetails({ ...details, imagePath: path });
    };
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} className="hcard-form">
          <h1 className="hcard-header">hCard Builder</h1>
          <Form details={details} onChange={onChange} onUploadFile={onUploadFile} />
        </Col>
        <Col xs={12} md={6} className="hcard-preview">
          <Preview details={details} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
