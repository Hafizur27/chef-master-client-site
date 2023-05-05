/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Card } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { name, recipe_number, likes, experience, image } = chef.chef;
  return (
    <div className="">
      <Card style={{ width: "13rem" }}>
        <LazyLoad height={200}>
          <Card.Img variant="top" src={image} />
        </LazyLoad>

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Numbers of recipes : {recipe_number}</Card.Text>
          <Card.Text>Experience: {experience}</Card.Text>
          <Card.Text>like : {likes}</Card.Text>
          <Link
            className="btn btn-success"
            variant="success"
            size="sm"
            to={`/details/${chef.category_id}`}
          >
            Recipe
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Chef;
