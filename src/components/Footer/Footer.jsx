import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-3" data-aos='fade-left'>
            <div className="single-footer-caption">
              <div className="footer-logo">
                <a href="index.html">
                  <img src={require("../../assets/logo.jpeg")} alt="logo" />
                </a>
              </div>
              <div className="footer-title">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                  cum nemo quo sint aliquam natus blanditiis, dolorem veritatis
                  corrupti doloribus totam, eos beatae rerum corporis architecto
                  id. Deleniti, assumenda. Quas.
                </p>
              </div>
              <div className="footer-social">
                <a href="!#">
                  <i className="fa-brands fa-github" />
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                <a href="!#">
                  <i className="fa-brands fa-linkedin" />
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3" data-aos='fade-left'>
            <div className="single-footer-caption">
              <div className="title">
                <h4>Useful Links</h4>
                <ul className="p-0">
                  <li>
                    <Link to="/all_courses">Courses</Link>
                  </li>
                  <li>
                    <a href="!#">Events</a>
                  </li>
                  <li>
                    <a href="!#">News</a>
                  </li>
                  <li>
                    <a href="!#">Teachers</a>
                  </li>
                  <li>
                    <a href="!#">Links</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3" data-aos='fade-left'>
            <div className="single-footer-caption">
              <div className="title">
                <h4>Quick menu</h4>
                <ul className="p-0">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <a href="about.html#tesimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="!#">Services</a>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <a href="!#">Facts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3" data-aos='fade-left'>
            <div className="single-footer-caption">
              <div className="title">
                <h4>Contact Us</h4>
                <ul className="p-0 contact-info">
                  <li>
                    <p>
                      <span>Address: </span>
                      Hath of it fly signs bear be one blessed after
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Phone: </span>
                      +(20) 1234567890
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Email: </span>
                      Example@domain.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="copyright">
                <p>
                  Copyright ©2024 All rights reserved | This website is made
                  with
                  <span>
                    <FontAwesomeIcon icon={faHeart}> </FontAwesomeIcon>
                  </span>
                  by
                  <a href="!#"> Alx Team City</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
