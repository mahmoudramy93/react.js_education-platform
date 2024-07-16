import {
  faEarthAmericas,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ContactInfo = () => {
  return (
    <div className="contact-info contact-container">
      <div className="sub-title">
        <h3>Contact Info</h3>
        <p>We're open for any suggestion or just to have a chat</p>
      </div>
      <div className="media">
        <span className="icon">
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
        </span>
        <div className="info">
          <p>
            <span>Address: </span>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="media">
        <span className="icon">
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
        </span>
        <div className="info">
          <p>
            <span>Phone: </span>
            +(20) 1234567890
          </p>
        </div>
      </div>
      <div className="media">
        <span className="icon">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </span>
        <div className="info">
          <p>
            <span>Email: </span>
            Example@domain.com
          </p>
        </div>
      </div>
      <div className="media">
        <span className="icon">
          <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>
        </span>
        <div className="info">
          <p>
            <span>Website: </span>
            www.edu-city.com
          </p>
        </div>
      </div>
    </div>
  );
};
