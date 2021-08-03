import React from "react";
import { useState } from "react";
import { Card, CardTitle, CardImg, CardImgOverlay } from "reactstrap";
import DishDetail from "./DishDetail";

const Menu = ({ dishes, setSelectedDish }) => {
  //   Menu component
  const menu = dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card onClick={() => setSelectedDish(dish)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  ));
  return <div className="row">{menu}</div>;
};

export default Menu;
