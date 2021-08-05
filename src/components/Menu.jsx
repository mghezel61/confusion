import React from "react";
import {
  Card,
  CardTitle,
  CardImg,
  CardImgOverlay,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const Menu = ({ dishes }) => {
  //   Menu component
  const RenderMenu = ({ dishes }) => {
    return dishes.map((dish) => (
      <div key={dish.id} className="col-12 col-md-6 mb-3">
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
  };
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <h3>Menu</h3>
      <hr />
      <div className="row">
        <RenderMenu dishes={dishes} />
      </div>
    </div>
  );
};

export default Menu;
