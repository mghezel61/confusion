import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";

const DishDetail = ({ dish, setSelectedDish }) => {
  // render dish
  const renderDish = (dish) => {
    if (dish !== null) {
      return (
        <div className="row">
          <div className=" col-12 col-md-5 m-1">
            <Card onClick={() => setSelectedDish(null)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h2>Comments</h2>
            {dish.comments.map((comment) => (
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
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return renderDish(dish);
};

export default DishDetail;
