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
import CommentForm from "./CommentForm";
import { Spinner } from "./Spinner";

const DishDetail = (props) => {
  const { dish, comments } = props;

  // render comments
  const RenderComments = ({ comments, addComment, dishId }) => (
    <div className="col-12 col-md-5 m-1">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <li className="list-unstyled" key={comment.id}>
          <CardText className="my-4">{comment.comment}</CardText>
          <CardText>
            -- {comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </CardText>
        </li>
      ))}
      <CommentForm dishId={dishId} addComment={addComment} />
    </div>
  );
  // render dish
  const RenderDish = ({ dish }) => {
    return (
      <>
        <div className=" col-12 col-md-6 mb-3">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
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
  if (props.errorMess) {
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
            comments={comments}
            addComment={props.addComment}
            dishId={dish.id}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
