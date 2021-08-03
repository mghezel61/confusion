import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";

const DishDetail = ({ dish, setSelectedDish }) => {
  // render comments
  const RenderComments = ({ comments }) => (
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
    </div>
  );
  // render dish
  const RenderDish = ({ dish }) => {
    return (
      <>
        <div className=" col-12 col-md-5 m-1">
          <Card onClick={() => setSelectedDish(null)}>
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
  if (dish !== null) {
    return (
      <div className="row">
        <RenderDish dish={dish} />
        <RenderComments comments={dish.comments} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
