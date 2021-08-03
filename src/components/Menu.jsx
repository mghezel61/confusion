import React from "react";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardText,
} from "reactstrap";

const Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);
  //   render dish
  const renderDish = (dish) => {
    if (dish !== null) {
      return (
        <Card onClick={() => setSelectedDish(null)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  };
  //   Menu component
  const menu = dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-6 mt-md-4">
      <Card onClick={() => setSelectedDish(dish)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  ));
  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row m-3">{renderDish(selectedDish)}</div>
    </div>
  );
};

export default Menu;
