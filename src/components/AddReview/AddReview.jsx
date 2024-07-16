import React from "react";

import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddReview = () => {
  return (
    <form>
      <div className="form-group">
        <p>Your Rating</p>
        <ul className="rating p-0 m-0">
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faStar} />
            </a>
          </li>
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faStar} />
            </a>
          </li>
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faStar} />
            </a>
          </li>
          <li>
            <a href="!#">
              <FontAwesomeIcon fill="" icon={faStar} />
            </a>
          </li>
          <li>
            <a href="!#">
              <FontAwesomeIcon icon={faStar} />
            </a>
          </li>
        </ul>
      </div>
      <div className="form-group">
        <label>
          Your Review<span className="required">*</span>
        </label>
        <textarea
          placeholder="Your Feedback"
          className="form-control"
          defaultValue={""}
        />
      </div>
      <div className="form-group">
        <label>
          Name<span className="required">*</span>
        </label>
        <input type="text" placeholder="Name" className="form-control" />
      </div>
      <div className="form-group">
        <label>
          Email<span className="required">*</span>
        </label>
        <input type="email" placeholder="Email" className="form-control" />
      </div>
      <button type="submit" className="submit-review-btn">
        Submit
      </button>
    </form>
  );
};
