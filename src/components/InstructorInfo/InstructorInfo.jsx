import React from "react";

import "./instructor_info.css";

export const InstructorInfo = () => {
  return (
    <div className="instructor-info">
      <div className="profile-img">
        <img
          src={require("../../assets/author.jpg")}
          alt="instructor"
          loading="lazy"
        />
      </div>
      <div className="profile-info">
        <ul className="p-0 m-0">
          <li>
            <a href="!#">Website</a>
          </li>
          <li>
            <a href="!#">Linkedin</a>
          </li>
          <li>
            <a href="!#">Twitter</a>
          </li>
          <li>
            <a href="!#">Youtube</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
