import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const CourseReviwers = () => {
  return (
    <div className="single-comment">
      <div className="thumb">
        <img src={require("../../assets/author.jpg")} alt="author" />
      </div>
      <div className="desc">
        <h5>Emilly Blunt</h5>
        <div className="rating">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
        </div>
        <p>
          Blessed made of meat doesn't lights doesn't was dominion and sea earth
          form
        </p>
      </div>
    </div>
  );
};
