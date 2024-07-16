import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  faBookOpenReader,
  faCertificate,
  faDollarSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./who_edu.css";

const WhoEdu = () => {
  return (
    <div className="who-edu">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 info-part">
            <div className="text">
              <div className="title">
                <h2>EDU-CITY</h2>
                <p>Nothing in the way of creativity</p>
              </div>
              <div className="content">
                <ul className="m-0 p-0">
                  <li>
                    <FontAwesomeIcon icon={faBookOpenReader} />
                    <p>Online Courses</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon>
                    <p>Earn A Certificates</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBookOpenReader} />{" "}
                    <p>Learn with Expert</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>Learn Anywhere</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faDollarSign} />
                    <p>Get a job</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="image">
              <img src={require("../../assets/logo.jpeg")} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoEdu;
