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
import { Spinner } from "./Spinner";
import { Fade } from "react-reveal";
import { baseUrl } from "../shared/baseUrl";

const Menu = ({ dishes }) => {
  //   Menu component
  const RenderMenu = ({ dishes }) => {
    return dishes.dishes.map((dish) => (
      <div key={dish.id} className="col-12 col-md-6 mb-3">
        <Card>
          <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    ));
  };
  if (dishes.isLoading) {
    return (
      <div className="col-12">
        <div className="row">
          <Spinner />
        </div>
      </div>
    );
  }
  if (dishes.errMess) {
    return (
      <div className="col-12">
        <div className="row">
          <h4>{dishes.errMess}</h4>
        </div>
      </div>
    );
  }
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
      <Fade bottom>
        <div className="row">
          <RenderMenu dishes={dishes} />
        </div>
      </Fade>
    </div>
  );
};

export default Menu;
