import React from "react";
import { Card, CardTitle, CardImg, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = ({ dishes }) => {
  //   Menu component
  const menu = dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    </div>
  ));
  return <div className="row">{menu}</div>;
};

export default Menu;
