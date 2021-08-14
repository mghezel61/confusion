/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Label,
  Col,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const CommentForm = ({ dishId, postComment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  //   submit handler
  const onSubmitHandler = (values) => {
    toggleModal();
    postComment(dishId, values.rating, values.author, values.comment);
  };

  //   Validation functions
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

  return (
    <div>
      <Button
        className="btn-outline-secondary mt-3"
        style={{ display: "flex" }}
        onClick={toggleModal}
      >
        <GoPencil size="1.5rem" />
        Submit Comment
      </Button>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => onSubmitHandler(values)}>
            <Row>
              <Label for="rating" md={3}>
                Rating
              </Label>
              <Col md={12}>
                <Control.select
                  model=".rating"
                  className="form-control"
                  id="rating"
                  name="rating"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Control.select>
              </Col>
            </Row>
            <Row>
              <Label for="author" md={4}>
                Your Name
              </Label>
              <Col md={12}>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                  className="form-control"
                  placeholder="Enter Your Name"
                />
                <Errors
                  model=".name"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Required, ",
                    minLength: "Your Name should be greater than 2 char.",
                    maxLength: "Your Name should be smaller than 16 char.",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="comment" md={2}>
                Comment
              </Label>
              <Col md={12}>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  placeholder="Enter your comment"
                  rows="8"
                  className="form-control"
                />
              </Col>
            </Row>
            <Button type="submit" id="submit" className="custom-bg-primary">
              Submit
            </Button>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CommentForm;
