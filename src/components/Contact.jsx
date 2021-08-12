/* eslint-disable react/jsx-pascal-case */
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Label,
  Col,
  Button,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

function Contact(props) {
  // form handler
  function onSubmitHandler(values) {
    alert(JSON.stringify(values));
  }

  // validation functions
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(val);
  const validEmail = (val) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <h3>Contact Us</h3>
      <hr />
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" href="tel:+85212345678" className="btn btn-info">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us Your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <LocalForm onSubmit={onSubmitHandler}>
            <Row className="form-group">
              <Label for="firstName" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".firstName"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
                <Errors
                  className="text-danger"
                  model=".firstName"
                  show="touched"
                  messages={{
                    required: "required, ",
                    minLength: "Must be greater than 2 char.",
                    maxLength: "Must be smaller than 16 char.",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="lastName" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".lastName"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(20),
                  }}
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name"
                />
                <Errors
                  className="text-danger"
                  model=".lastName"
                  show="touched"
                  messages={{
                    required: "required, ",
                    minLength: "Must be greater than 2 char.",
                    maxLength: "Must be smaller than 21 char.",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="telNo" md={2}>
                Contact tel.
              </Label>
              <Col md={10}>
                <Control.text
                  model=".telNo"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                    isNumber,
                  }}
                  id="telNo"
                  name="telNo"
                  className="form-control"
                  placeholder="Tel. No."
                />
                <Errors
                  className="text-danger"
                  model=".telNo"
                  show="touched"
                  messages={{
                    required: "required, ",
                    minLength: "Must be greater than 4 number.",
                    maxLength: "Must be smaller than 16 number.",
                    isNumber: "Please enter a valid Tel. number",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Control.text
                  model=".email"
                  validators={{
                    required,
                    validEmail,
                  }}
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="example@example.exam"
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "required, ",
                    validEmail: "Please enter a valid email address",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 6, offset: 2 }}>
                <div className="form-check">
                  <Label for="agree" check>
                    <Control.checkbox
                      model=".agree"
                      name="agree"
                      id="agree"
                      className="form-check-input"
                    />{" "}
                    <strong>May we contact you?</strong>
                  </Label>
                </div>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Control.select
                  model=".contactType"
                  name="contactType"
                  className="form-control"
                >
                  <option value="tel">Tel.</option>
                  <option value="email">Email</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label for="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="12"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" className="btn custom-bg-primary">
                  Send Message
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </div>
      </div>
    </div>
  );
}

export default Contact;
