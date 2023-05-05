/* eslint-disable no-unused-vars */
import React from "react";
import about from "../../assets/about.jpg";
import { Card } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="">
      <Card className="text-center">
        <Card.Body className="">
          <Card.Title className="fs-1 fw-bold text-success">
            ABOUT US
          </Card.Title>
          <Card.Text className="w-50 mx-auto shadow p-2 rounded">
            Welcome to Chef Master! We are a team of passionate chefs who are
            dedicated to providing high-quality culinary experiences to our
            customers. Our journey began when our founder, Hafizur Rahman a
            classically trained chef with over 25 years of experience in the
            industry, decided to start his own business.
          </Card.Text>
        </Card.Body>
        <Card.Header>
          <img src={about} alt="" style={{ height: "70vh", width: "100%" }} />
        </Card.Header>
      </Card>
    </div>
  );
};

export default AboutUs;
