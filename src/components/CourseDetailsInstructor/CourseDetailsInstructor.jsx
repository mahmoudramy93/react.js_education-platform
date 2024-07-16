import React from "react";

import "./course_details_instructor.css";
import { Link } from "react-router-dom";

export const CourseDetailsInstructor = () => {
  return (
    <div className="course-details-instructor-info">
      <div className="alignleft">
        <img src={require("../../assets/author.jpg")} alt="author" />
      </div>
      <div className="description">
        <h3>Merry Jhonson</h3>
        <h4>Back-End Developer</h4>
        <p>
          Encyclopaedia galactica Orion's sword explorations vanquish the
          impossible, astonishment radio telescope with pretty stories for which
          there's little good.
        </p>
        <Link to="/instructor_profile" className="view-profile">
          View Profile
        </Link>
      </div>
    </div>
  );
};
