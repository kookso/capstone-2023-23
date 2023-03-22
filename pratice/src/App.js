import "./App.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import plantPic1 from "./img/plant1.jpg";
import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function App() {
  let data = {
    labels: ["7-8", "8-9", "9-10", "10-11", "11-12", "17-18", "18-19", "19-20"],
    datasets: [
      {
        type: "line",
        label: "온도",
        backgroundColor: "rgb(255, 99, 132)",
        data: [1, 4, 7, 2, 8, 9, 17, 7],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        type: "line",
        label: "습도",
        backgroundColor: "rgb(75, 192, 192)",
        data: [1, 2, 3, 4, 5, 6, 7, 8],
      },
    ],
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Smart Plant</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">User</Nav.Link>
            <Nav.Link href="#pricing">Setting</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <div className="main-bg"></div> */}

      {/* <Container>
        <Row>
          <Col>
            <img src={plantPic1} alt="plantPic" width="80%" />
            <h4>Plant Name</h4>
            <p>Description</p>
          </Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container> */}

      <div>
        <Line type="line" data={data} />
      </div>
    </div>
  );
}

export default App;
