/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Row } from "react-bootstrap";
import best_1 from "../../assets/best-1.jpeg";
import best_2 from "../../assets/best-2.jpg";
import best_3 from "../../assets/best-3.jpg";
import best_4 from "../../assets/best-4.jpg";
import LazyLoad from "react-lazyload";

const Services = () => {
  return (
    <div className="my-4">
      <h4 className="text-center fw-bold  w-25 mx-auto p-2 rounded text-success fs-3 my-4">
        {" "}
        Why we best{" "}
      </h4>

      <div className="d-lg-flex gap-4">
        <Card style={{ width: "16rem" }}>
          <LazyLoad height={200}>
            <Card.Img variant="top" src={best_1} className="img-fluid" />
          </LazyLoad>
          <Card.Body>
            <Card.Title>EXPERIENCED CHEFS</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <LazyLoad height={200}>
            <Card.Img variant="top" src={best_2} className="img-fluid" />
          </LazyLoad>
          <Card.Body>
            <Card.Title>ORIGINAL RECIPES</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <LazyLoad height={200}>
            <Card.Img variant="top" src={best_3} className="img-fluid" />
          </LazyLoad>
          <Card.Body>
            <Card.Title>FRESH INGREDIENTS</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <LazyLoad height={200}>
            <Card.Img variant="top" src={best_4} className="img-fluid" />
          </LazyLoad>
          <Card.Body>
            <Card.Title>CONVENIENT LOCATION</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Services;
