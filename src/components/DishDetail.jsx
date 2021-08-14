import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import RenderComments from "./RenderComments";
import { Spinner } from "./Spinner";
import { baseUrl } from "../shared/baseUrl";

const DishDetail = (props) => {
  console.log("props", props);
  const { dish } = props;

  // render dish
  const RenderDish = ({ dish }) => {
    return (
      <>
        <div className=" col-12 col-md-6 mb-3">
          <Card>
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      </>
    );
  };

  // Render the the dish details
  if (props.isLoading) {
    return (
      <div className="col-12">
        <div className="row">
          <Spinner />
        </div>
      </div>
    );
  }
  if (props.errMess) {
    return (
      <div className="col-12">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  if (dish !== null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <h3>{dish.name}</h3>
        <hr />
        <div className="row">
          <RenderDish dish={dish} />
          <RenderComments
            comments={props.comments}
            addComment={props.addComment}
            dishId={dish.id}
            commentsLoading={props.commentsLoading}
            commentsErrMess={props.commentsErrMess}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
