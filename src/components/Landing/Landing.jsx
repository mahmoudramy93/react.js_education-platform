import React from "react";

import "./landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Landing = (props) => {
  const { title } = props;
  return (
    <div className="landing-page landing-other-pages">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="text">
              <h2>{title}</h2>
              <Link to="/">
                Home
                <span>
                  <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </span>
                <p>{title}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
