/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../../public/banner.json";
import Lottie from "lottie-react";
import { Button, Col, Container, Row } from "react-bootstrap";
import LeftSide from "../shared/LeftSide/LeftSide";
import RightSide from "../shared/RightSide/RightSide";
import Services from "../Services/Services";
import AboutUs from "../AboutUS/AboutUs";

const Banner = () => {
  return (
    <div>
      <Container style={{ height: "90vh" }}>
        <Row>
          <Col lg={4} className="d-flex align-items-center">
            <div>
              <h2>
                Looking For <span className="text-success">Master Chef</span>
              </h2>
              <p>
                Food is maybe the only universal things that really has the
                power to brings everyone together. No matter what culture,
                everywhere around the world people get together to eat food
              </p>
              <Button variant="outline-success">Get started</Button>
            </div>
          </Col>
          <Col lg={8} className="d-flex justify-content-end">
            <div className="w-75">
              <Lottie animationData={banner} loop={true} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <h3 className="text-center fw-bold  text-success fs-1">Our Chefs</h3>
        <Row>
          <Col lg={8}>
            <LeftSide></LeftSide>
          </Col>
          <Col lg={4}>
            <RightSide></RightSide>
          </Col>
        </Row>
      </Container>
      <Container>
        <Services></Services>
      </Container>

      <Container className="mb-4">
        <AboutUs></AboutUs>
      </Container>
    </div>
  );
};

export default Banner;
