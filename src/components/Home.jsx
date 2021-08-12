import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Spinner } from "./Spinner";

const RenderCard = ({ item, isLoading, errMess }) => {
  if (isLoading) {
    return (
      <div className="col-12">
        <div className="row">
          <Spinner />
        </div>
      </div>
    );
  } else if (errMess) {
    return (
      <div className="col-12">
        <div className="row">
          <h4>{errMess}</h4>
        </div>
      </div>
    );
  } else
    return (
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
};
const Home = ({ dish, leader, promotion, dishesLoading, dishesError }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={dish}
            isLoading={dishesLoading}
            errMess={dishesError}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  );
};

export default Home;
