import React from "react";
import { Fade } from "react-reveal";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
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
      <Fade top>
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? (
              <CardSubtitle>{item.designation}</CardSubtitle>
            ) : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </Fade>
    );
};
const Home = ({
  dish,
  leader,
  promotion,
  dishesLoading,
  dishesError,
  promotionsLoading,
  promotionsError,
  leadersLoading,
  leadersError,
}) => {
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
          <RenderCard
            item={promotion}
            isLoading={promotionsLoading}
            errMess={promotionsError}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={leader}
            isLoading={leadersLoading}
            errMess={leadersError}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
