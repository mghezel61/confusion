import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

function Contact(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    telNo: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    telNo: "",
    email: "",
  });

  // Handle the form changes
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "checkbox") {
      setState({ ...state, agree: e.target.checked });
    } else {
      switch (name) {
        case "firstName":
          setState({ ...state, firstName: e.target.value });
          break;
        case "lastName":
          setState({ ...state, lastName: e.target.value });
          break;
        case "telNo":
          setState({ ...state, telNo: e.target.value });
          break;
        case "email":
          setState({ ...state, email: e.target.value });
          break;
        case "contactType":
          setState({ ...state, contactType: e.target.value });
          break;
        case "message":
          setState({ ...state, message: e.currentTarget.value });
          break;
        default:
          break;
      }
    }
  };

  // const onBlurValidation1 = (field) => (e) => {
  //   console.log("field", field);
  //   console.log("name", e.target.name);
  //   console.log("value", e.target.value);
  //   console.log("type", e.target.type);
  // };

  // Validation
  const onBlurValidation = (e) => {
    const name = e.target.name;
    const telReg = /^\d+$/;
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    switch (name) {
      case "firstName":
        console.log("Length", state.firstName.length);
        setErrors({ ...errors, firstName: "" });
        if (state.firstName && state.firstName.length < 3) {
          setErrors({
            ...errors,
            firstName: "First name should be >= 3 character",
          });
        } else if (state.firstName && state.firstName.length > 20) {
          setErrors({
            ...errors,
            firstName: "First name should be <= 20 character",
          });
        }
        break;
      case "lastName":
        setErrors({ ...errors, lastName: "" });
        if (state.lastName && state.lastName.length < 3) {
          setErrors({
            ...errors,
            lastName: "First name should be >= 3 character",
          });
        } else if (state.lastName && state.lastName.length > 20) {
          setErrors({
            ...errors,
            lastName: "Last name should be <= 20 character",
          });
        }

        break;
      case "telNo":
        setErrors({ ...errors, telNo: "" });
        if (state.telNo && !telReg.test(state.telNo)) {
          setErrors({
            ...errors,
            telNo: "Tel. Number should contain only numbers",
          });
        }
        break;
      case "email":
        setErrors({ ...errors, email: "" });
        if (state.email && !emailReg.test(state.email)) {
          setErrors({
            ...errors,
            email: "Please enter a valid email address!",
          });
        }
        break;
      default:
        break;
    }
  };

  // form handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(JSON.stringify(state));
    setState({
      firstName: "",
      lastName: "",
      telNo: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
    });
  };

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
          <Form onSubmit={onSubmitHandler}>
            <FormGroup row>
              <Label for="firstName" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  valid={!errors.firstName && state.firstName.length > 0}
                  invalid={errors.firstName}
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={state.firstName}
                  onChange={onChangeHandler}
                  onBlur={onBlurValidation}
                />
                <FormFeedback>{errors.firstName}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="lastName"
                  valid={!errors.lastName && state.lastName.length > 0}
                  invalid={errors.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  value={state.lastName}
                  onChange={onChangeHandler}
                  onBlur={onBlurValidation}
                />
                <FormFeedback>{errors.lastName}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="telNo" md={2}>
                Contact tel.
              </Label>
              <Col md={10}>
                <Input
                  type="tel"
                  id="telNo"
                  valid={!errors.telNo && state.telNo.length > 0}
                  invalid={errors.telNo}
                  name="telNo"
                  placeholder="Tel. Number"
                  value={state.telNo}
                  onChange={onChangeHandler}
                  onBlur={onBlurValidation}
                />
                <FormFeedback>{errors.telNo}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  id="email"
                  valid={!errors.email && state.email.length > 0}
                  invalid={errors.email}
                  name="email"
                  placeholder="E-mail"
                  value={state.email}
                  onChange={onChangeHandler}
                  onBlur={onBlurValidation}
                />
                <FormFeedback>{errors.email}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 6, offset: 2 }}>
                <FormGroup check>
                  <Label for="agree" check>
                    <Input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      checked={state.agree}
                      onChange={onChangeHandler}
                    />{" "}
                    <strong>May we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Input
                  type="select"
                  name="contactType"
                  value={state.contactType}
                  onChange={onChangeHandler}
                >
                  <option value="tel">Tel.</option>
                  <option value="email">Email</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="12"
                  value={state.message}
                  onChange={onChangeHandler}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary"
                />
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
