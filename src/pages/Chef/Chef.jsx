/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { name, recipe_number, likes, experience, image, _id } = chef.chef;
  return (
    <div className="">
      <Card style={{ width: "13rem" }}>
        <Card.Img variant="top" src={image} />
        <LazyLoadImage height={30}></LazyLoadImage>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Experience: {experience}</Card.Text>
          <Card.Text>Favorite : {likes}</Card.Text>
          <Link
            className="btn btn-success"
            variant="success"
            size="sm"
            to={`/details/${chef._id}`}
          >
            Recipe
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Chef;
