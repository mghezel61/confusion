import React from "react";
import {
  AiFillGooglePlusSquare,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillRedEnvelope,
} from "react-icons/ai";

import { BsFillEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a href="http://google.com/+">
                <AiFillGooglePlusSquare size="3rem" color="red" />
              </a>
              <a href="http://www.facebook.com/profile.php?id=">
                <AiFillFacebook size="3rem" color="darkblue" />
              </a>
              <a href="http://www.linkedin.com/in/">
                <AiFillLinkedin size="3rem" />
              </a>
              <a href="http://twitter.com/">
                <AiFillTwitterSquare
                  size="3rem"
                  color="rgba(29,161,242,1.00)"
                />
              </a>
              <a href="http://youtube.com/">
                <AiFillYoutube size="3rem" color="red" />
              </a>
              <a href="mailto:">
                <BsFillEnvelopeFill size="3rem" />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2021 Restaurant Confusion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
