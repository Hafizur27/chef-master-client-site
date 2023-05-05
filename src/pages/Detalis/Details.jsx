/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Details = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const recipeDetails = useLoaderData();
  const { chef } = recipeDetails && recipeDetails[0];
  const { name, recipe_number, likes, experience, image, details } = chef;

  const showToastMessage = () => {
    toast.success("the recipe is add to favorite !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setIsFavorite(true);
  };

  return (
    <div>
      <Container className="my-5">
        <Card>
          <Card.Img variant="top" src={image} style={{ height: "80vh" }} />
          <Card.Header className="w-50">{name}</Card.Header>
          <Card.Body>
            <Card.Title>Experience : {experience}</Card.Title>
            <Card.Text>Total Recipe : {recipe_number} items</Card.Text>
            <Card.Text>Likes : {likes}</Card.Text>

            <Card.Text className="">
              {" "}
              <span className="fs-5 fw-semibold">details chef : </span>
              {details}
            </Card.Text>
            <Card.Text>Ratings : 4.5 star</Card.Text>
            <Button onClick={showToastMessage} className="bg-success"  disabled={isFavorite}>
              Favorite
            </Button>
            <ToastContainer />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Details;
