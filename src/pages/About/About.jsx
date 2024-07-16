import React from "react";
import { Header } from "../../components/Header/Header";
import { Landing } from "../../components/Landing/Landing";

import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowUpRightFromSquare,
  faLayerGroup,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../components/Footer/Footer";

export const About = () => {
  return (
    <>
      <Header />
      <Landing title={"About Us"} />
      <div className="awesome-features">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-3">
              <div className="single-feature">
                <h2>Awesome Features</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                  ipsa eaque, praesentium sequi fugit quisquam excepturi, natus
                  maiores ut assumenda officia voluptates, non unde laboriosam
                  explicabo dolorum vel est doloribus.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single-feature">
                <div className="single-feature-container">
                  <span>
                    <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>
                  </span>
                  <h4>Better Future</h4>
                  <p>
                    Offering diverse programs, our center fosters deep learning,
                    guiding you towards abundant knowledge and success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single-feature">
                <div className="single-feature-container">
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                    ></FontAwesomeIcon>
                  </span>
                  <h4>Qualified Trainers</h4>
                  <p>
                    Our center boasts top-notch trainers, guiding you towards
                    mastery with expertise and dedication.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single-feature">
                <div className="single-feature-container">
                  <span>
                    <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
                  </span>
                  <h4>Job Oppurtunity</h4>
                  <p>
                    Unlock doors to exciting career paths with abundant job
                    opportunities available upon course completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="number-counter">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="single-number-counter">
                <span className="counter">1024</span>
                <h4>All Teachers</h4>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single-number-counter">
                <span className="counter">1024</span>
                <h4>All Students</h4>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single-number-counter">
                <span className="counter">1024</span>
                <h4>All Courses</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tesimonials" id="tesimonials">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title">
                <p>Tesimonials</p>
                <h2>Happy Students</h2>
              </div>
            </div>
          </div>
          <div className="row tesimonials-container">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="slider">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore unde sequi amet magnam officiis ratione laudantium
                  mollitia, modi voluptatum perferendis, in quisquam, numquam
                  voluptatibus perspiciatis illo facilis architecto ipsum quas?
                </p>
                <h4>John Malak</h4>
                <h5>Sr. Web designer</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="slider">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore unde sequi amet magnam officiis ratione laudantium
                  mollitia, modi voluptatum perferendis, in quisquam, numquam
                  voluptatibus perspiciatis illo facilis architecto ipsum quas?
                </p>
                <h4>Sarah Klody</h4>
                <h5>Sr. Web designer</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="slider">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore unde sequi amet magnam officiis ratione laudantium
                  mollitia, modi voluptatum perferendis, in quisquam, numquam
                  voluptatibus perspiciatis illo facilis architecto ipsum quas?
                </p>
                <h4>John Malak</h4>
                <h5>Sr. Web designer</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="slider">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore unde sequi amet magnam officiis ratione laudantium
                  mollitia, modi voluptatum perferendis, in quisquam, numquam
                  voluptatibus perspiciatis illo facilis architecto ipsum quas?
                </p>
                <h4>John Malak</h4>
                <h5>Sr. Web designer</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="slider">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore unde sequi amet magnam officiis ratione laudantium
                  mollitia, modi voluptatum perferendis, in quisquam, numquam
                  voluptatibus perspiciatis illo facilis architecto ipsum quas?
                </p>
                <h4>John Malak</h4>
                <h5>Sr. Web designer</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="slider">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore unde sequi amet magnam officiis ratione laudantium
                  mollitia, modi voluptatum perferendis, in quisquam, numquam
                  voluptatibus perspiciatis illo facilis architecto ipsum quas?
                </p>
                <h4>John Malak</h4>
                <h5>Sr. Web designer</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="slider">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore unde sequi amet magnam officiis ratione laudantium
                  mollitia, modi voluptatum perferendis, in quisquam, numquam
                  voluptatibus perspiciatis illo facilis architecto ipsum quas?
                </p>
                <h4>John Malak</h4>
                <h5>Sr. Web designer</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="control">
          <div className="arrow next">
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </div>
          <div className="arrow prev">
            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
