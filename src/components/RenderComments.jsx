import React from "react";
import CommentForm from "./CommentForm";
import { CardText } from "reactstrap";
import { Spinner } from "./Spinner";

const RenderComments = ({
  comments,
  addComment,
  commentsLoading,
  commentsErrMess,
  dishId,
}) => {
  console.log("comments", comments);
  if (commentsLoading) return <Spinner />;
  else if (commentsErrMess)
    return (
      <div className="col-12 col-md-5 m-1">
        <h2>Comments</h2>
        <div>{commentsErrMess}</div>
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
  else {
    return (
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
  }
};

export default RenderComments;
