import React, { useState, useRef } from "react";
import NavLink from "react-router-dom/NavLink";
import { FcHome, FcInfo, FcMenu, FcContacts } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";

const Header = () => {
  const loginFormValues = {
    username: useRef(""),
    password: useRef(""),
    rememberMe: useRef(false),
  };

  const [state, setState] = useState({
    isNavOpen: false,
    isModalOpen: false,
  });

  // toggle nav
  const toggleNav = () => {
    setState({ ...state, isNavOpen: !state.isNavOpen });
  };
  const toggleModal = () => {
    setState({ ...state, isModalOpen: !state.isModalOpen });
  };

  // handle login form
  const loginHandler = (e) => {
    const username = loginFormValues.username.current.value;
    const password = loginFormValues.password.current.value;
    const rememberMe = loginFormValues.rememberMe.current.checked;
    alert(username + " ," + password + " ," + rememberMe);

    e.preventDefault();
  };
  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Restaurant Confusion"
            />
          </NavbarBrand>
          <Collapse isOpen={state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link btn-icon" to="/home">
                  <span>
                    <FcHome size="1.5rem" />
                  </span>
                  <span>Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link btn-icon" to="/aboutus">
                  <span>
                    <FcInfo size="1.5rem" />
                  </span>
                  <span>About Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link btn-icon" to="/menu">
                  <span>
                    <FcMenu size="1.5rem" />
                  </span>
                  <span>Menu</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link btn-icon" to="/contactus">
                  <span>
                    <FcContacts size="1.5rem" />
                  </span>
                  <span>Contact Us</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button className="btn-icon" onClick={toggleModal}>
                <span>
                  <FcPortraitMode size="1.5rem" />
                </span>
                <span>Login</span>
              </Button>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Restaurant Confusion</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, quam.
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
      {/* Modal */}
      <Modal isOpen={state.isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={loginHandler}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                innerRef={loginFormValues.username}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                innerRef={loginFormValues.password}
              />
            </FormGroup>
            <FormGroup check>
              <Label check for="rememberMe">
                <Input
                  type="checkbox"
                  id="rememberMe"
                  innerRef={loginFormValues.rememberMe}
                  name="rememberMe"
                />
                Remember Me
              </Label>
            </FormGroup>
            <FormGroup>
              <Button type="submit" id="submit" className="custom-bg-primary">
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Header;
