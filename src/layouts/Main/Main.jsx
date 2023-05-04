/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../pages/shared/Header/Header";
import Footer from "../../pages/shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "../../pages/shared/LeftSide/LeftSide";
import RightSide from "../../pages/shared/RightSide/RightSide";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container >
        <Row>
          <Col lg={8}>
            <LeftSide>
                
            </LeftSide>
            </Col>
          <Col lg={4}><RightSide></RightSide></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
